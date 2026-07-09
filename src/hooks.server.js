import { redirect } from '@sveltejs/kit'

// 301 redirects for URLs from the old Jekyll site.
// The journalism collection lived at /writing/ — slugs are unchanged.
export function handle({ event, resolve }) {
	const { pathname } = event.url
	const normalized = pathname.replace(/\/$/, '') || '/'

	if (normalized.startsWith('/writing/')) {
		redirect(301, normalized.replace('/writing/', '/journalism/'))
	}

	return resolve(event)
}
