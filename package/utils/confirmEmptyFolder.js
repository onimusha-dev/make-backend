import fs from "fs";
import path from "path";
import { confirm } from "@clack/prompts";
import { onCancel } from "./getUserInputs.js";

export async function confirmEmptyFolder(dirName) {
    const targetDir = path.resolve(process.cwd(), dirName);
    if (!fs.existsSync(targetDir)) return;

    if (fs.readdirSync(targetDir).length === 0) return;

    const shouldContinue = await confirm({
        message: `Target directory "${dirName}" is not empty. Continue?`,
    });

    if (!shouldContinue) onCancel();
}
