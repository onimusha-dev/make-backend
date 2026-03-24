#!/usr/bin/env node

import { intro, isCancel, log, outro, spinner, text } from "@clack/prompts";
import chalk from "chalk";
import { execa } from "execa";
import path from "path";

// Utility functions
import { confirmEmptyFolder } from "../utils/confirmEmptyFolder.js";
import { getUserInputs, onCancel } from "../utils/getUserInputs.js";
import { generateProject } from "../utils/generateProject.js";

const CURRENT_DIR = process.cwd();

async function main() {
    intro(chalk.bgCyan.black(" [INIT] make-backend "));

    const projectName = await text({
        message: "Enter the project name:",
        placeholder: "backend-service",
        validate(value) {
            if (!value || !value.trim()) return "Project name is required.";
            if (/[^a-zA-Z0-9-_.]/.test(value)) return "Project name contains invalid characters.";
        },
    });

    if (isCancel(projectName)) onCancel();

    await confirmEmptyFolder(projectName);

    const responses = await getUserInputs();
    const { pkgManager } = responses;
    const projectPath = path.resolve(CURRENT_DIR, projectName);

    // 1. Scaffold
    const scaffoldSpin = spinner();
    scaffoldSpin.start("Scaffolding project structure...");
    try {
        await generateProject(projectPath, responses);
        scaffoldSpin.stop(chalk.green("[SUCCESS] Project scaffolded."));
    } catch (err) {
        scaffoldSpin.stop(chalk.red("[ERROR] Initialization failed during scaffolding."));
        throw err;
    }

    // 2. Install Dependencies
    process.chdir(projectPath);
    const depSpin = spinner();
    depSpin.start(`Installing dependencies via ${pkgManager}...`);
    try {
        await execa(pkgManager, ["install"], { stdio: ["ignore", "ignore", "pipe"] });
        depSpin.stop(chalk.green("[SUCCESS] Dependencies installed."));
    } catch (err) {
        depSpin.stop(chalk.red("[ERROR] Dependency installation failed."));
        throw err;
    }

    // 3. Git Init
    const gitSpin = spinner();
    gitSpin.start("Initializing version control...");
    try {
        await execa("git", ["init"], { stdio: "ignore" });
        gitSpin.stop(chalk.green("[SUCCESS] Git repository initialized."));
    } catch (e) {
        gitSpin.stop(chalk.yellow("[WARNING] Git initialization skipped."));
    }

    // Summary
    log.success(chalk.green.bold("Project initialized successfully."));
    log.message("");
    log.message(chalk.dim("  Post-initialization steps:"));
    log.message("");
    log.message(chalk.cyan(`  cd ${projectName}`));
    log.message(chalk.cyan(`  ${pkgManager} run dev`));
    log.message("");

    outro(chalk.dim("Project initialization sequence complete."));
}

main().catch((e) => {
    console.error(chalk.red("Error:"), e.message || e);
    onCancel();
});
