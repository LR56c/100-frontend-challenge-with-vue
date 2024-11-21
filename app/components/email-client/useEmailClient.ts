import { ulid } from 'ulidx'

export type EmailCategory = {
	icon: string,
	title: string,
	count: number
}

export type Email = {
	id: string,
	sender: string,
	subject: string,
	body: string,
	date: Date,
	category: string,
	isRead: boolean,
	isStarred: boolean,
}

export const useEmailClient = defineStore( 'email-client', () => {

	const spamNotification = ref( 0 )

	const categories = ref( new Map<string, EmailCategory>( [
		[ 'inbox', {
			icon : 'material-symbols-light-inbox-rounded',
			title: 'Inbox',
			count: 0
		} ],
		[ 'star', {
			icon : 'ic-round-star-outline',
			title: 'Starred',
			count: 0
		} ],
		[ 'snoozed', {
			icon : 'ic-outline-watch-later',
			title: 'Snoozed',
			count: 0
		} ],
		[ 'spam', {
			icon : 'mynaui-octagon-danger',
			title: 'Spam',
			count: 0
		} ],
		[ 'sent', {
			icon : 'iconamoon-send',
			title: 'Sent',
			count: 0
		} ],
		[ 'trash', {
			icon : 'material-symbols-delete-outline-rounded',
			title: 'Trash',
			count: 0
		} ]
	] ) )

	const id1           = ulid()
	const id2           = ulid()
	const id3           = ulid()
	const id4           = ulid()
	const id5           = ulid()
	const id6           = ulid()
	const id7           = ulid()
	const emailDatabase = ref( new Map<string, Email>( [
		[ id1, {
			id       : id1,
			sender   : 'James Morrison',
			subject  : 'Action Required: Expense Report Submission',
			body     : 'Dear Team, This is a friendly reminder to submit your expense reports for the previous month by the end of this week. It crucial for',
			category : 'inbox',
			date     : new Date( 2024, 3, 4, 11, 43 ),
			isRead   : true,
			isStarred: true
		} ],
		[ id2, {
			id       : id2,
			sender   : 'Google',
			subject  : 'New sign-in from Chrome on Windows',
			body     : 'Your Google Account was just signed in to from Chrome on Windows. You’re getting this email to make sure it was you.',
			category : 'inbox',
			date     : new Date( 2024, 3, 4, 10, 43 ),
			isRead   : false,
			isStarred: false
		} ],
		[ id3, {
			id       : id3,
			sender   : 'Amazon',
			subject  : 'Your Amazon.com order of "Amazon Basics 4K HDMI Cable" has shipped!',
			body     : 'Your Amazon.com order of "Amazon Basics 4K HDMI Cable" has shipped! Your order is on the way. Track your shipment to see the delivery status of your package.',
			category : 'snoozed',
			date     : new Date( 2024, 3, 4, 9, 43 ),
			isRead   : false,
			isStarred: false
		} ],
		[ id4, {
			id       : id4,
			sender   : 'Facebook',
			subject  : 'Welcome to Facebook, Kristy',
			body     : 'Welcome to Facebook! We’re excited to have you as a member. To get started, click the button below to confirm your account.',
			category : 'spam',
			date     : new Date( 2024, 3, 4, 8, 43 ),
			isRead   : false,
			isStarred: false
		} ],
		[ id5, {
			id       : id5,
			sender   : 'James Morrison',
			subject  : 'Action Required: Expense Report Submission',
			body     : 'Dear Team, This is a friendly reminder to submit your expense reports for the previous month by the end of this week. It crucial for',
			category : 'spam',
			date     : new Date( 2024, 3, 3, 11, 43 ),
			isRead   : true,
			isStarred: false
		} ],
		[ id6, {
			id       : id6,
			sender   : 'Google',
			subject  : 'New sign-in from Chrome on Windows',
			body     : 'Your Google Account was just signed in to from Chrome on Windows. You’re getting this email to make sure it was you.',
			category : 'sent',
			date     : new Date( 2024, 3, 3, 10, 43 ),
			isRead   : false,
			isStarred: false
		} ],
		[ id7, {
			id       : id7,
			sender   : 'Amazon',
			subject  : 'Your Amazon.com order of "Amazon Basics 4K HDMI Cable" has shipped!',
			body     : 'Your Amazon.com order of "Amazon Basics 4K HDMI Cable" has shipped! Your order is on the way. Track your shipment to see the delivery status of your package.',
			category : 'trash',
			date     : new Date( 2024, 3, 3, 9, 43 ),
			isRead   : false,
			isStarred: false
		} ]
	] ) )
	const emails        = ref( new Map<string, Email>() )

	const getEmailsByCategory = ( category: string, page: number ) => {
		let emailsByCategory: Email[] = []
		if ( category === 'star' ) {
			emailsByCategory = Array.from( emails.value.values() )
			                        .filter( email => email.isStarred )
			                        .sort( ( a, b ) => b.date.getTime() -
				                        a.date.getTime() )
		}
		else {
			emailsByCategory = Array.from( emails.value.values() )
			                        .filter(
				                        email => email.category === category )
			                        .sort( ( a, b ) => b.date.getTime() -
				                        a.date.getTime() )
		}
		const pageSize = 10
		const start    = ( page - 1 ) * pageSize
		const end      = start + pageSize
		return emailsByCategory.slice( start, end )
	}

	const searchEmails = ( query: string ) => {
		const filteredEmails = new Map(
			Array.from( emailDatabase.value.entries() )
			     .filter( ( [ key, email ] ) => email.subject.toLowerCase()
			                                         .includes(
				                                         query.toLowerCase() ) )
		)
		emails.value         = filteredEmails
	}

	onMounted( () => {
		emails.value = emailDatabase.value
		let starCount             = 0
		let spamNotificationCount = 0
		for ( const email of emails.value.values() ) {
			const category = categories.value.get( email.category )
			if ( category && email.category !==
				'star' )
			{
				category.count++
			}
			if ( email.category === 'inbox' && email.isStarred ) {
				starCount++
			}
			if ( email.category === 'spam' && !email.isRead ) {
				spamNotificationCount++
			}
		}
		const starCategory = categories.value.get( 'star' )
		if ( starCategory ) {
			starCategory.count = starCount
		}
		spamNotification.value = spamNotificationCount
	} )

	const getCategory = ( category: string ) => {
		return categories.value.get( category )
	}

	const toggleStar = ( id: string ) => {
		const email = emails.value.get( id )
		if ( email ) {
			email.isStarred = !email.isStarred
			const starCategory = categories.value.get( 'star' )
			if ( starCategory ) {
				starCategory.count += email.isStarred ? 1 : -1
			}
		}
	}

	return {
		categories      : readonly( categories ),
		emails          : readonly( emails ),
		spamNotification: readonly( spamNotification ),
		getEmailsByCategory,
		getCategory,
		searchEmails,
		toggleStar
	}
} )