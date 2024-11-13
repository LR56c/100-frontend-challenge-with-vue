import type { WeatherRepository } from '~/components/weather-app/data/weather-repository'
import type {
	Weather,
} from '~/components/weather-app/weather'
import {
	weatherDescriptionParser,
} from '~/lib/weather-icon-parser'


export class WeatherLocalData implements WeatherRepository {
	async getWeatherForecast( lat: number,
		lon: number ): Promise<Weather> {
		const json: Weather = {
			location   : 'Cartagena',
			icon       : 'fluent-emoji-sun-behind-cloud',
			description: 'Sun with occasional clouds',
			temperature: 13.9,
			info       : {
				uv            : 11,
				percentageRain: 0,
				aq            : 0
			},
			forecast   : [
				{
					temperature: 13.1,
					date       : '2024-11-14',
					icon       : weatherDescriptionParser( 804 )
				},
				{
					temperature: 14.8,
					date       : '2024-11-15',
					icon       : weatherDescriptionParser( 803 )
				},
				{
					temperature: 13.5,
					date       : '2024-11-16',
					icon       : weatherDescriptionParser( 520 )
				},
				{
					temperature: 15.3,
					date       : '2024-11-17',
					icon       : weatherDescriptionParser( 800 )
				},
				{
					temperature: 16,
					date       : '2024-11-18',
					icon       : weatherDescriptionParser( 801 )
				},
				{
					temperature: 16.8,
					date       : '2024-11-19',
					icon       : weatherDescriptionParser( 802 )
				}
			]
		}
		return json
	}
}