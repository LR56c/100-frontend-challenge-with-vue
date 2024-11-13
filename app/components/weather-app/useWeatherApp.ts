import type { Weather } from '~/components/weather-app/weather'

export const useWeatherApp = defineStore( 'weather-app', () => {

	const weatherData = ref<Weather | undefined>( undefined )

	const getWeatherForecast = async ( lat: number,
		lon: number ): Promise<void> => {
		const response    = await $fetch( '/api/weather', {
			method: 'GET',
			query : {
				lat,
				lon
			}
		} )
		weatherData.value = response.data
	}

	return {
		getWeatherForecast,
		weatherData: readonly( weatherData )
	}
} )