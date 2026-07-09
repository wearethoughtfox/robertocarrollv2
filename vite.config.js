import { sveltekit } from "@sveltejs/kit/vite";
import { generateTokens } from "./scripts/generate-tokens.js";
import { execSync } from "node:child_process";
import { statSync } from "node:fs";

/**
 * When was this content file last actually changed?
 * Uses the git commit date; falls back to filesystem mtime when the file
 * has uncommitted changes (or git isn't available, e.g. some CI images).
 */
function lastUpdated(path) {
	try {
		const dirty = execSync(`git status --porcelain -- ${path}`).toString().trim();
		if (!dirty) {
			const iso = execSync(`git log -1 --format=%cI -- ${path}`).toString().trim();
			if (iso) return iso;
		}
	} catch {
		// fall through to mtime
	}
	return statSync(path).mtime.toISOString();
}

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit(),
		{
			name: "tokens",
			buildStart: generateTokens,
		},
	],
	define: {
		__HOME_UPDATED__: JSON.stringify(lastUpdated("src/lib/content/home.md")),
	},
	server: {
		fs: {
			allow: ["."],
		},
	},
};

export default config;
