/**
 * All of these values are used throughout the site – for example, 
 * in the <meta> tags, in the footer, and in the RSS feed.
 * 
 * PLEASE BE SURE TO UPDATE THEM ALL! Thank you!
 **/ 

export const siteTitle = 'Rob Carroll'
export const siteDescription = 'Rob Carroll is a writer who also makes websites. Journalism, web work, and a journal.'
export const siteURL = 'robertocarroll.com'
export const siteLink = 'https://robertocarroll.com'
export const siteAuthor = 'Rob Carroll'

// Controls how many posts are shown per page on the main blog index pages
export const postsPerPage = 10

// Define your collections here - each becomes a /{name}/ route automatically.
// Adding a new collection: add an entry here + create src/lib/collections/{name}/
export const collections = [
	{
		name: 'work',
		label: 'Work',
	},
	{
		name: 'journalism',
		label: 'Journalism',
	},
	{
		name: 'journal',
		label: 'Journal',
	},
]

// Edit this to alter the main nav menu. (Also used by the footer and mobile nav.)
export const navItems = [
	{
		title: 'Blog',
		route: '/journal'
	}, {
		title: 'Journalism',
		route: '/journalism'
	}, {
		title: 'Work',
		route: '/work'
	}, {
		title: 'About',
		route: '/about'
	},
]