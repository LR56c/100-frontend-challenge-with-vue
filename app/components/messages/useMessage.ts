import {
	decodeTime,
	ulid
} from 'ulidx'

export interface CommentsResponse {
	postId: number;
	id: number;
	name: string;
	email: string;
	body: string;
}

export interface Message {
	id: string
	from: string
	to: string
	text: string
}

export interface Chat {
	id: string,
	name: string,
	image: string,
	messages: Message[]
	connectionStatus: boolean
	lastMessage?: Message
}

export const useMessage = defineStore( 'message', () => {

	const user = 'You'

	const lastMessage1: Message = {
		id  : ulid( new Date( 2024, 9, 6, 12, 33 ).getTime() ),
		text: 'Sounds good. See you tomorrow!',
		to  : 'Maria Houk',
		from: user
	}
	const lastMessage2: Message = {
		id  : ulid(),
		text: 'Thank you much',
		from: 'Robert Fleishman',
		to  : user
	}
	const lastMessage3: Message = {
		id  : ulid(),
		text: 'Ok, Got it',
		to  : 'Joshua Simpson',
		from: user
	}
	const lastMessage4: Message = {
		id  : ulid( new Date( 2024, 1, 9, 12, 33 ).getTime() ),
		text: 'Did you hear about the new moving coming out next............',
		from: 'Francisco Landry',
		to  : user
	}
	const lastMessage5: Message = {
		id  : ulid(),
		text: 'Hey there! Hows your day going?',
		from: 'Katie Grimm',
		to  : user
	}
	const lastMessage6: Message = {
		id  : ulid(),
		text: 'Thinking of planning a trip for the summer. Any............',
		to  : 'John Larson',
		from: user
	}
	const lastMessage7: Message = {
		id  : ulid(),
		text: 'Just finished reading a great book. Have................................',
		to  : 'Barbara Oglesby',
		from: user
	}
	const lastMessage8: Message = {
		id  : ulid(),
		text: 'Glad to hear this',
		to  : 'Dusty Touhy',
		from: user
	}
	const chatsRef              = ref( new Map<string, Chat>( [
		[ 'Maria Houk', {
			id              : ulid(),
			name            : 'Maria Houk',
			image           : 'https://i.pravatar.cc/60?img=1',
			connectionStatus: true,
			messages        : [
				{
					id  : ulid( new Date( 2024, 9, 6, 12, 31, 0 ).getTime() ),
					text: 'I think its at 10 in the morning, Are you coming?',
					from: 'Maria Houk',
					to  : user
				},
				{
					id  : ulid( new Date( 2024, 9, 6, 12, 31, 30 ).getTime() ),
					text: 'Absolutely, wouldnt miss it. It is at the usual place?',
					to  : 'Maria Houk',
					from: user
				},
				{
					id  : ulid( new Date( 2024, 9, 6, 12, 32 ).getTime() ),
					text: 'Yeah, same place as last time. See you there!',
					from: 'Maria Houk',
					to  : user
				},
				{
					id  : ulid( new Date( 2024, 9, 6, 12, 29 ).getTime() ),
					text: 'Hey, have you heard about the meeting tomorrow?',
					from: 'Maria Houk',
					to  : user
				},
				{
					id  : ulid( new Date( 2024, 9, 6, 12, 30 ).getTime() ),
					text: 'Yah, I got the reminder. What time is it again?',
					to  : 'Maria Houk',
					from: user
				},
				lastMessage1 ],
			lastMessage     : lastMessage1
		} ],
		[ 'Robert Fleishman', {
			id              : ulid(),
			name            : 'Robert Fleishman',
			image           : 'https://i.pravatar.cc/60?img=2',
			connectionStatus: true,
			messages        : [ lastMessage2 ],
			lastMessage     : lastMessage2
		} ],
		[ 'Joshua Simpson', {
			id              : ulid(),
			name            : 'Joshua Simpson',
			image           : 'https://i.pravatar.cc/60?img=3',
			connectionStatus: false,
			messages        : [ lastMessage3 ],
			lastMessage     : lastMessage3
		} ],
		[ 'Francisco Landry', {
			id              : ulid(),
			name            : 'Francisco Landry',
			image           : 'https://i.pravatar.cc/60?img=4',
			connectionStatus: false,
			messages        : [ lastMessage4 ],
			lastMessage     : lastMessage4
		} ],
		[ 'Katie Grimm', {
			id              : ulid(),
			name            : 'Katie Grimm',
			image           : 'https://i.pravatar.cc/60?img=5',
			connectionStatus: false,
			messages        : [ lastMessage5 ],
			lastMessage     : lastMessage5
		} ],
		[ 'John Larson', {
			id              : ulid(),
			name            : 'John Larson',
			image           : 'https://i.pravatar.cc/60?img=6',
			connectionStatus: false,
			messages        : [ lastMessage6 ],
			lastMessage     : lastMessage6
		} ],
		[ 'Barbara Oglesby', {
			id              : ulid(),
			name            : 'Barbara Oglesby',
			image           : 'https://i.pravatar.cc/60?img=7',
			connectionStatus: false,
			messages        : [ lastMessage7 ],
			lastMessage     : lastMessage7
		} ],
		[ 'Dusty Touhy', {
			id              : ulid(),
			name            : 'Dusty Touhy',
			image           : 'https://i.pravatar.cc/60?img=8',
			connectionStatus: false,
			messages        : [ lastMessage8 ],
			lastMessage     : lastMessage8
		} ],
		[ 'Anne Edward', {
			id              : ulid(),
			name            : 'Anne Edward',
			image           : 'https://i.pravatar.cc/60?img=9',
			connectionStatus: true,
			messages        : []
		} ],
		[ 'Lols Good', {
			id              : ulid(),
			name            : 'Lols Good',
			image           : 'https://i.pravatar.cc/60?img=10',
			connectionStatus: true,
			messages        : []
		} ],
		[ 'Bill You', {
			id              : ulid(),
			name            : 'Bill You',
			image           : 'https://i.pravatar.cc/60?img=11',
			connectionStatus: true,
			messages        : []
		} ],
		[ 'Paul Nels', {
			id              : ulid(),
			name            : 'Paul Nels',
			image           : 'https://i.pravatar.cc/60?img=12',
			connectionStatus: true,
			messages        : []
		} ],
		[ 'Franciscus', {
			id              : ulid(),
			name            : 'Franciscus',
			image           : 'https://i.pravatar.cc/60?img=13',
			connectionStatus: true,
			messages        : []
		} ]
	] ) )

	const sortMessages = () => {
		chatsRef.value.forEach( chat => {
			chat.messages.sort( ( a, b ) => {
				return decodeTime( a.id ) < decodeTime( b.id ) ? -1 : 1
			} )
		} )
	}

	const commentsRef        = ref<CommentsResponse[]>( [] )
	const loadRandomComments = async () => {
		const response = await useFetch<CommentsResponse[]>( 'https://jsonplaceholder.typicode.com/comments' )
		if ( response ) {
			response.data.value?.forEach( comment => {
				commentsRef.value.push( comment )
			})
		}
	}
	const pickRandomComment = async () => {
		if ( commentsRef.value.length === 0 ) {
			await loadRandomComments()
		}
		const randomIndex = Math.floor( Math.random() * commentsRef.value.length )
		return commentsRef.value[ randomIndex ]!.body
	}
	const addMessage        = ( name: string, text: string, fromUser : boolean ) => {
		const chat = chatsRef.value.get( name )
		if ( chat ) {
			const newMessage: Message = {
				from: fromUser ? user : name,
				to  : fromUser ? name : user,
				text: text,
				id  : ulid()
			}
			chat.messages.push( newMessage )
			chat.lastMessage = newMessage
		}
	}

	onMounted( () => {
		sortMessages()
	} )

	const connectedUsers = computed( () => Array.from( chatsRef.value.values() )
	                                            .filter(
		                                            chat => chat.connectionStatus ) )

	return { chatsRef, addMessage, user, connectedUsers ,pickRandomComment}
} )
