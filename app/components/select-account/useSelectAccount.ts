import { ulid } from 'ulidx'

export type SelectAccountUser = {
	id : string
	avatar : string
	name : string
}

export const useSelectAccount = defineStore( 'select-account', () => {
	const users = ref<SelectAccountUser[]>( [
		{
			id    : ulid(),
			avatar: 'https://i.pravatar.cc/60?img=1',
			name  : 'Janice'
		},
		{
			id    : ulid(),
			avatar: 'https://i.pravatar.cc/60?img=2',
			name  : 'Kevin'
		},
	] )

	return {
		users : readonly( users )
	}
})