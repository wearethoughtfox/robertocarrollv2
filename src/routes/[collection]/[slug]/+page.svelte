<script>
	import DefaultTemplate from '$lib/components/templates/default.svelte'
	import WorkTemplate from '$lib/components/templates/work.svelte'
	import WritingTemplate from '$lib/components/templates/writing.svelte'

	// Map collection names to their templates.
	// Any collection not listed here falls back to DefaultTemplate.
	const templates = {
		work: WorkTemplate,
		writing: WritingTemplate,
	}

	let { data } = $props()

	const Template = $derived(templates[data.collection] ?? DefaultTemplate)
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta data-key="description" name="description" content={data.meta.excerpt} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
	<meta name="twitter:title" content={data.meta.title} />
	<meta property="og:description" content={data.meta.excerpt} />
	<meta name="twitter:description" content={data.meta.excerpt} />
</svelte:head>

<Template {data} />
