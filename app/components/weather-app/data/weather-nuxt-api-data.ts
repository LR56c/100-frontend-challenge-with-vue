import type { WeatherRepository } from '~/components/weather-app/data/weather-repository'
import type { Weather } from '~/components/weather-app/weather'

export class WeatherNuxtApiData implements WeatherRepository{
	async  getWeatherForecast(lat : number, lon : number): Promise<Weather>{
		const nuxtData = await $fetch( '/api/weather', {
			method: 'GET',
			query : {
				lat,
				lon
			}
		} )
		console.log('nuxtData:', nuxtData )
		return nuxtData
	}
}