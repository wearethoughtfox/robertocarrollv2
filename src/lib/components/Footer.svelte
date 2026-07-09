<script>
	import { siteAuthor } from '$lib/config';
	import NavItems from './NavItems.svelte';
</script>

<footer class="site-foot">
	<div class="wrapper repel">
		<nav aria-label="Footer">
			<NavItems />
		</nav>

		<p class="site-foot__meta">
			<a href="/api/rss.xml" data-sveltekit-reload>RSS</a>
			&nbsp;·&nbsp; &copy;{new Date().getFullYear()} {siteAuthor}
		</p>
	</div>
</footer>

<style>
	.site-foot {
		padding-block: var(--space-l);
		border-block-start: var(--stroke);
		margin-block-start: auto;
	}

	.site-foot__meta {
		font-size: var(--size-step-00);
		max-width: unset;
	}

	nav :global(ul) {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-s) var(--space-m);
		list-style: none;
		margin: 0;
		padding: 0;
	}

	nav :global(a),
	.site-foot__meta a {
		color: var(--color-ink);
	}
</style>
