import { ulid } from 'ulidx'
import type { SoundType } from '~/components/sleep-app/useAudioDecibels'

export type SearchResult = {
	id: string
	image: string
	rooms: number
	bathrooms: number
	surface: number
	price: number
	address: string
}

export const useSearchFilters = defineStore( 'search-filters', () => {
	const propertiesTypes : string[]    = [
		'house', 'penthhouse', 'townhouses', 'apartment',
		'villa', 'condominiums'
	]
	const clearHook = createEventHook<void>()
	const search = ref<SearchResult[]>( [])
	const propertiesDatabase = ref<SearchResult[]>( [
		{
			id       : ulid(),
			image    : 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			rooms    : 3,
			bathrooms: 2,
			surface  : 120,
			price    : 250000,
			address  : '215 McKinley Avenue Denver, CO 80203'
		},
		{
			id       : ulid(),
			image    : 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			rooms    : 2,
			bathrooms: 1,
			surface  : 80,
			price    : 150000,
			address  : '1041 Elk City Road Indianapolis, IN 46205'
		},
		{
			id       : ulid(),
			image    : 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			rooms    : 4,
			bathrooms: 3,
			surface  : 200,
			price    : 350000,
			address  : '1234 Main St, Anytown, USA'
		}
	] )

	const filter = (
		minPrice ?: number,
		maxPrice ?: number,
		propertyNearMiles ?: string,
		propertyLocation ?: string,
		propertyTypes ?: string[],
		minPropertySize ?: number,
		maxPropertySize ?: number
	) => {
		search.value = propertiesDatabase.value.filter( property => {
			if ( minPrice && property.price < minPrice ) {
				return false
			}
			if ( maxPrice && property.price > maxPrice ) {
				return false
			}
			// if ( propertyTypes && !propertyTypes.includes( propertyTypes ) ) {
			// 	return false
			// }
			if ( minPropertySize && property.surface < minPropertySize ) {
				return false
			}
			if ( maxPropertySize && property.surface > maxPropertySize ) {
				return false
			}
			return true
		} )
	}

	const clear = async () => {
		search.value = []
		await clearHook.trigger()
	}

	return {
		search,
		propertiesTypes,
		clearHook,
		filter,
		clear
	}
} )