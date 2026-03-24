/**
 * @module utils/getUserInputs
 * @description Interactive prompts for project configuration.
 *              Remembers previous choices via the preferences cache.
 */

import { select, multiselect, isCancel, cancel } from "@clack/prompts";
import { loadPreferences, savePreferences } from "./preferences.js";

export function onCancel() {
    cancel("Operation terminated by user.");
    process.exit(0);
}

/**
 * Helper  sets the `initialValue` on the matching option so clack pre-selects it.
 * Returns the options array unchanged if no saved value exists in the list.
 */
function withDefault(options, savedValue) {
    if (!savedValue) return { options };
    const match = options.find((o) => o.value === savedValue);
    return { options, initialValue: match ? match.value : undefined };
}

export async function getUserInputs() {
    const saved = loadPreferences();

    const framework = await select({
        message: "Select a backend framework:",
        ...withDefault(
            [
                { value: "express", label: "Express", hint: "Fast, minimalist web framework" },
                { value: "hono", label: "Hono", hint: "Ultrafast web framework" },
            ],
            saved.framework
        ),
    });

    if (isCancel(framework)) onCancel();

    const language = await select({
        message: "Select a language:",
        ...withDefault(
            [
                { value: "js", label: "JavaScript" },
                { value: "ts", label: "TypeScript" },
            ],
            saved.language
        ),
    });

    if (isCancel(language)) onCancel();

    const database = await select({
        message: "Select a database:",
        ...withDefault(
            [
                { value: "mongodb", label: "MongoDB", hint: "NoSQL with Mongoose" },
                { value: "pg", label: "PostgreSQL", hint: "SQL with node-postgres" },
                { value: "none", label: "None", hint: "Skip database setup" },
            ],
            saved.database
        ),
    });

    if (isCancel(database)) onCancel();

    const packages = await multiselect({
        message: "Select additional packages (space to toggle):",
        options: [
            { value: "bcrypt", label: "bcrypt", hint: "Password hashing" },
            { value: "jsonwebtoken", label: "jsonwebtoken", hint: "JWT authentication" },
            { value: "zod", label: "zod", hint: "Schema validation" },
            { value: "morgan", label: "morgan", hint: "HTTP request logger" },
            { value: "helmet", label: "helmet", hint: "Security headers" },
            { value: "nodemailer", label: "nodemailer", hint: "Email sending" },
        ],
        required: false,
    });

    if (isCancel(packages)) onCancel();

    const pkgManager = await select({
        message: "Select a package manager:",
        ...withDefault(
            [
                { value: "npm", label: "npm", hint: "Default Node.js package manager" },
                { value: "pnpm", label: "pnpm", hint: "Fast, disk-efficient" },
                { value: "yarn", label: "yarn", hint: "Reliable, offline support" },
                { value: "bun", label: "bun", hint: "All-in-one JS runtime" },
            ],
            saved.pkgManager
        ),
    });

    if (isCancel(pkgManager)) onCancel();

    // Persist choices for next run
    savePreferences({ framework, language, database, pkgManager });

    return { framework, language, database, packages, pkgManager };
}
