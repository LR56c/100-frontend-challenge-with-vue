<script setup
	lang="ts">
import type { WeatherInfo } from '~/components/weather-app/useWeatherApp'
import WeatherAppInfoLabel
	from '~/components/weather-app/WeatherAppInfoLabel.vue'

interface WeatherAppInfoProps {
	info :WeatherInfo
}

defineProps<WeatherAppInfoProps>()
</script>

<template>

	<div class="w-full rounded-2xl flex p-2 bg-indigo-50 items-center justify-evenly">
		<weather-app-info-label label="UV" :value="info.uv.toString()"></weather-app-info-label>
		<weather-app-info-label label="% RAIN" :value="`${info.percentageRain}%`"></weather-app-info-label>
		<weather-app-info-label label="AQ" :value="info.aq.toString()"></weather-app-info-label>
	</div>
</template>

<style scoped>

</style>