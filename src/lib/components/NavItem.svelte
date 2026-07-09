<script>
	import { currentPage } from '../assets/js/store';

	let { href, children } = $props();

	// Match the whole path segment: /journal matches /journal and /journal/foo,
	// but not /journalism (which merely starts with the same characters)
	let isCurrentPage = $derived(
		href === '/'
			? $currentPage === '/'
			: $currentPage === href || $currentPage.startsWith(href + '/')
	);
</script>

<li>
	<a {href} aria-current={isCurrentPage ? 'page' : false}>
		{@render children?.()}
	</a>
</li>
