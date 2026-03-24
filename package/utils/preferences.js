/**
 * @module utils/preferences
 * @description Persists user preferences (framework, language, database, package manager)
 *              across CLI runs. Stored at:
 *                - Linux/Mac: ~/.config/create-backend/preferences.json
 *                - Windows:   %APPDATA%/create-backend/preferences.json
 */

import fs from "fs";
import path from "path";
import os from "os";

/** Resolve the config directory based on the current OS. */
function getConfigDir() {
    const platform = os.platform();

    if (platform === "win32") {
        // Windows: use %APPDATA%
        return path.join(
            process.env.APPDATA || path.join(os.homedir(), "AppData", "Roaming"),
            "create-backend"
        );
    }

    // Linux / macOS: use XDG_CONFIG_HOME or ~/.config
    const xdgConfig = process.env.XDG_CONFIG_HOME || path.join(os.homedir(), ".config");
    return path.join(xdgConfig, "create-backend");
}

const CONFIG_DIR = getConfigDir();
const PREFS_FILE = path.join(CONFIG_DIR, "preferences.json");

/**
 * Load saved preferences from disk.
 * Returns an empty object if no preferences file exists yet.
 */
export function loadPreferences() {
    try {
        if (fs.existsSync(PREFS_FILE)) {
            return JSON.parse(fs.readFileSync(PREFS_FILE, "utf-8"));
        }
    } catch {
        // Corrupted file  ignore and start fresh
    }
    return {};
}

/**
 * Save user preferences to disk.
 * Creates the config directory if it doesn't exist.
 * @param {object} prefs - The preferences object to persist.
 */
export function savePreferences(prefs) {
    try {
        if (!fs.existsSync(CONFIG_DIR)) {
            fs.mkdirSync(CONFIG_DIR, { recursive: true });
        }
        fs.writeFileSync(PREFS_FILE, JSON.stringify(prefs, null, 2));
    } catch {
        // Non-critical  silently ignore write failures
    }
}
