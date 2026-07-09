<script>
	import { currentPage } from '../assets/js/store';

	let { href, children } = $props();

	let isCurrentPage = $derived(href === '/' ? $currentPage === '/' : $currentPage.startsWith(href));
</script>

<li>
	<a {href} aria-current={isCurrentPage ? 'page' : false}>
		{@render children?.()}
	</a>
</li>
