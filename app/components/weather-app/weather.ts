export type WeatherForecast = {
	date: string
	temperature: number
	icon: string
}

export type WeatherInfo = {
	uv: number
	percentageRain: number
	aq: number
}

export type Weather = {
	temperature: number
	description : string
	icon: string
	location: string
	forecast: WeatherForecast[]
	info: WeatherInfo
}