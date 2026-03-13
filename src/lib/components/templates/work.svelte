<script>
	let { data } = $props()

	const { title, excerpt, date, services } = data.meta
	const { PostContent } = data

	const year = date ? new Date(date).getFullYear() : null
</script>

<article class="work-main">
	<h1>{title}</h1>
	{#if excerpt}
		<p class="work-excerpt">{excerpt}</p>
	{/if}
	<hr />
	<PostContent />
</article>

<aside class="work-aside">
	{#if year}
		<h2>Year</h2>
		<time datetime={date}>{year}</time>
	{/if}

	{#if services}
		<h2>My role</h2>
		<ul class="work-services">
			{#each services as service}
				<li>{service}</li>
			{/each}
		</ul>
	{/if}
</aside>
