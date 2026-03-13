import { collections, postsPerPage } from '$lib/config'
import fetchCollection from '$lib/assets/js/fetchCollection'

// Always include page 1 for each collection — this ensures SvelteKit always has
// something to prerender for this route (page 1 redirects to the collection index).
// Pages 2+ are added dynamically when collections have enough posts for pagination.
export const entries = async () => {
	const result = []
	for (const col of collections) {
		result.push({ collection: col.name, page: '1' })

		const { total } = await fetchCollection(col.name, { limit: -1 })
		const pageCount = Math.ceil(total / postsPerPage)
		for (let i = 2; i <= pageCount; i++) {
			result.push({ collection: col.name, page: String(i) })
		}
	}
	return result
}
