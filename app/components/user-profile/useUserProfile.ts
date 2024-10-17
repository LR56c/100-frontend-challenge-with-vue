import { ulid } from 'ulidx'

const plans = ['free', 'pro'] as const
export type PlanType = typeof plans[number]

export type UserProfile = {
	id: string
	avatar: string
	username: string
	email: string
	plan: PlanType
}

export const useUserProfile = defineStore( 'notifications', () => {

	const user = ref<UserProfile | undefined>( undefined )

	onMounted( () => {
		user.value = {
			id      : ulid(),
			avatar  : 'https://i.pravatar.cc/60?img=3',
			username: 'David',
			email   : 'david@gmail.com',
			plan    : 'pro'
		}
	})

	return {
		user
	}
})
