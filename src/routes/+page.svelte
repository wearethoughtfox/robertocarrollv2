<script>
	import { siteTitle, siteDescription } from '$lib/config';

	let { data } = $props();

	// Injected at build time from home.md's git history (see vite.config.js)
	const updated = new Date(__HOME_UPDATED__).toLocaleDateString('en-GB', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	});
</script>

<svelte:head>
	<title>{siteTitle}</title>
	<meta name="description" content={siteDescription} />
</svelte:head>

<data.ReadMe />

<p class="home-updated">Last updated {updated}.</p>

<style>
	.home-updated {
		font-size: var(--size-step-00);
		color: var(--color-dark);
	}
</style>
