
import { execa } from "execa";

export async function isYarnV1() {
    try {
        const { stdout } = await execa("yarn", ["--version"]);
        return stdout.startsWith("1.");
    } catch (e) {
        return false;
    }
}
