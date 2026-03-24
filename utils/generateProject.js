import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const TEMPLATES_DIR = path.join(__dirname, "../templates");

/**
 * Recursively copy a directory, merging into destination.
 * Will NOT overwrite existing files unless overwrite=true.
 */
function copyRecursive(src, dest, overwrite = false) {
    if (!fs.existsSync(src)) return;

    if (fs.statSync(src).isDirectory()) {
        if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
        for (const child of fs.readdirSync(src)) {
            copyRecursive(path.join(src, child), path.join(dest, child), overwrite);
        }
    } else {
        if (!fs.existsSync(dest) || overwrite) {
            fs.copyFileSync(src, dest);
        }
    }
}

/**
 * Replace {{PROJECT_NAME}} placeholder in package.json
 */
function replaceProjectName(filePath, projectName) {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, "utf-8");
    content = content.replace(/\{\{PROJECT_NAME\}\}/g, projectName);
    fs.writeFileSync(filePath, content);
}

/**
 * Merge DB dependencies into the project's package.json
 */
function mergeDbDependencies(pkgJsonPath, database, language) {
    if (!database || database === "none") return;

    const pkgJson = JSON.parse(fs.readFileSync(pkgJsonPath, "utf-8"));

    if (database === "mongodb") {
        pkgJson.dependencies["mongoose"] = "^8.0.0";
    } else if (database === "pg") {
        pkgJson.dependencies["pg"] = "^8.11.3";
        if (language === "ts") {
            if (!pkgJson.devDependencies) pkgJson.devDependencies = {};
            pkgJson.devDependencies["@types/pg"] = "^8.11.0";
        }
    }

    fs.writeFileSync(pkgJsonPath, JSON.stringify(pkgJson, null, 2));
}

/**
 * Append DB env vars to .env.example with section headers.
 */
function appendDbEnvVars(envPath, database) {
    if (!database || database === "none") return;
    if (!fs.existsSync(envPath)) return;

    let envContent = fs.readFileSync(envPath, "utf-8");

    if (database === "mongodb") {
        envContent += `\n# MongoDB\nMONGO_URI=mongodb://localhost:27017/myapp\n`;
    } else if (database === "pg") {
        envContent += `\n# PostgreSQL\nDATABASE_URL=postgresql://user:password@localhost:5432/myapp\n`;
    }

    fs.writeFileSync(envPath, envContent);
}

/**
 * Inject DB connection import into the entry point (index.js/ts)
 */
function injectDbConnection(indexPath, database, ext) {
    if (!database || database === "none") return;
    if (!fs.existsSync(indexPath)) return;

    let content = fs.readFileSync(indexPath, "utf-8");

    if (database === "mongodb") {
        // Import connectDB and call it with top-level await (ESM supports this)
        const injection = `import connectDB from './config/db.js';\nawait connectDB();\n\n`;
        content = injection + content;
    } else if (database === "pg") {
        // Just import pool  it auto-connects on first query
        const injection = `import pool from './config/db.js';\n\n`;
        content = injection + content;
    }

    fs.writeFileSync(indexPath, content);
}

/**
 * For TS projects: uncomment the relevant DB env var in env.d.ts
 * so that process.env.MONGO_URI or process.env.DATABASE_URL gets typed
 */
function updateEnvTypes(projectPath, database) {
    if (!database || database === "none") return;

    const envDtsPath = path.join(projectPath, "src", "types", "env.d.ts");
    if (!fs.existsSync(envDtsPath)) return;

    let content = fs.readFileSync(envDtsPath, "utf-8");

    if (database === "mongodb") {
        content = content.replace("// MONGO_URI: string;", "MONGO_URI: string;");
    } else if (database === "pg") {
        content = content.replace("// DATABASE_URL: string;", "DATABASE_URL: string;");
    }

    fs.writeFileSync(envDtsPath, content);
}

/**
 * Main project generation function.
 * 1. Copy framework template (express-js, hono-ts, etc.)
 * 2. Overlay DB template (db-mongodb-js, db-pg-ts, etc.)
 * 3. Merge dependencies and inject imports
 */
export async function generateProject(projectPath, responses) {
    const { framework, language, database, packages } = responses;
    const ext = language === "ts" ? "ts" : "js";

    // Derive the project name from the path
    const projectName = path.basename(projectPath);

    // 1. Copy Framework Template
    const frameworkTemplate = `${framework}-${language}`;
    const frameworkPath = path.join(TEMPLATES_DIR, frameworkTemplate);

    if (!fs.existsSync(frameworkPath)) {
        throw new Error(`Template "${frameworkTemplate}" not found at ${frameworkPath}`);
    }

    copyRecursive(frameworkPath, projectPath);

    // 2. Overlay DB Template (config + models)
    if (database && database !== "none") {
        const dbTemplate = `db-${database}-${language}`;
        const dbPath = path.join(TEMPLATES_DIR, dbTemplate);

        if (fs.existsSync(dbPath)) {
            copyRecursive(dbPath, projectPath);
        }
    }

    // 3. Replace project name placeholder
    const pkgJsonPath = path.join(projectPath, "package.json");
    replaceProjectName(pkgJsonPath, projectName);

    // 4. Merge DB dependencies into package.json
    mergeDbDependencies(pkgJsonPath, database, language);

    // 5. Append DB env vars to .env.example
    appendDbEnvVars(path.join(projectPath, ".env.example"), database);

    // 6. Inject DB connection into entry point
    injectDbConnection(
        path.join(projectPath, "src", `index.${ext}`),
        database,
        ext
    );

    // 7. Update env.d.ts for TypeScript projects
    if (language === "ts") {
        updateEnvTypes(projectPath, database);
    }

    // 8. Add extra packages to package.json
    if (packages && packages.length > 0) {
        const pkgJson = JSON.parse(fs.readFileSync(pkgJsonPath, "utf-8"));
        for (const pkg of packages) {
            pkgJson.dependencies[pkg] = "latest";
        }
        fs.writeFileSync(pkgJsonPath, JSON.stringify(pkgJson, null, 2));
    }

    // 9. Copy .env.example as .env for convenience
    const envExamplePath = path.join(projectPath, ".env.example");
    const envPath = path.join(projectPath, ".env");
    if (fs.existsSync(envExamplePath)) {
        fs.copyFileSync(envExamplePath, envPath);
    }
}

