import type { WeatherResponse } from '~/components/weather-app/models/weather'

export type WeatherForecast = {
	date: string
	temperature: number
	weather: string
	icon: string
}

export type WeatherInfo = {
	uv: number
	percentageRain: number
	aq: number
}

export type Weather = {
	temperature: number
	location: string
	info: WeatherInfo
}

export const useWeatherApp = defineStore( 'weather-app', () => {

	const getWeatherForecast = async ( lat: number,
		lon: number ): Promise<WeatherResponse | undefined> => {

		const {data, error} = await useFetch( '/api/weather', {
			method: 'GET',
			query: {
				lat,
				lon
			}
		} )
		if( error.value ) {
			return undefined
		}
		return data.value as WeatherResponse
	}

	return {
		getWeatherForecast
	}
} )