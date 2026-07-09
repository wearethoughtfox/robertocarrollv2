<script>
	import NavItems from './NavItems.svelte'
	import { siteTitle } from '$lib/config'
</script>

<a class="skip-link visually-hidden visually-hidden--focusable" href="#main">
	Skip to main content
</a>

<header class="site-head">
	<div class="wrapper">
		<div class="repel">
			<a href="/" class="site-head__title">
				{siteTitle}
			</a>
			<nav aria-label="Main">
				<NavItems />
			</nav>
		</div>
	</div>
</header>

<style>
	.skip-link {
		position: fixed;
		top: var(--space-s);
		left: var(--space-s);
		z-index: 999;
		background: var(--color-darker);
		color: var(--color-paper);
		padding: var(--space-xs) var(--space-s);
		border-radius: var(--radius-s);
		font-weight: var(--font-bold);
		text-decoration: none;
	}

	.site-head {
		padding-block: var(--space-m);
		border-block-end: var(--stroke);
	}

	.site-head__title {
		font-weight: var(--font-bold);
		font-size: var(--size-step-1);
		text-decoration: none;
		color: var(--color-darker);
	}

	nav :global(ul) {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-s) var(--space-m);
		list-style: none;
		margin: 0;
		padding: 0;
	}

	nav :global(a) {
		color: var(--color-ink);
		text-decoration: none;
	}

	nav :global(a:hover) {
		color: var(--color-accent);
	}

	nav :global(a[aria-current='page']) {
		text-decoration: underline;
		text-underline-offset: 0.3em;
		color: var(--color-darker);
	}
</style>
