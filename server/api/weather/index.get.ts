import { WeatherResponseSchema } from '~/components/weather-app/models/weather'

export default defineEventHandler( async ( event ) => {
	const query                      = getQuery( event )
	const config = useRuntimeConfig()
	const lat                        = parseFloat( query.lat ) ?? 0
	const lon                        = parseFloat( query.lon ) ?? 0
	const response = await $fetch(
		`https://api.weatherbit.io/v2.0/forecast/daily?lat=${ lat }&lon=${ lon }&key=${ config.weather }` )

	const data = WeatherResponseSchema.safeParse( response )

	if ( !data.success ) {
		throw new Error( 'Invalid response' )
	}
	return {
		data: data.data
	}
} )