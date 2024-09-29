import { ulid } from 'ulidx'

type NotificationBase = {
	id: string
	userId: string
	avatarImage: string
	username: string
	timeAgo: string
	seen: boolean
}

export type Notification = NotificationBase & {
	type: 'group'
	groupName: string
} | NotificationBase & {
	type: 'comment'
	commentId: string
} | NotificationBase & {
	type: 'friend'
} | NotificationBase & {
	type: 'upload'
	channel: string
	attachments: NotificationUploadInfo[]
}

export type NotificationUploadInfo = {
	type: 'blog'
	uploadId: string
	uploadImage: string
	title: string
	description: string
	url: string
} | {
	type: 'image'
	title: string
	uploadId: string
	uploadImage: string
	fileExtension: string
	fileSize: string
}

let initial = false
	const notificationRef = ref( new Map<string, Notification>() )
export function useNotification() {

	onMounted( () => {
		if(initial)return
		initial = true
		console.log('onMounted notification')
			const id1                        = ulid()
			const id1user                        = ulid()
			const notification1: Notification = {
				id         : id1,
				userId     : id1user,
				avatarImage: 'https://i.pravatar.cc/60?img=1',
				username   : 'Jane Anne',
				seen       : true,
				timeAgo    : '2 min ago',
				type       : 'group',
				groupName  : 'Design'
			}
			notificationRef.value.set( id1, notification1 )

		const id2                        = ulid()
		const id2user                        = ulid()
		const notification2: Notification = {
			id         : id2,
			userId     : id2user,
			avatarImage: 'https://i.pravatar.cc/60?img=2',
			username   : 'Ryan',
			seen       : true,
			timeAgo    : '2 hours ago',
			type       : 'comment',
			commentId	: ulid()
		}
		notificationRef.value.set( id2, notification2 )

		const id3                        = ulid()
		const id3user                        = ulid()
		const notification3: Notification = {
			id         : id3,
			userId     : id3user,
			avatarImage: 'https://i.pravatar.cc/60?img=3',
			username   : 'Leslie Wahl',
			seen       : false,
			timeAgo    : '1 day ago',
			type       : 'friend',
		}
		notificationRef.value.set( id3, notification3 )

		const id4                        = ulid()
		const id4user                        = ulid()
		const notification4: Notification = {
			id         : id4,
			userId     : id4user,
			avatarImage: 'https://i.pravatar.cc/60?img=4',
			username   : 'Jeri Gibson',
			seen       : false,
			timeAgo    : '2 days ago',
			type       : 'upload',
			channel		: 'Source',
			attachments:[
				{
					type: 'blog',
					uploadId: ulid(),
					uploadImage: 'https://placehold.co/60x60',
					title: 'App Generator — The technology-agnostic way',
					description: 'Even after two years of R&D work, AppSeed is Still a super young concept and we expect a Slow adoption in the next few...',
					url: 'Techtalk.me'
				},
				{
					type: 'image',
					title: 'Background Images',
					uploadId: ulid(),
					uploadImage: 'https://placehold.co/60x60',
					fileExtension: 'ZIP',
					fileSize: '1,4 GB'
				}
			]
		}
		notificationRef.value.set( id4, notification4 )
	} )

	const seenNotification = ( id: string ) => {
		const notification = notificationRef.value.get( id )
		if ( notification ) {
			notification.seen = true
		}
	}

	const seenCount = computed( () => {
		console.log('seenCount')
		return Array.from( notificationRef.value.values() )
		            .filter( notification => !notification.seen ).length
	} )

	const unSeenNotifications = computed( () => {
		return Array.from( notificationRef.value.values() )
		            .filter( notification => !notification.seen )
	})

	const markAllAsSeen = () => {
		unSeenNotifications.value.forEach( notification => {
			// notification.seen = true
			notificationRef.value.set( notification.id, { ...notification, seen: true } )
		} )
		console.log(notificationRef.value)
		console.log(seenCount.value)
	}

	return {
		notificationRef,
		seenNotification,
		seenCount,
		markAllAsSeen
	}
}
