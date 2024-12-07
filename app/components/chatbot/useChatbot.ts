import { ulid } from 'ulidx'

export interface CommentsResponse {
	postId: number;
	id: number;
	name: string;
	email: string;
	body: string;
}

type MessageBase = {
	id: string
	from: string
	to: string
}

export type Message = MessageBase & {
	type: 'text'
	text: string
	createdAt: Date
} | MessageBase & {
	type: 'button'
	buttons: {
		content: string
		class: string
	}[]
}

export interface Chat {
	id: string,
	name: string,
	image: string,
	messages: Message[]
}

export const useChatbot = defineStore( 'chatbot', () => {

	const user = 'You'

	const botName = 'Chatbot'

	const chat = ref<Chat>( {
		id      : ulid(),
		name    : botName,
		image   : 'https://',
		messages: [
			{
				id       : ulid(),
				from     : botName,
				to       : user,
				type     : 'text',
				text     : 'Hey there I am on A.i chatbot, lets talk',
				createdAt: new Date()
			},
			{
				id       : ulid(),
				from     : botName,
				to       : user,
				type     : 'text',
				text     : 'I prepared a special 20% promo code for you. Would you like to get more informations about it?',
				createdAt: new Date()
			},
			{
				id     : ulid(),
				from   : botName,
				to     : user,
				type   : 'button',
				buttons: [
					{
						content: 'Yes, sure!',
						class  : 'bg-[#336afe] border-0 text-white'
					},
					{
						content: 'No, thanks!',
						class  : 'border border-[#336afe] bg-white text-[#336afe]'
					}
				]
			}
		]
	} )

	const addMessage = ( msg: Message ) => {
		chat.value.messages.push( msg )
	}

	return {
		chat,
		user,
		addMessage
	}
} )