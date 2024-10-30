import { ulid } from 'ulidx'

export type MarkDownPostUsers = {
	id : string
	name : string
	avatar : string
	online : boolean
}

export const useMarkdownPost = defineStore( 'markdown-post', () => {

	const users = ref<MarkDownPostUsers[]>([
		{
			id: ulid(),
			name: 'Jerry Spencer',
			avatar: 'https://i.pravatar.cc/60?img=3',
			online: true
		},
		{
			id: ulid(),
			name: 'Jensen Bolt',
			avatar: 'https://i.pravatar.cc/60?img=5',
			online: false
		},
		{
			id: ulid(),
			name: 'Jessica Wilson',
			avatar: 'https://i.pravatar.cc/60?img=4',
			online: true
		}
	])

	return {
		users
	}
})
