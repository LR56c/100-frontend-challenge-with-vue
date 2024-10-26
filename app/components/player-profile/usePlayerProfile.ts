import { ulid } from 'ulidx'

type PlayerProfileSocialMedia = {
	platform: string
	link: string
}
export type PlayerProfileTeam = {
	team: string
	avatar: string
	since: Date,
	until?: Date
	rank: number
}
type PlayerProfileStatus = 'active' | 'injured' | 'retired'
export type PlayerProfileInfo = {
	college: string
	position: string
	height: number
	weight: number
	birthPlace: string
	status: PlayerProfileStatus
}
export type PlayerProfileArticles = {
	id: string
	title: string
	thumbnail: string
	link: string
	createdAt: Date
}
export type PlayerProfile = {
	id: string
	name: string
	tags: string[]
	avatar: string
	banner: string
	socialMedia: PlayerProfileSocialMedia[]
	info: PlayerProfileInfo
	currentTeam: PlayerProfileTeam
	previousTeams: PlayerProfileTeam[]
	likedArticles: PlayerProfileArticles[]
}


export const usePlayerProfile = defineStore( 'player-profile', () => {
	const t1: PlayerProfileTeam = {
		team  : 'Arizona Cardinals',
		avatar: 'https://static.www.nfl.com/t_q-best/league/api/clubs/logos/ARI',
		rank  : 2,
		since : new Date( '2021-01-01' )
	}
	const playerProfile         = ref( new Map<string, PlayerProfile>( [
			[
				'Dennis Olivarria',
				{
					id           : ulid(),
					name         : 'Dennis Olivarria',
					tags         : [ 'FOOTBALL', 'QB' ],
					avatar       : 'https://i.pravatar.cc/60?img=3',
					banner       : 'https://www.shutterstock.com/image-illustration/american-football-stadium-yellow-goal-600nw-2118179546.jpg',
					likedArticles: [
						{
							id       : ulid(),
							title    : 'Hollywood Head To The Midwest And Patrick Mahomes',
							thumbnail: 'https://i.insider.com/61e6f3e804ce6e0018d790ca?width=600&format=jpeg&auto=webp',
							link     : 'https://www.nfl.com',
							createdAt: new Date( '2024-03-14' )
						},
						{
							id       : ulid(),
							title    : 'Cardinals Trade For Desmond Ridder To Back Up Kyler Murray',
							thumbnail: 'https://static.www.nfl.com/image/upload/t_editorial_landscape_mobile/f_auto/league/lvmjh17i0fwsrd0vzukj.jpg',
							link     : 'https://www.nfl.com',
							createdAt: new Date( '2024-02-23' )
						}
					],
					socialMedia  : [
						{
							platform: 'twitter',
							link    : 'https://twitter.com/dennis-olivarria'
						},
						{
							platform: 'instagram',
							link    : 'https://www.instagram.com/dennis-olivarria'
						}
					],
					previousTeams: [
						t1,
						{
							team  : 'Chicago Bears',
							avatar: 'https://static.www.nfl.com/t_q-best/league/api/clubs/logos/CHI',
							rank  : 1,
							since : new Date( '2017-01-01' ),
							until : new Date( '2021-01-01' )
						},
						{
							team  : 'Jacksonville Jaguards',
							avatar: 'https://static.www.nfl.com/t_q-best/league/api/clubs/logos/JAX',
							rank  : 1,
							since : new Date( '2015-01-01' ),
							until : new Date( '2017-01-01' )
						}
					],
					info         : {
						college   : 'University of Oklahoma',
						position  : 'Quarterback',
						height    : 178,
						weight    : 94,
						birthPlace: 'Bedford, Texas',
						status    : 'active'
					},
					currentTeam  : t1
				}
			]
		]
	) )

	const getPlayerProfile = ( name: string ) => {
		return playerProfile.value.get( name )
	}

	return {
		playerProfile,
		getPlayerProfile
	}
} )
