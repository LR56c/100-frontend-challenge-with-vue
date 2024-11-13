import type { Weather } from '~/components/weather-app/weather'

export interface WeatherRepository {
	getWeatherForecast(lat : number, lon : number): Promise<Weather>
	// getWeatherToday(lat : number, lon : number): Promise<Weather>
}