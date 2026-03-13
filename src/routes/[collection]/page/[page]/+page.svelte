<script>
	import PostsList from '$lib/components/PostsList.svelte'
	import Pagination from '$lib/components/Pagination.svelte'
	import { collections, postsPerPage, siteDescription } from '$lib/config'

	let { data } = $props()
	const { page, total, posts, collection } = data

	const collectionConfig = $derived(collections.find(c => c.name === collection))
	let lowerBound = $derived((page * postsPerPage) - (postsPerPage - 1) || 1)
	let upperBound = $derived(Math.min(page * postsPerPage, total))
</script>

<svelte:head>
	<title>{collectionConfig?.label} - page {page}</title>
	<meta data-key="description" name="description" content={siteDescription} />
</svelte:head>

{#if posts.length}
	<h1>{collectionConfig?.label}: {lowerBound}–{upperBound} of {total}</h1>

	<Pagination currentPage={page} totalPosts={total} path="/{collection}/page" />

	<PostsList {posts} basePath="/{collection}" />

	<Pagination currentPage={page} totalPosts={total} path="/{collection}/page" />
{:else}
	<h1>Oops!</h1>
	<p>No posts to show here.</p>
	<a href="/{collection}">Back to {collectionConfig?.label}</a>
{/if}
