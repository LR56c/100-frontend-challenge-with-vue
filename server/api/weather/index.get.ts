import { WeatherBitData } from '~/components/weather-app/data/weather-bit-data'
import { WeatherLocalData } from '~/components/weather-app/data/weather-local-data'
import { WeatherRepository } from '~/components/weather-app/data/weather-repository'
import {
	Weather,
	WeatherForecast
} from '~/components/weather-app/weather'


export default defineEventHandler( async ( event ) => {
	console.log( 'event handler' )
	const query  = getQuery( event )
	const config = useRuntimeConfig()
	const lat    = parseFloat( query.lat ) ?? 0
	const lon    = parseFloat( query.lon ) ?? 0
	// const response = await $fetch( `https://api.weatherbit.io/v2.0/forecast/daily?lat=${ lat }&lon=${ lon }&key=${ config.weather }` )
	// const weather : WeatherRepository= new WeatherBitData( config.weather )
	const weather: WeatherRepository  = new WeatherLocalData()
	const response             = await weather.getWeatherForecast( lat,
		lon )

	return {
		data: response
	}
} )