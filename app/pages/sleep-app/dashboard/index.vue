<script setup
	lang="ts">

import SleepDataCircleProgress
	from '~/components/sleep-app/SleepDataCircleProgress.vue'
import SleepDataStatus from '~/components/sleep-app/SleepDataStatus.vue'
import { type SoundType } from '~/components/sleep-app/useAudioDecibels'
import {
	formatSeconds,
	useSleepApp
} from '~/components/sleep-app/useSleepApp'

const sleepStore   = useSleepApp()
const selectedDate = ref( new Date(2024,9,17) )
const selectedDateFormatted = computed( () => {
	return useDateFormat( selectedDate.value, 'YYYY-MM-DD' ).value
} )
const nextSelectedDate = () => {
	selectedDate.value =
		new Date( selectedDate.value.setDate( selectedDate.value.getDate() + 1 ) )
}
const prevSelectedDate = () => {
	selectedDate.value =
		new Date( selectedDate.value.setDate( selectedDate.value.getDate() - 1 ) )
}
const sleepData = computed( () => {
	return sleepStore.getSleepSession( selectedDateFormatted.value )
} )
const toggleSleepSession = () => {
	sleepStore.toggleSleepSession()
}
const sleepSessionStatus = computed( () => {
	return sleepStore.isActive ? 'Stop' : 'Start'
} )

const sleepBlockColorSelector = ( type: SoundType ) => {
	switch ( type ){
		case 'medium':
			return 'bg-green-400'
		case 'high':
			return 'bg-orange-500'
		case 'low':
			return 'bg-blue-600'
	}
}
</script>

<template>
	<div class="bg-yellow-100 w-screen h-screen flex items-center justify-center">
		<div class="bg-indigo-950 min-h-[564px] max-h-[564px] w-full max-w-xs rounded-2xl p-4 gap-4 text-white flex flex-col">
				<div class="flex justify-between">
					<button class="flex items-center justify-center bg-gray-500/75 hover:bg-gray-300/75 rounded-2xl w-9 h-9">
						<Icon class="h-6"
							size="24"
							name="solar-list-outline"/>
					</button>
					<button @click="toggleSleepSession"
						class="flex items-center justify-center bg-gray-500/75 hover:bg-gray-300/75 rounded-2xl w-12 h-8">
					{{ sleepSessionStatus }}</button>
					<button class="flex items-center justify-center bg-gradient-to-b from-purple-500 to-purple-950 rounded-full w-10 h-10 pb-1">
						<Icon class="max-h-7"
							size="28"
							name="fluent-emoji-flat-fish"/>
					</button>
				</div>
				<div class="flex justify-center gap-4 items-center">
					<button class="flex items-center"
						@click="prevSelectedDate">
					<Icon class="max-h-7"
						size="28"
						name="material-symbols-light-arrow-circle-left-outline-rounded"/>
					</button>
					<div class="flex flex-col items-center justify-center">
						<div class="font-medium">{{ useDateFormat(selectedDate, 'dddd') }}</div>
						<div class="font-light text-sm">{{ useDateFormat(selectedDate, 'D MMM YYYY') }}</div>
					</div>
					<button class="flex items-center"
						@click="nextSelectedDate">
					<Icon class="max-h-7"
						size="28"
						name="material-symbols-light-arrow-circle-right-outline-rounded"/>
					</button>
				</div>
			<template v-if="sleepData !== undefined">
				<div class="flex flex-col items-center justify-center">
					<sleep-data-circle-progress
						:value="90"
						:score="sleepData.sleepScore"
					></sleep-data-circle-progress>
				</div>
				<div class="flex gap-4">
					<sleep-data-status
						:key="sleepData.sleepTime.value"
						:value="sleepData.sleepTime"
					></sleep-data-status>
					<sleep-data-status
						:key="sleepData.sleepQuality.value"
						:value="sleepData.sleepQuality"
					></sleep-data-status>
				</div>
				<div class="flex h-full w-full gap-0.5">
					<div
						v-for="(p, i) in sleepData.intervalsPercentages"
						:key="i"
						:style="{ '--percentage': `${p.percentage}%` }"
						:class="[sleepBlockColorSelector(p.type)]"
						class="custom-basis flex flex-1 h-10 rounded w-full"
					></div>
				</div>
				<div class="flex justify-between">
					<div class="flex gap-1 items-center">
						<Icon name="tabler-moon"/>
						<span>{{ useDateFormat(sleepData.sleepDate, 'hh:mm A') }}</span>
					</div>
					<div class="flex gap-1 items-center">
						<Icon name="si-sun-line"/>
						<span>{{ useDateFormat(sleepData.wakeDate, 'hh:mm A') }}</span>
					</div>
				</div>
			</template>
			<div v-else class="h-full flex items-center justify-center">
				No Data
			</div>
		</div>
	</div>
</template>

<style scoped>
.custom-basis {
	flex-basis: var(--percentage);
}
</style>
