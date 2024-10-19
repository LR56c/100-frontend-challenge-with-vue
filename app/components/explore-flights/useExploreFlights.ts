import { ulid } from 'ulidx'
import type { Location } from '~/components/explore-flights/location'

export type ExploreFlights = {
	id : string
	origin : Location
	destination : Location
	departureDate : Date
}

export const useExploreFlights = defineStore( 'explore-flights', () => {

	const exploreFlights = ref<ExploreFlights[]>([
		{
			id: ulid(),
			origin: {
				country: 'US',
				direction: 'Los Angeles'
			},
			destination: {
				country: 'US',
				direction: 'Las Vegas'
			},
			departureDate: new Date()
		},
		{
			id: ulid(),
			origin: {
				country: 'US',
				direction: 'Chicago'
			},
			destination: {
				country: 'US',
				direction: 'Las Vegas'
			},
			departureDate: new Date()
		}
	])

	const filterFlight = (origin ?: string, destination ?: string, date ?: Date) : ExploreFlights[] => {
		const filterFlights = new Set<ExploreFlights>()
		for ( const flight of exploreFlights.value ) {
			if (
				(flight.origin.direction === origin) ||
				(flight.destination.direction === destination) ||
				(flight.departureDate.getDay() === date?.getDay())
			) {
				filterFlights.add(flight)
			}
		}
		return Array.from(filterFlights)
	}

	return {
		exploreFlights,
		filterFlight
	}
})
