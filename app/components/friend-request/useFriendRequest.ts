import { ulid } from 'ulidx'

export type FriendRequest = {
	id: string
	name: string
	avatar: string
	mutualFriends: FriendRequest[]
}

export const useFriendRequest = defineStore( 'friend-request', () => {

	const requests = ref( new Map<string, FriendRequest>( [
		[ 'John Dykstra', {
			id           : ulid(),
			name         : 'John Dykstra',
			avatar       : 'https://i.pravatar.cc/60?img=3',
			mutualFriends: [
				{
					id           : ulid(),
					name         : 'Lily Chen',
					avatar       : 'https://i.pravatar.cc/60?img=6',
					mutualFriends: []
				},
				{
					id           : ulid(),
					name         : 'Lily Murdock',
					avatar       : 'https://i.pravatar.cc/60?img=7',
					mutualFriends: []
				},
				{
					id           : ulid(),
					name         : 'Barbara Chen',
					avatar       : 'https://i.pravatar.cc/60?img=8',
					mutualFriends: []
				},
			]
		} ],
		[ 'Barbara Murdock', {
			id           : ulid(),
			name         : 'Barbara Murdock',
			avatar       : 'https://i.pravatar.cc/60?img=5',
			mutualFriends: [
				{
					id           : ulid(),
					name         : 'Lily Chen',
					avatar       : 'https://i.pravatar.cc/60?img=13',
					mutualFriends: []
				},
				{
					id           : ulid(),
					name         : 'Lily Murdock',
					avatar       : 'https://i.pravatar.cc/60?img=14',
					mutualFriends: []
				},
				{
					id           : ulid(),
					name         : 'Barbara Chen',
					avatar       : 'https://i.pravatar.cc/60?img=15',
					mutualFriends: []
				},
				{
					id           : ulid(),
					name         : 'Chen Murdock',
					avatar       : 'https://i.pravatar.cc/60?img=16',
					mutualFriends: []
				},
				{
					id           : ulid(),
					name         : 'Barbara Lily',
					avatar       : 'https://i.pravatar.cc/60?img=17',
					mutualFriends: []
				}
			]
		} ],
		[ 'James Anderson', {
			id           : ulid(),
			name         : 'James Anderson',
			avatar       : 'https://i.pravatar.cc/60?img=4',
			mutualFriends: [
				{
					id           : ulid(),
					name         : 'Jerry Spencer',
					avatar       : 'https://i.pravatar.cc/60?img=11',
					mutualFriends: []
				},
				{
					id           : ulid(),
					name         : 'Jensen Bolt',
					avatar       : 'https://i.pravatar.cc/60?img=12',
					mutualFriends: []
				},
			]
		} ],
	] ) )
	
	const acceptRequest = ( id: string ) => {
		requests.value.delete( id )
	}

	const declineRequest = ( id: string ) => {
		requests.value.delete( id )
	}

	return {
		requests: computed( () => requests.value ),
		acceptRequest,
		declineRequest
	}
} )