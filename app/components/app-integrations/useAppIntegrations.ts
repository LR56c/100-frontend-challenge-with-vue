import { ulid } from 'ulidx'

export type AppIntegration = {
	id: string
	name: string
	description: string
	image: string
	enabled: boolean,
	category: string
}

export const useAppIntegrations = defineStore( 'app-integrations', () => {

	const filters = [
		'All Apps',
		'Mails',
		'Communication',
		'Productivity',
		'Finance',
		'File Management'
	]

	const id1          = ulid()
	const id2          = ulid()
	const id3          = ulid()
	const id4          = ulid()
	const id5          = ulid()
	const id6          = ulid()
	const id7          = ulid()
	const id8          = ulid()
	const id9          = ulid()
	const id10         = ulid()
	const id11         = ulid()
	const id12         = ulid()
	const appsDatabase = ref( new Map<string, AppIntegration>( [
		[ id1, {
			id         : id1,
			name       : 'Stripe',
			description: 'Stripe is a suite of payment APIs that powers commerce for businesses of all sizes.',
			image      : '/stripe.jpeg',
			enabled    : true,
			category   : 'Finance'
		} ],
		[ id2, {
			id         : id2,
			name       : 'Gmail',
			description: 'Gmail is a free email service developed by Google. Users can access Gmail on the web and using third-party programs that synchronize email content through POP or IMAP protocols.',
			image      : '/Gmail.png',
			enabled    : false,
			category   : 'Mails'
		} ],
		[ id3, {
			id         : id3,
			name       : 'Google Ads',
			description: 'Google Ads is an online advertising platform developed by Google, where advertisers pay to display brief advertisements, service offerings, product listings, video content, and generate mobile application installs within the Google ad network to web users.',
			image      : '/googleads.png',
			enabled    : false,
			category   : 'Finance'
		} ],
		[ id4, {
			id         : id4,
			name       : 'Dropbox',
			description: 'Dropbox is a file hosting service operated by the American company Dropbox, Inc., headquartered in San Francisco, California, that offers cloud storage, file synchronization, personal cloud, and client software.',
			image      : '/Dropbox.png',
			enabled    : false,
			category   : 'File Management'
		} ],
		[ id5, {
			id         : id5,
			name       : 'MailChimp',
			description: 'Mailchimp is an American marketing automation platform and an email marketing service.',
			image      : '/mailchamp.png',
			enabled    : false,
			category   : 'Mails'
		} ],
		[ id6, {
			id         : id6,
			name       : 'Slack',
			description: 'Slack is a proprietary business communication platform developed by American software company Slack Technologies.',
			image      : '/Slack.webp',
			enabled    : false,
			category   : 'Communication'
		} ],
		[ id7, {
			id         : id7,
			name       : 'Google Calendar',
			description: 'Google Calendar is a time-management and scheduling calendar service developed by Google.',
			image      : '/googlecalendar.png',
			enabled    : false,
			category   : 'Productivity'
		} ],
		[ id8, {
			id         : id8,
			name       : 'Notion',
			description: 'Notion is an application that provides components such as databases, kanban boards, wikis, calendars and reminders.',
			image      : '/Notion.webp',
			enabled    : false,
			category   : 'Productivity'
		} ],
		[ id9, {
			id         : id9,
			name       : 'Shopify',
			description: 'Shopify Inc. is a Canadian multinational e-commerce company headquartered in Ottawa, Ontario.',
			image      : '/Shopify.webp',
			enabled    : false,
			category   : 'Finance'
		} ],
		[ id10, {
			id         : id10,
			name       : 'WooCommerce',
			description: 'WooCommerce is an open-source e-commerce plugin for WordPress.',
			image      : '/WooCommerce.png',
			enabled    : false,
			category   : 'Finance'
		} ],
		[ id11, {
			id         : id11,
			name       : 'Zendesk',
			description: 'Zendesk Inc. is an American customer service software company headquartered in San Francisco, California.',
			image      : '/Zendesk.webp',
			enabled    : false,
			category   : 'Communication'
		} ],
		[ id12, {
			id         : id12,
			name       : 'PayPal',
			description: 'PayPal Holdings, Inc. is an American company operating an online payments system in the majority of countries that support online money transfers, and serves as an electronic alternative to traditional paper methods like checks and money orders.',
			image      : '/PayPal.webp',
			enabled    : false,
			category   : 'Finance'
		} ]
	] ) )
	const apps         = ref( new Map<string, AppIntegration>() )

	const filterByName = ( search: string ) => {
		const filteredApps = new Map<string, AppIntegration>()
		for ( const [ id, app ] of appsDatabase.value ) {
			if ( app.name.toLowerCase()
			        .includes( search.toLowerCase() ) )
			{
				filteredApps.set( id, app )
			}
		}
		apps.value = filteredApps
	}

	const filterByCategory = ( category: string ) => {
		const filteredApps = new Map<string, AppIntegration>()
		if(category === 'All Apps') {
			apps.value = appsDatabase.value
			return
		}
		for ( const [ id, app ] of appsDatabase.value ) {
			if ( app.category === category ) {
				filteredApps.set( id, app )
			}
		}
		apps.value = filteredApps
	}

	onMounted( () => {
		apps.value = appsDatabase.value
	} )

	return {
		apps     ,
		filters   : readonly( filters ),
		filterByName,
		filterByCategory
	}
} )