import fetchCollection from '$lib/assets/js/fetchCollection'
import { collections, postsPerPage } from '$lib/config'
import { redirect, error } from '@sveltejs/kit'

export const load = async ({ params }) => {
	const { collection } = params
	const page = parseInt(params.page) || 1

	if (!collections.find(c => c.name === collection)) {
		error(404, `Collection "${collection}" not found`)
	}

	// Redirect page 1 to the collection index
	if (page <= 1) {
		redirect(301, `/${collection}`)
	}

	const offset = (page - 1) * postsPerPage
	const { posts, total } = await fetchCollection(collection, { offset, limit: postsPerPage })

	return { posts, page, total, collection }
}
