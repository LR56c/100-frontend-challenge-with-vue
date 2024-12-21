import { ulid } from 'ulidx'

export type GameProfileAchievements = {
	id: string
	name: string
	icon: string
	description: string
	total: number
	progress: number
}

// export type GameProfileBadges = {
// 	id: string
// 	name: string
// 	icon: string
// 	description: string
// }

export type GameProfileInfo = {
	id: string
	name: string
	avatar: string
	value: number
}

export type GameProfile = {
	id: string
	name: string
	avatar: string
	points: number
	info: GameProfileInfo[]
	badges: string[]
	achievements: GameProfileAchievements[]
}

export const useGameProfile = defineStore( 'game-profile', () => {

	const gameProfiles = ref( new Map<string, GameProfile>( [
		[ 'Blake', {
			id          : ulid(),
			name        : 'Blake',
			avatar      : 'https://i.pravatar.cc/60?img=1',
			points      : 13_291,
			info        : [
				{
					id    : ulid(),
					name  : 'Streaks Days',
					avatar: 'fluent-emoji-sparkles',
					value : 20
				},
				{
					id    : ulid(),
					name  : 'Wins',
					avatar: 'fluent-emoji-trophy',
					value : 1023
				},
				{
					id    : ulid(),
					name  : 'Losses',
					avatar: 'icon-park-close-one',
					value : 15
				}
			],
			badges      : [
				'fluent-emoji-fleur-de-lis',
				'fluent-emoji-heart-on-fire',
				'fluent-emoji-joker',
				'fluent-emoji-candy',
				'fluent-emoji-magnifying-glass-tilted-left',
				'fluent-emoji-abacus'
			],
			achievements: [
				{
					id         : ulid(),
					name       : 'Master of the Arena',
					icon       : 'fluent-emoji:circus-tent',
					description: 'Win 100 consecutive multiplayer matches without a loss',
					total      : 100,
					progress   : 100
				},
				{
					id         : ulid(),
					name       : 'Legendary Collector',
					icon       : 'fluent-emoji-gem-stone',
					description: 'Gather every rare item available in the game',
					total      : 16,
					progress   : 25
				},
				{
					id         : ulid(),
					name       : 'Explorer Extraordinaire',
					icon       : 'fluent-emoji-hut',
					description: 'Discover every hidden location in the game world',
					total      : 34,
					progress   : 40
				},
				{
					id         : ulid(),
					name       : 'Fearles Adventurer',
					icon       : 'fluent-emoji-confetti-ball',
					description: 'Complete every side quest in the game',
					total      : 8,
					progress   : 10
				}
			]
		} ]
	] ) )

	const getProfile = ( name: string ): GameProfile | undefined => {
		return gameProfiles.value.get( name )
	}

	return {
		gameProfiles: readonly( gameProfiles ),
		getProfile
	}
} )