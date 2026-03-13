import { error } from '@sveltejs/kit'

// Tell SvelteKit which collection/slug combos to prerender
export const entries = () => {
	const allFiles = import.meta.glob('/src/lib/collections/**/*.md')
	return Object.keys(allFiles).map(path => {
		const parts = path.split('/')
		const slug = parts.pop().replace('.md', '')
		const collection = parts.pop()
		return { collection, slug }
	})
}

export const load = async ({ params }) => {
	const { collection, slug } = params

	try {
		const post = await import(`../../../lib/collections/${collection}/${slug}.md`)

		return {
			PostContent: post.default,
			meta: { ...post.metadata, slug },
			collection
		}
	} catch(err) {
		error(404, err)
	}
}
