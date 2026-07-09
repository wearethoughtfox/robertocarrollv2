import fetchCollection from '$lib/assets/js/fetchCollection'
import { collections } from '$lib/config'
import { error } from '@sveltejs/kit'

// Tell SvelteKit which collection index pages to prerender
export const entries = () => collections.map(c => ({ collection: c.name }))

export const load = async ({ params }) => {
	const { collection } = params

	// Validate this is a known collection (prevents catching /about, /contact etc.)
	if (!collections.find(c => c.name === collection)) {
		error(404, `Collection "${collection}" not found`)
	}

	// No pagination: every post in the collection on one page
	const { posts, total } = await fetchCollection(collection, { limit: -1 })

	return { posts, total, collection }
}
