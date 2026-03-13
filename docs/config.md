# Site configuration

All site-wide settings live in one file: `src/lib/config.js`. Update this before publishing.

---

## Site identity

```js
export const siteTitle = 'My Awesome Blog'
export const siteDescription = 'Built with the SvelteKit Static Blog Starter'
export const siteURL = 'example.com'
export const siteLink = 'https://github.com/josh-collinsworth/sveltekit-blog-starter'
export const siteAuthor = '- find and change this text in src/lib/config.js'
```

| Value | What to put | Used in |
|---|---|---|
| `siteTitle` | Your name or site name | Browser tab, header logo, RSS feed title |
| `siteDescription` | One-sentence description of the site | Collection index `<meta>` tags, RSS feed |
| `siteURL` | Your domain, no `https://`, no trailing slash — e.g. `robertocarroll.com` | RSS feed links |
| `siteLink` | URL to the site's source repo (or remove from RSS if not relevant) | RSS feed `atom:link` |
| `siteAuthor` | Your name | Footer copyright line |

---

## Pagination

```js
export const postsPerPage = 10
```

How many posts appear on each collection index page before paginating. Changing this affects all three collections at once. Used in 8 places (collection pages, API endpoints, pagination component, `fetchCollection`) — change it here and nowhere else.

---

## Collections

```js
export const collections = [
  { name: 'work',    label: 'Work'    },
  { name: 'writing', label: 'Writing' },
  { name: 'journal', label: 'Journal' },
]
```

Registers which collections exist. Each entry must have:
- `name` — matches the folder name in `src/lib/collections/` and becomes the URL path (`/work/`, `/writing/`, etc.)
- `label` — human-readable name (used in page titles and headings)

See `docs/adding-a-collection.md` for the full process of adding a new one.

---

## Navigation

```js
export const navItems = [
  { title: 'Work',    route: '/work'    },
  { title: 'Writing', route: '/writing' },
  { title: 'Journal', route: '/journal' },
  { title: 'About',   route: '/about'   },
  { title: 'Contact', route: '/contact' },
]
```

Controls the main nav menu (also used by the footer and mobile nav). Order here is order on screen.

- `title` — link text
- `route` — must start with `/`

Collection routes (work, writing, journal) and static page routes (about, contact) can be mixed freely.
