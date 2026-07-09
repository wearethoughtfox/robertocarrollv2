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
	<p>
		<a href="mailto:rob@wearethoughtfox.com?subject=Newsletter">Email me</a> and I’ll add you to
		the list from the first issue.
	</p>
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

	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		overflow: hidden;
		clip: rect(0 0 0 0);
		white-space: nowrap;
	}
</style>
