<script>
	import { newsletterUsername } from '$lib/config'
</script>

{#if newsletterUsername}
	<form
		class="newsletter-signup"
		action="https://buttondown.com/api/emails/embed-subscribe/{newsletterUsername}"
		method="post"
		target="_blank"
	>
		<label class="sr-only" for="newsletter-email">Email address</label>
		<input
			type="email"
			name="email"
			id="newsletter-email"
			placeholder="you@example.com"
			required
		/>
		<button type="submit">Sign up</button>
	</form>
{:else}
	<form class="newsletter-signup" aria-label="Newsletter signup">
		<label class="sr-only" for="newsletter-email-fallback">Email address</label>
		<input
			type="email"
			name="email"
			id="newsletter-email-fallback"
			placeholder="Enter your email"
			required
		/>
		<button type="submit">Subscribe</button>
	</form>
{/if}

<style>
	.newsletter-signup {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-block: 1.5rem;
	}

	.newsletter-signup input[type='email'] {
		flex: 1 1 14rem;
	}

	.newsletter-signup button {
		flex: 0 0 auto;
	}

	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		overflow: hidden;
		clip: rect(0 0 0 0);
		white-space: nowrap;
	}
</style>
