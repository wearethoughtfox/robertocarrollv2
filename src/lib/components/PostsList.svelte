<script>
	let { posts = [], basePath = '/journal' } = $props();
</script>

<ul class="posts-list" role="list">
	{#each posts as post}
		<li>
			<article>
				<a href="{basePath}/{post.slug}">
					{#if post.coverImage}
						<img
							src={post.coverImage}
							alt=""
							width={post.coverWidth}
							height={post.coverHeight}
							style="ratio: {post.coverWidth} / {post.coverHeight}"
						/>
					{/if}
					<h2>
						{post.title}
					</h2>
				</a>
			</article>

			{#if post.excerpt}
				<p>{post.excerpt}</p>
			{/if}
		</li>
	{/each}
</ul>

<style>
	.posts-list {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.posts-list > li + li {
		margin-block-start: var(--space-l);
	}

	.posts-list a {
		text-decoration: none;
	}

	.posts-list a:hover h2 {
		color: var(--color-accent);
	}

	.posts-list h2 {
		font-size: var(--size-step-2);
	}

	.posts-list li p {
		margin-block-start: var(--space-xs);
	}
</style>
