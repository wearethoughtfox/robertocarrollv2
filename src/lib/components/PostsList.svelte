<script>
	let { posts = [], basePath = '/journal', collection = 'journal' } = $props();

	// Per-collection date treatment:
	// work        -> "2017"           (year label above the title)
	// journalism  -> "June 2012"      (month + year label above the title)
	// journal     -> "1 May 2015"     (full date beside the title, archive-style)
	const dateLabel = (d) => {
		const date = new Date(d);
		if (collection === 'work') {
			return String(date.getFullYear());
		}
		if (collection === 'journalism') {
			return date.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' });
		}
		return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
	};
</script>

{#if collection === 'journal'}
	<ul class="posts-list posts-list--archive" role="list">
		{#each posts as post}
			<li>
				<a href="{basePath}/{post.slug}">{post.title}</a>
				<time datetime={post.date}>{dateLabel(post.date)}</time>
			</li>
		{/each}
	</ul>
{:else}
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
						<time class="posts-list__date" datetime={post.date}>{dateLabel(post.date)}</time>
						<h2>
							{post.title}
						</h2>
					</a>
				</article>

				{#if post.excerpt}
					<p class="posts-list__excerpt">{post.excerpt}</p>
				{/if}
			</li>
		{/each}
	</ul>
{/if}

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
		color: var(--color-darker);
	}

	.posts-list a:hover h2 {
		color: var(--color-accent);
	}

	.posts-list h2 {
		font-size: var(--size-step-2);
	}

	.posts-list__date {
		display: block;
		font-size: var(--size-step-00);
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: var(--color-dark);
	}

	.posts-list__excerpt {
		font-style: italic;
		margin-block-start: var(--space-xs);
	}

	/* Compact archive list for the journal: title left, date right */
	.posts-list--archive > li {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		gap: var(--space-m);
	}

	.posts-list--archive > li + li {
		margin-block-start: var(--space-s);
	}

	.posts-list--archive a:hover {
		color: var(--color-accent);
	}

	.posts-list--archive time {
		flex-shrink: 0;
		font-size: var(--size-step-00);
		color: var(--color-dark);
		font-variant-numeric: tabular-nums;
	}
</style>
