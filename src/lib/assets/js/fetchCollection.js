import { postsPerPage } from '$lib/config'

// Single static glob covering ALL collections.
// Vite resolves this at build time - adding a new collection folder
// is picked up automatically without touching this file.
const allCollectionFiles = import.meta.glob('/src/lib/collections/**/*.md')

const fetchCollection = async (collection, { offset = 0, limit = postsPerPage, category = '' } = {}) => {

	// Filter to just the requested collection's files
	const collectionFiles = Object.entries(allCollectionFiles)
		.filter(([path]) => path.includes(`/collections/${collection}/`))

	const posts = await Promise.all(
		collectionFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver()
			const slug = path.split('/').pop().slice(0, -3)
			return { ...metadata, slug }
		})
	)

	let sorted = posts.sort((a, b) => new Date(b.date) - new Date(a.date))

	if (category) {
		sorted = sorted.filter(post => post.categories?.includes(category))
	}

	// Total count BEFORE pagination - used for pagination UI
	const total = sorted.length

	if (offset) {
		sorted = sorted.slice(offset)
	}

	if (limit && limit !== -1 && limit < sorted.length) {
		sorted = sorted.slice(0, limit)
	}

	return {
		posts: sorted.map(post => ({
			title: post.title,
			slug: post.slug,
			excerpt: post.excerpt,
			coverImage: post.coverImage,
			coverWidth: post.coverWidth,
			coverHeight: post.coverHeight,
			date: post.date,
			categories: post.categories,
		})),
		total
	}
}

export default fetchCollection
