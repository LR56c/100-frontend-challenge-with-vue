import { WeatherBitData } from '~/components/weather-app/data/weather-bit-data'
import { WeatherLocalData } from '~/components/weather-app/data/weather-local-data'
import { WeatherRepository } from '~/components/weather-app/data/weather-repository'
import { Weather } from '~/components/weather-app/weather'

export default defineEventHandler( async ( event ) => {
	const query                         = getQuery( event )
	const config                        = useRuntimeConfig()
	console.log( 'event handler')
	const lat                           = parseFloat( query.lat ) ?? 0
	const lon                           = parseFloat( query.lon ) ?? 0

	let response: Weather | undefined = undefined
	try {
		const weather: WeatherRepository = new WeatherBitData( config.weather )
		response                         =
			await weather.getWeatherForecast( lat, lon )
	}
	catch ( e ) {
		const weather: WeatherRepository = new WeatherLocalData()
		response                         =
			await weather.getWeatherForecast( lat, lon )
	}

	return {
		data: response
	}
} )