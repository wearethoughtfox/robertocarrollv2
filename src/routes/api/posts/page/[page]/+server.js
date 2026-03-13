import { postsPerPage } from '$lib/config'
import fetchCollection from '$lib/assets/js/fetchCollection'
import { json } from '@sveltejs/kit'

export const prerender = true

// Tell SvelteKit which pages to prerender
export const entries = async () => {
	const { total } = await fetchCollection('journal', { limit: -1 })
	const pageCount = Math.ceil(total / postsPerPage)
	return Array.from({ length: pageCount }, (_, i) => ({ page: String(i + 1) }))
}

export const GET = async ({ params }) => {
	const page = parseInt(params.page) || 1
	const offset = (page - 1) * postsPerPage

	const { posts } = await fetchCollection('journal', { offset, limit: postsPerPage })
	return json(posts)
}
