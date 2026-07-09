import { sveltekit } from "@sveltejs/kit/vite";
import { generateTokens } from "./scripts/generate-tokens.js";

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit(),
		{
			name: "tokens",
			buildStart: generateTokens,
		},
	],
	server: {
		fs: {
			allow: ["."],
		},
	},
};

export default config;
