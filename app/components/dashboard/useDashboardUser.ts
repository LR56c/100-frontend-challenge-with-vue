import { ulid } from 'ulidx'

export type DashboardUser = {
	id : string
	name : string
	email : string
	role : string
	avatar : string
}

export const useDashboardUser = defineStore( 'dashboard-user', () => {

	const user = ref<DashboardUser | undefined>()

	onMounted( async () => {
		user.value = {
			id : ulid(),
			name : 'John Doe',
			email : 'john@email.com',
			role : 'client',
			avatar : 'https://i.pravatar.cc/60?img=3'
		}
	})

	return {
		user
	}
})
