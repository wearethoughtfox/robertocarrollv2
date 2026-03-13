import { postsPerPage } from '$lib/config'
import fetchCollection from '$lib/assets/js/fetchCollection'
import { json } from '@sveltejs/kit'

export const prerender = true

// Returns the first page of journal posts (kept for RSS and backwards compatibility)
export const GET = async () => {
	const { posts } = await fetchCollection('journal', { limit: postsPerPage })
	return json(posts)
}
