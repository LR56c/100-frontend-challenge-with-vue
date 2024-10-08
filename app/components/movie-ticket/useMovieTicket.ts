export type SeatType = 'available' | 'selected' | 'booked' | 'empty'

export type SeatAlphabet = {
	row: number
	col: string
	status: SeatType
}

export type Seat = {
	rows: number
	cols: number
	status: SeatType
}

export interface DateMovie {
	date: Date
	times: Date[]
}

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split( '' )

export const useMovieTicket = defineStore( 'movie-ticket', () => {

		const seatMatrix       = ref<SeatAlphabet[][]>( [] )
		const datesRef         = ref<DateMovie[]>( [
			{
				date : new Date( 2024, 1, 21 ),
				times:[
					new Date( 2024, 1, 21, 10, 15 ),
					new Date( 2024, 1, 21, 12, 45 ),
					new Date( 2024, 1, 21, 14, 35 ),
					new Date( 2024, 1, 21, 17, 15 )
				]
			},
			{
				date : new Date( 2024, 1, 22 ),
				times:[
					new Date( 2024, 1, 21, 15, 15 ),
					new Date( 2024, 1, 21, 17, 45 ),
					new Date( 2024, 1, 21, 20, 35 ),
					new Date( 2024, 1, 21, 22, 15 )
				]
			},
			{
				date : new Date( 2024, 1, 23 ),
				times:[
					new Date( 2024, 1, 21, 15, 15 ),
					new Date( 2024, 1, 21, 17, 45 ),
					new Date( 2024, 1, 21, 20, 35 ),
					new Date( 2024, 1, 21, 22, 15 )
				]
			},
			{
				date : new Date( 2024, 1, 24 ),
				times:[
					new Date( 2024, 1, 21, 15, 15 ),
					new Date( 2024, 1, 21, 17, 45 ),
					new Date( 2024, 1, 21, 20, 35 ),
					new Date( 2024, 1, 21, 22, 15 )
				]
			},
		] )
		const statusSeatMapper = ( s: string | undefined ): SeatType | undefined => {
			switch ( s ) {
				case 'A':
					return 'available'
				case 'S':
					return 'selected'
				case 'B':
					return 'booked'
				case 'E':
					return 'empty'
				default:
					return undefined
			}
		}

		const configure  = ( config: string[][] ) => {
			if ( config.length === 0 || config.length > alphabet.length ) {
				return
			}
			const currentMatrix: SeatAlphabet[][] = []
			for ( let i = 0; i < config.length; i++ ) {
				const col = config[i]
				if ( !col || col.length === 0 ) {
					continue
				}
				const rowMatrix: SeatAlphabet[] = []

				for ( let j = 0; j < config[i]!.length; j++ ) {
					const row    = config[i]![j]
					const status = statusSeatMapper( row )

					if ( !status ) {
						continue
					}

					rowMatrix.push( {
						row: j,
						col: alphabet[i]!,
						status
					} )
				}
				currentMatrix.push( rowMatrix )
			}
			seatMatrix.value = currentMatrix
		}
		const getSeat    = ( seats: SeatAlphabet[][], row: number,
			col: string ): SeatAlphabet | undefined => {
			const char = alphabet.indexOf( col )

			if ( char === -1 ) {
				return
			}

			return seats[char]?.[row]
		}
		const selectSeat = ( row: number, col: string ) => {
			const seat = getSeat( seatMatrix.value, row, col )

			if ( !seat ) {
				return
			}

			if ( seat.status === 'available' ) {
				seat.status = 'selected'
			}
			else if ( seat.status === 'selected' ) {
				seat.status = 'available'
			}
		}

		const confirmSelectedSeats = (): string[] => {
			const selectedSeats: string[] = []
			seatMatrix.value.forEach( col => {
				col.forEach( seat => {
					if ( seat.status === 'selected' ) {
						selectedSeats.push( `${ seat.col }${ seat.row }` )
						seat.status = 'booked'
					}
				} )
			} )
			return selectedSeats
		}

		return {
			seatMatrix,
			datesRef,
			configure,
			selectSeat,
			confirmSelectedSeats
		}
	}
)
