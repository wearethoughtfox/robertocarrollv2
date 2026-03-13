# Adding a new collection

Collections are the top-level content types on the site (currently: work, writing, journal). Each collection automatically gets its own index page (`/name/`), paginated pages (`/name/page/2/`), and individual post pages (`/name/slug/`).

Adding a new collection requires **two steps** and optionally a third if you want a custom post layout.

---

## Step 1 — Register it in config

Open `src/lib/config.js` and add an entry to `collections`:

```js
export const collections = [
  { name: 'work',    label: 'Work'    },
  { name: 'writing', label: 'Writing' },
  { name: 'journal', label: 'Journal' },
  { name: 'photos',  label: 'Photos'  }, // ← new
]
```

If you want it in the nav, also add it to `navItems` in the same file:

```js
export const navItems = [
  { title: 'Work',    route: '/work'    },
  { title: 'Writing', route: '/writing' },
  { title: 'Journal', route: '/journal' },
  { title: 'Photos',  route: '/photos'  }, // ← new
  { title: 'About',   route: '/about'   },
  { title: 'Contact', route: '/contact' },
]
```

---

## Step 2 — Create the content folder

Create a folder with the same name as `name` above inside `src/lib/collections/`:

```
src/lib/collections/photos/
```

Drop your markdown files in there. Filenames become the URL slugs — so `src/lib/collections/photos/istanbul.md` is served at `/photos/istanbul`.

### Frontmatter

Every post needs at minimum a `title` and a `date`:

```yaml
---
title: Istanbul at night
date: 2024-03-15
excerpt: A short description used in listings and meta tags.
---
```

The `date` field controls sort order (newest first). The `excerpt` field is used in listings and `<meta>` tags.

---

## Step 3 (optional) — Custom post template

By default, posts use `src/lib/components/templates/default.svelte` which shows title, date, and content.

To use a different layout for your new collection, create a template file:

```
src/lib/components/templates/photos.svelte
```

The template receives a `data` prop containing:
- `data.meta` — all frontmatter fields (title, date, excerpt, and anything custom you add)
- `data.PostContent` — the rendered markdown body as a Svelte component
- `data.collection` — the collection name string

**Minimal template:**

```svelte
<script>
  let { data } = $props()
  const { title, date } = data.meta
  const { PostContent } = data
</script>

<article>
  <h1>{title}</h1>
  <PostContent />
</article>
```

Then register it in `src/routes/[collection]/[slug]/+page.svelte`:

```svelte
<script>
  import DefaultTemplate from '$lib/components/templates/default.svelte'
  import WorkTemplate    from '$lib/components/templates/work.svelte'
  import WritingTemplate from '$lib/components/templates/writing.svelte'
  import PhotosTemplate  from '$lib/components/templates/photos.svelte' // ← new

  const templates = {
    work:    WorkTemplate,
    writing: WritingTemplate,
    photos:  PhotosTemplate, // ← new
  }

  let { data } = $props()
  const Template = $derived(templates[data.collection] ?? DefaultTemplate)
</script>

<svelte:head>...</svelte:head>
<Template {data} />
```

Any collection not listed in `templates` falls back to `DefaultTemplate` automatically.

---

## That's it

Run `npm run build` (or `npm run dev` to preview locally). The new collection routes are picked up automatically — no route files to create.
