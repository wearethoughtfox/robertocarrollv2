<script>
	import { siteTitle, siteDescription } from '$lib/config';

	let { data } = $props();
</script>

<svelte:head>
	<title>{siteTitle}</title>
	<meta name="description" content={siteDescription} />
</svelte:head>

<data.ReadMe />
