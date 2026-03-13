import adapter from "@sveltejs/adapter-static";
import { mdsvex } from "mdsvex";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Ensures both .svelte and .md files are treated as components (can be imported and used anywhere, or used as pages)
	extensions: [".svelte", ".md"],

	kit: {
		adapter: adapter(),
		prerender: {
			// "*" crawls all links found on prerendered pages.
			// Dynamic collection routes ([collection], [collection]/[slug], [collection]/page/[page])
			// declare their own entries() functions so SvelteKit knows what to prerender.
			entries: ["*"],
			handleHttpError: ({ path, message }) => {
				// Warn instead of throw for category routes - these will be built in a future phase
				if (path.includes('/category/')) {
					console.warn(`Skipping unbuilt route: ${path}`)
					return
				}
				throw new Error(message)
			}
		},
	},

	preprocess: [
		mdsvex({
			// The default mdsvex extension is .svx; this overrides that.
			extensions: [".md"],

			// Adds IDs to headings, and anchor links to those IDs. Note: must stay in this order to work.
			rehypePlugins: [
				rehypeSlug,
				rehypeAutolinkHeadings,
			],
		}),
	],
};

export default config;
