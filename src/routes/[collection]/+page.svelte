<script>
	import PostsList from '$lib/components/PostsList.svelte'
	import { collections, siteDescription } from '$lib/config'

	let { data } = $props()

	const collectionConfig = $derived(collections.find(c => c.name === data.collection))
</script>

<svelte:head>
	<title>{collectionConfig?.label}</title>
	<meta data-key="description" name="description" content={siteDescription} />
</svelte:head>

<h1 class="visually-hidden">{collectionConfig?.label}</h1>

<PostsList posts={data.posts} basePath="/{data.collection}" collection={data.collection} />
