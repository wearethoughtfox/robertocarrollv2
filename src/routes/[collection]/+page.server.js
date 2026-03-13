import fetchCollection from '$lib/assets/js/fetchCollection'
import { collections, postsPerPage } from '$lib/config'
import { error } from '@sveltejs/kit'

// Tell SvelteKit which collection index pages to prerender
export const entries = () => collections.map(c => ({ collection: c.name }))

export const load = async ({ params }) => {
	const { collection } = params

	// Validate this is a known collection (prevents catching /about, /contact etc.)
	if (!collections.find(c => c.name === collection)) {
		error(404, `Collection "${collection}" not found`)
	}

	const { posts, total } = await fetchCollection(collection, { limit: postsPerPage })

	return { posts, total, collection }
}
