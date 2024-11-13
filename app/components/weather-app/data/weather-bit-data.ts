import type { WeatherRepository } from '~/components/weather-app/data/weather-repository'
import {
	WeatherResponseSchema
} from '~/components/weather-app/data/weather-forecast-data'
import type {
	Weather,
	WeatherForecast
} from '~/components/weather-app/weather'
import {
	weatherDescriptionParser,
	weatherIconParser
} from '~/lib/weather-icon-parser'

export class WeatherBitData implements WeatherRepository {
	constructor(private readonly key : string) {}
	async getWeatherForecast( lat: number,
		lon: number ): Promise<Weather> {
		const response = await fetch( `https://api.weatherbit.io/v2.0/forecast/daily?lat=${ lat }&lon=${ lon }&key=${ this.key }` )
		const data = WeatherResponseSchema.safeParse(await response.json())

		if ( !data.success ) {
			throw new Error( 'Invalid response' )
		}
		const weatherResponse						 = data.data
		const firstWeather                = weatherResponse.data[0]!
		const restWeathers                = weatherResponse.data.slice( 1 )
		const forecast: WeatherForecast[] = restWeathers.map( ( weather ) => ( {
			temperature: weather.temp,
			date       : weather.valid_date,
			icon			 : weatherIconParser(weather.weather.code),
		} ) )
		const responseWeather: Weather           = {
			description:weatherDescriptionParser(firstWeather.weather.code),
			location   : weatherResponse.city_name,
			icon			 : weatherIconParser(firstWeather.weather.code),
			temperature: firstWeather.temp,
			forecast	 : forecast,
			info       : {
				uv            : firstWeather.uv,
				percentageRain: firstWeather.pop,
				aq           : 0
				// aq           : firstWeather.aqi
			}
		}
		return responseWeather
	}
}