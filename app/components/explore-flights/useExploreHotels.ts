import { ulid } from 'ulidx'
import type { Location } from '~/components/explore-flights/location'

export type ExploreHotel = {
	id : string
	location : Location
	checkInDate : Date
	checkOutDate : Date
	guests : number
	rooms : number
}


export const useExploreHotels = defineStore( 'explore-hotels', () => {
	const exploreHotels = ref<ExploreHotel[]>([
		{
			id: ulid(),
			location: {
				country: 'US',
				direction: 'Los Angeles'
			},
			checkInDate: new Date(),
			checkOutDate: new Date(),
			guests: 1,
			rooms: 1
		},
		{
			id: ulid(),
			location: {
				country: 'US',
				direction: 'Las Vegas'
			},
			checkInDate: new Date(),
			checkOutDate: new Date(),
			guests: 1,
			rooms: 1
		}
	])

	const filterHotel = (location ?: string, checkInDate ?: Date, checkOutDate ?: Date, guests ?: number, rooms ?: number) : ExploreHotel[] => {
		const filterHotels = new Set<ExploreHotel>()
		for ( const hotel of exploreHotels.value ) {
			if (
				(hotel.location.direction === location) ||
				(hotel.checkInDate.getDay() === checkInDate?.getDay()) ||
				(hotel.checkOutDate.getDay() === checkOutDate?.getDay()) ||
				(hotel.guests === guests) ||
				(hotel.rooms === rooms)
			) {
				filterHotels.add(hotel)
			}
		}
		return Array.from(filterHotels)
	}

	return {
		exploreHotels,
		filterHotel
	}
})
