import { ulid } from 'ulidx'
import type { Location } from '~/components/explore-flights/location'

export type ExploreCar = {
	id : string
	pickupLocation : Location
	brand : string
	model : string
	type : string[]
	distance : number
	price : number
}
export const useExploreCars = defineStore( 'explore-cars', () => {
	const exploreCars = ref<ExploreCar[]>([
		{
			id: ulid(),
			pickupLocation: {
				country: 'US',
				direction: 'Los Angeles'
			},
			brand: 'Toyota',
			model: 'Corolla',
			type: ['Sedan'],
			distance: 100,
			price: 50,
		},
		{
			id: ulid(),
			pickupLocation: {
				country: 'US',
				direction: 'Las Vegas'
			},
			brand: 'Tesla',
			model: 'Model 3',
			type: ['Sedan', 'Electric'],
			distance: 200,
			price: 100,
		}
	])

	const filterCar = (brand ?: string, model ?: string, type ?: string, distance ?: number, minPrice ?: number, maxPrice ?: number) : ExploreCar[] => {
		const filterCars = new Set<ExploreCar>()
		for ( const car of exploreCars.value ) {
			if (
				(car.brand === brand) ||
				(car.model === model) ||
				(type && car.type.includes(type)) ||
				(car.distance === distance) ||
				(minPrice && car.price >= minPrice) ||
				(maxPrice && car.price <= maxPrice)
			) {
				filterCars.add(car)
			}
		}
		return Array.from(filterCars)
	}

	return {
		exploreCars,
		filterCar
	}
})
