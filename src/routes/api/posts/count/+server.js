import { json } from '@sveltejs/kit'
import fetchCollection from '$lib/assets/js/fetchCollection'

export const prerender = true

// Returns total journal post count
export const GET = async () => {
	const { total } = await fetchCollection('journal', { limit: -1 })
	return json(total)
}
