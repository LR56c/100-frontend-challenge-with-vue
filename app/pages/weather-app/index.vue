<script setup
	lang="ts">

import {
	useWeatherApp,
} from '~/components/weather-app/useWeatherApp'
const store = useWeatherApp()
	const { coords} = useGeolocation()

watchOnce( coords, () => {
	store.getWeatherForecast(coords.value.latitude, coords.value.longitude)
} )

const weather = computed( () => store.weatherData )
</script>

<template>
	<div class="w-screen h-screen bg-gray-100 flex flex-col gap-12 items-center justify-center">
		<div v-if="weather" class="overflow-hidden bg-gradient-to-b from-indigo-300 to-gray-50 to-60% relative flex flex-col gap-4 justify-between items-center w-full max-w-xs min-h-[564px] max-h-[564px] shadow-lg rounded-2xl py-4">
			<div class="absolute top-0 left-0 w-full">
				<svg xmlns="http://www.w3.org/2000/svg"
					class="w-[450px]"
					viewBox="59 230 400 400">
					<path d="m 0 0 l 400 0 l 0 200 a 10 10 0 0 1 -400 0 z "
						fill="#f9fafb"/>
				</svg>
			</div>
			<div class="absolute top-[6%] w-full">
				<div class="flex flex-col items-center text-black">
					<span class="text-2xl font-bold">{{ weather.location }}</span>
					<span class="text-xs font-semibold text-black/50">{{ weather.description }}</span>
				</div>
			</div>
			<div class="absolute top-[18%] w-full flex justify-center">
				<Icon size="150"
					name="fluent-emoji-sun-behind-cloud"/>
			</div>
			<div class="h-full basis-[50%] flex items-end"></div>
			<div class="w-full h-full basis-[50%] flex flex-col gap-8 items-center">
				<span class="font-bold text-5xl">{{ weather.temperature }}°</span>
				<div class="w-full px-4">
					<weather-app-info :info="weather.info"></weather-app-info>
				</div>
				<div class="ml-4 w-full flex overflow-y-scroll gap-4 no-scrollbar">
					<weather-app-card
						v-for="forecast in weather.forecast"
						:icon="forecast.icon"
						:temperature="forecast.temperature"
						:day="forecast.date"></weather-app-card>
				</div>
			</div>
		</div>
		<div v-else>Loading...</div>
	</div>
</template>

<style scoped>

</style>