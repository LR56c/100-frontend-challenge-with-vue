import { ulid } from 'ulidx'

export type AppNavigationUser = {
	id: string
	name: string
	avatar: string
}

export const useAppNavigation = defineStore( 'app-navigation', () => {

	const users = ref( new Map<string, AppNavigationUser>( [
		[ 'lily chen', {
			id    : ulid(),
			name  : 'Lily Chen',
			avatar: 'https://i.pravatar.cc/60?img=3'
		} ]
	] ))
	
	const getUser = ( name: string ): AppNavigationUser | undefined => {
		return users.value.get( name )
	}
	
	return {
		users,
		getUser
	}
} )