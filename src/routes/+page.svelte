<script>
	import { siteTitle, siteDescription } from '$lib/config';

	let { data } = $props();
</script>

<svelte:head>
	<title>{siteTitle}</title>
	<meta name="description" content={siteDescription} />
</svelte:head>

<div class="center flow home">
	<data.ReadMe />
</div>

<style>
	.home {
		--center-max-width: 52ch;
	}
</style>
