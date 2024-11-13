import { WeatherNuxtApiData } from '~/components/weather-app/data/weather-nuxt-api-data'
import type { WeatherRepository } from '~/components/weather-app/data/weather-repository'
import type { Weather } from '~/components/weather-app/weather'

export const useWeatherApp = defineStore( 'weather-app', () => {

	const weatherData = ref<Weather | undefined>( undefined )

	const getWeatherForecast = async ( lat: number,
		lon: number ): Promise<void> => {
		try {
			const weather : WeatherRepository = new WeatherNuxtApiData()
			// const weather: WeatherRepository = new WeatherLocalData()
			const response                   = await weather.getWeatherForecast( lat,
				lon )
			// console.log('store:', response )
			weatherData.value = response.data
		}
		catch ( e ) {
			weatherData.value = undefined
		}
	}


	return {
		getWeatherForecast,
		weatherData       : readonly( weatherData )
	}
} )