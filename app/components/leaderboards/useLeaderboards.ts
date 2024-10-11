import { ulid } from 'ulidx'

export type RateStatus = 'up' | 'down' | 'neutral' | 'none'

export const rates = [ 'today', 'week', 'month', 'year' ] as const

export type RateType = typeof rates[number]

export type RateUserInternal = {
	id: string
	name: string
	avatar: string
	status: RateStatus
	records: RateRecord[]
}

export type RateRecord = {
	date: Date
	score: number
}

export type RateUser = {
	id: string
	name: string
	score: number
	avatar: string
	status: RateStatus
}
export const useLeaderboards = defineStore( 'leaderboards', () => {
	const userMap = ref( new Map<string, RateUserInternal>( [
		[ 'Blake', {
			id     : ulid(),
			name   : 'Blake',
			avatar : 'https://i.pravatar.cc/60?img=1',
			status : 'none',
			records: [
				{
					date : new Date( 2024, 9, 1 ),
					score: 3000
				},
				{
					date : new Date( 2024, 9, 9 ),
					score: 1500
				},
				{
					date : new Date( 2024, 9, 9 ),
					score: 1500
				},
				{
					date : new Date( 2024, 9, 9 ),
					score: 4000
				},
				{
					date : new Date( 2024, 9, 9 ),
					score: 1291
				},
				{
					date : new Date( 2024, 9, 9 ),
					score: 1000
				},
				{
					date : new Date( 2024, 9, 10 ),
					score: 1000
				}
			]
		} ],
		[ 'Jane', {
			id     : ulid(),
			name   : 'Jane',
			avatar : 'https://i.pravatar.cc/60?img=2',
			status : 'none',
			records: [
				{
					date : new Date( 2024, 9, 1 ),
					score: 32
				},
				{
					date : new Date( 2024, 9, 9 ),
					score: 1500
				},
				{
					date : new Date( 2024, 9, 9 ),
					score: 2000
				},
				{
					date : new Date( 2024, 9, 9 ),
					score: 1500
				},
				{
					date : new Date( 2024, 9, 9 ),
					score: 3000
				},
				{
					date : new Date( 2024, 9, 9 ),
					score: 1000
				},
				{
					date : new Date( 2024, 9, 10 ),
					score: 3000
				}
			]
		} ],
		[ 'John', {
			id     : ulid(),
			name   : 'John',
			avatar : 'https://i.pravatar.cc/60?img=3',
			status : 'none',
			records: [
				{
					date : new Date( 2024, 9, 1 ),
					score: 11
				},
				{
					date : new Date( 2024, 9, 9 ),
					score: 1500
				},
				{
					date : new Date( 2024, 9, 9 ),
					score: 2000
				},
				{
					date : new Date( 2024, 9, 9 ),
					score: 1500
				},
				{
					date : new Date( 2024, 9, 9 ),
					score: 3000
				},
				{
					date : new Date( 2024, 9, 9 ),
					score: 1000
				},
				{
					date : new Date( 2024, 9, 10 ),
					score: 1000
				}
			]
		} ],
		[ 'Bradley', {
			id     : ulid(),
			name   : 'Bradley',
			avatar : 'https://i.pravatar.cc/60?img=4',
			status : 'none',
			records: [
				{
					date : new Date( 2024, 9, 1 ),
					score: 4
				},
				{
					date : new Date( 2024, 9, 9 ),
					score: 1500
				},
				{
					date : new Date( 2024, 9, 9 ),
					score: 2000
				},
				{
					date : new Date( 2024, 9, 9 ),
					score: 1500
				},
				{
					date : new Date( 2024, 9, 9 ),
					score: 1000
				},
				{
					date : new Date( 2024, 9, 10 ),
					score: 1000
				},
				{
					date : new Date( 2024, 9, 10 ),
					score: 3000
				}
			]
		} ],
		[ 'Katy', {
			id     : ulid(),
			name   : 'Katy',
			avatar : 'https://i.pravatar.cc/60?img=5',
			status : 'none',
			records: [
				{
					date : new Date( 2024, 9, 1 ),
					score: 1000
				},
				{
					date : new Date( 2024, 9, 9 ),
					score: 1500
				},
				{
					date : new Date( 2024, 9, 9 ),
					score: 1500
				},
				{
					date : new Date( 2024, 9, 9 ),
					score: 3000
				},
				{
					date : new Date( 2024, 9, 9 ),
					score: 1000
				},
				{
					date : new Date( 2024, 9, 10 ),
					score: 1000
				},
				{
					date : new Date( 2024, 9, 10 ),
					score: 921
				}
			]
		} ],
		[ 'Sam', {
			id     : ulid(),
			name   : 'Sam',
			avatar : 'https://i.pravatar.cc/60?img=6',
			status : 'none',
			records: [
				{
					date : new Date( 2024, 9, 1 ),
					score: 1000
				},
				{
					date : new Date( 2024, 9, 9 ),
					score: 1500
				},
				{
					date : new Date( 2024, 9, 9 ),
					score: 1500
				},
				{
					date : new Date( 2024, 9, 9 ),
					score: 3000
				},
				{
					date : new Date( 2024, 9, 9 ),
					score: 1000
				},
				{
					date : new Date( 2024, 9, 10 ),
					score: 1000
				},
				{
					date : new Date( 2024, 9, 10 ),
					score: 817
				}
			]
		} ],
		[ 'Alice', {
			id     : ulid(),
			name   : 'Alice',
			avatar : 'https://i.pravatar.cc/60?img=7',
			status : 'none',
			records: [
				{
					date : new Date( 2024, 9, 1 ),
					score: 1000
				},
				{
					date : new Date( 2024, 9, 9 ),
					score: 1500
				},
				{
					date : new Date( 2024, 9, 9 ),
					score: 754
				},
				{
					date : new Date( 2024, 9, 9 ),
					score: 1500
				},
				{
					date : new Date( 2024, 9, 9 ),
					score: 3000
				},
				{
					date : new Date( 2024, 9, 10 ),
					score: 1000
				},
				{
					date : new Date( 2024, 9, 10 ),
					score: 1000
				}
			]
		} ],
		[ 'Joshua', {
			id     : ulid(),
			name   : 'Joshua',
			avatar : 'https://i.pravatar.cc/60?img=8',
			status : 'none',
			records: [
				{
					date : new Date( 2023, 9, 1 ),
					score: 1000
				},
				{
					date : new Date( 2024, 9, 1 ),
					score: 1500
				},
				{
					date : new Date( 2024, 9, 9 ),
					score: 765
				},
				{
					date : new Date( 2024, 9, 9 ),
					score: 1500
				},
				{
					date : new Date( 2024, 9, 9 ),
					score: 1000
				},
				{
					date : new Date( 2024, 9, 9 ),
					score: 1000
				},
				{
					date : new Date( 2024, 9, 10 ),
					score: 3000
				}
			]
		} ]
	] ) )

	const usersScoresByType = ( rateType: RateType ): RateUser[] => {

		const today = new Date()

		const startDate = ( rateType: RateType ) => {
			const date = new Date( today )
			switch ( rateType ) {
				case 'today':
					date.setHours( 0, 0, 0, 0 )
					break
				case 'week':
					date.setDate( today.getDate() -
						( today.getDay() === 0 ? 6 : today.getDay() - 1 ) )
					date.setHours( 0, 0, 0, 0 )
					break
				case 'month':
					date.setDate( 1 )
					date.setHours( 0, 0, 0, 0 )
					break
				case 'year':
					date.setMonth( 0, 1 )
					date.setHours( 0, 0, 0, 0 )
					break
			}
			return date
		}

		const rateStart = startDate( rateType )
		const rateEnd   = new Date( today )
		switch ( rateType ) {
			case 'today':
				rateEnd.setHours( 23, 59, 59, 999 )
				break
			case 'week':
				rateEnd.setDate( today.getDate() + ( 6 - today.getDay() ) )
				rateEnd.setHours( 23, 59, 59, 999 )
				break
			case 'month':
				rateEnd.setMonth( today.getMonth() + 1, 0 )
				rateEnd.setHours( 23, 59, 59, 999 )
				break
			case 'year':
				rateEnd.setMonth( 11, 31 )
				rateEnd.setHours( 23, 59, 59, 999 )
				break
		}

		const scores: RateUser[] = []

		userMap.value.forEach( ( user, keyName ) => {
			const score = user.records.filter(
				record => record.date >= rateStart && record.date <= rateEnd )
			                  .reduce( ( acc, record ) => acc + record.score, 0 )

			const lastScore    = user.records.at( -1 )
			const prelastScore = user.records.at( -2 )

			if ( lastScore && prelastScore ) {
				if ( lastScore.score > prelastScore.score ) {
					user.status = 'up'
				}
				else if ( lastScore.score < prelastScore.score ) {
					user.status = 'down'
				}
				else {
					user.status = 'neutral'
				}
			}

			scores.push( {
				id    : user.id,
				name  : user.name,
				score : score,
				avatar: user.avatar,
				status: user.status
			} )
		} )
		return scores.sort( ( a, b ) => b.score - a.score )
	}

	return {
		usersScoresByType
	}
} )
