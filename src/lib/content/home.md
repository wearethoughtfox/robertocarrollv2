<script>
	import NewsletterSignup from '$lib/components/NewsletterSignup.svelte'
</script>

<section class="home-intro" aria-labelledby="home-intro-title">
	<img class="home-intro__mark" src="/images/quincunx-square.jpg" alt="" aria-hidden="true" />
	<h1 id="home-intro-title">
		<span>Rob Carroll</span>
		<span>is a writer who also makes websites</span>
	</h1>
</section>

I'm writing my first novel — working on the second draft, the one where you find out what the book is actually about. Along the way, my short fiction has appeared in the National Flash Fiction Day Anthology, won a Guardian short story competition, been long-listed for the Fish Short Story Prize, and reached the group stage of the NYC Midnight Flash Fiction Challenge.

For work, I make websites through [We Are Thought Fox](https://wearethoughtfox.com), the small studio I founded.

Father to three children, two of whom swim for Great Britain.

My newsletter is dispatched every week. It's about writing, reading, music and making. Notes from the workshop. I like to think of it less as a newsletter than a letter typed on an old Olivetti.

<NewsletterSignup />

I've also …

- Written articles for The Guardian, The National, The Wire and Time Out, on subjects as diverse as mirror neurons, Martin Parr, Syrian monasteries, Yemeni music and silent disco
- Rebuilt the [International Criminal Court's website](/work/icc-beta)
- Played guitar in a few bands (none very famous)
- Written a weekly parenting column for a few years
- Circumnavigated Australia
- Written about jazz in American literature for an MPhil at Pembroke College, Cambridge
- Still surfing, occasionally upright
- Built a campervan
- Helped launch a newspaper in Abu Dhabi
- Ran a club night in East London

What am I doing now? See my [now page](/now).

## Make contact

[Email me](mailto:rob@wearethoughtfox.com).

Unoffice hours — book a call. Inspired by Matt Webb.

Send anonymous feedback. Inspired by Gwern.

<style>
	.home-intro {
		margin-block: var(--space-l) var(--space-xl);
		padding-block: var(--space-m) var(--space-s);
		color: var(--color-darker);
		text-align: center;
	}

	.home-intro__mark {
		display: block;
		width: clamp(4rem, 16vw, 7rem);
		height: auto;
		margin-inline: auto;
		margin-block-end: var(--space-m);
		mix-blend-mode: multiply;
		opacity: 0.7;
	}

	.home-intro h1 {
		max-width: none;
		margin: 0;
		color: inherit;
		font-family: var(--font-base);
		font-size: var(--size-step-4);
		line-height: var(--leading-fine);
		font-weight: var(--font-bold);
	}

	.home-intro h1 span {
		display: block;
	}

	.home-intro h1 span:first-child {
		color: var(--color-darker);
	}

	.home-intro h1 span:last-child {
		max-width: 22ch;
		margin-inline: auto;
		color: color-mix(in srgb, var(--color-ink) 62%, var(--color-paper));
		font-weight: var(--font-regular);
	}

</style>
