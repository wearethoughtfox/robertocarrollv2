<script>
	let { data } = $props()

	const { title, date } = data.meta
	const { PostContent } = data

	const year = date ? new Date(date).getFullYear() : null
</script>

<article class="writing-article">
	<h1>{title}</h1>
	<hr />

	<PostContent />

	{#if year}
		<p class="writing-year"><time datetime={date}>{year}</time></p>
	{/if}
</article>
