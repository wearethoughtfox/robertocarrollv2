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
				// During migration, warn instead of throwing for:
				// - category routes (not yet built)
				// - missing images/assets (not yet copied from Jekyll)
				// - broken internal links to posts not yet migrated
				const isCategory = path.includes('/category/')
				const isAsset = /\.(jpg|jpeg|png|gif|svg|webp|pdf|mp4|mp3)$/i.test(path)
				const isMissingPost = /^\/(journal|work|writing)\/[^/]+\/?$/.test(path)
				if (isCategory || isAsset || isMissingPost) {
					console.warn(`Skipping during migration: ${path}`)
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
