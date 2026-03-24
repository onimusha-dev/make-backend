import { execa } from "execa";

export async function installAdditionalDeps(responses, pkg, useYarn) {
    if (!responses.packages || responses.packages.length === 0) return;

    // Filter out packages that are already in package.json (we added them there)
    // The npm install will pick them up. This function is a fallback.
    // Since we already add them to package.json, we don't need to install separately.
    // But if needed for packages not in package.json:
    // const args = pkg === "npm" ? ["install", ...responses.packages] : ["add", ...responses.packages];
    // await execa(pkg, args);
}
