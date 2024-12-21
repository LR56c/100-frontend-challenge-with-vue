<script setup
	lang="ts">
import "vue3-circle-progress/dist/circle-progress.css";
import CircleProgress from "vue3-circle-progress";
import { formatSongDuration } from '@/lib/formatSongDuration'
import TimeWidgetButton from '~/components/time-widget/TimeWidgetButton.vue'
import { useTimeWidget } from '~/components/time-widget/useTimeWidget'

const store = useTimeWidget()
const {
	      currentTime,
	      playing,
	      getPercentageDuration
      }     = storeToRefs( store )
</script>

<template>
	<div class="bg-[#cc59ce] w-screen h-screen flex flex-col items-center justify-center gap-4">
		<div class="relative w-32 bg-white shadow-lg rounded-2xl flex p-4 gap-4">
			<time-widget-button icon="mdi-timer"></time-widget-button>
			<time-widget-button disabled
				icon="ion-ios-alarm"></time-widget-button>
			<time-widget-button disabled
				icon="material-symbols-light-calendar-month-rounded"></time-widget-button>
		</div>
		<div class="relative w-full max-w-md bg-white shadow-lg rounded-2xl flex flex-col p-4 gap-4">
			<div class="flex w-full items-center justify-between px-4">
				<span class="font-semibold text-lg">Time Widget</span>
				<button @click="store.reset"
					class="text-red-500 hover:text-red-700">restart
				</button>
			</div>
			<div class="relative w-full flex justify-center">
				<span class="absolute text-3xl font-bold top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2">{{ formatSongDuration(currentTime) }}</span>
				<circle-progress :transition="100" fill-color="#d057cf" :percent="getPercentageDuration" />
			</div>
			<hr class="border border-black/30 w-full"/>
			<div class="flex items-center w-full justify-between px-4">
				<div class="flex gap-1 items-center">
					<time-widget-button v-if="!playing"
						@click="store.togglePlay"
						icon="material-symbols-play-arrow-rounded"></time-widget-button>
					<time-widget-button v-else
						@click="store.togglePlay"
						icon="material-symbols-pause-rounded"></time-widget-button>
					<time-widget-button @click="store.resetStop"
						icon="ic-round-stop"></time-widget-button>
				</div>
				<time-widget-button @click="store.addTime(60)"
					label="+ 1 min"></time-widget-button>
			</div>
		</div>
	</div>
</template>

<style scoped>
</style>