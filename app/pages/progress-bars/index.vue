<script setup
	lang="ts">

import ProgressBarCard from '~/components/progress-bars/ProgressBarCard.vue'
import ProgressBarDiagonalStriped
	from '~/components/progress-bars/ProgressBarDiagonalStriped.vue'
import ProgressBarDividedSteps
	from '~/components/progress-bars/ProgressBarDividedSteps.vue'
import ProgressBarNormal from '~/components/progress-bars/ProgressBarNormal.vue'
import ProgressBarWithThumb
	from '~/components/progress-bars/ProgressBarWithThumb.vue'
import ProgressCircleBar, { type CircleBarType } from '~/components/progress-bars/ProgressCircleBar.vue'
import ProgressStepArrowBar
	from '~/components/progress-bars/ProgressStepArrowBar.vue'

const progress    = ref( 70 )
const circleSteps = [
	'Step 1',
	'Step 2',
	'Step 3'
]

const cicleInfoSteps: CircleBarType[] = [
	{
		title      : 'Step 1',
		description: 'Description 1'
	},
	{
		title      : 'Step 2',
		description: 'Description 2'
	},
	{
		title      : 'Step 3',
		description: 'Description 3'
	}
]

const data = {
	fileSizeMB     : 20,
	uploadSpeedMbps: 10
}

const { pause, resume } = useIntervalFn( () => {
	if ( progress.value < 100 ) {
		progress.value += 10
	}
	else {
		running.value = false
		pause()
	}
}, 1000, {
	immediate: false
} )

const running = ref( false )

const toggleProgress = () => {
	running.value = true
	progress.value = 0
	resume()
}
</script>

<template>
	<div class="bg-[#315eb9] w-screen h-screen flex flex-col items-center justify-center">
		<div class="w-full h-[600px] flex gap-20 items-center justify-center">
			<div class="flex flex-col gap-8">
				<progress-bar-card :position="1">
					<progress-bar-divided-steps v-model="progress"></progress-bar-divided-steps>
				</progress-bar-card>
				<progress-bar-card :position="2">
					<progress-bar-diagonal-striped v-model="progress"></progress-bar-diagonal-striped>
				</progress-bar-card>
				<progress-bar-card :position="3">
					<progress-bars-progress-step-circle-bar v-model="progress"
						:steps="circleSteps"></progress-bars-progress-step-circle-bar>
				</progress-bar-card>
				<progress-bar-card :position="4">
					<progress-step-arrow-bar v-model="progress"
						:steps="circleSteps"></progress-step-arrow-bar>
				</progress-bar-card>
			</div>
			<div class="flex flex-col gap-8">
				<progress-bar-card :position="5">
					<progress-bar-normal v-model="progress"></progress-bar-normal>
				</progress-bar-card>
				<progress-bar-card :position="6">
					<progress-bar-with-thumb v-model="progress"></progress-bar-with-thumb>
				</progress-bar-card>
				<progress-bar-card :position="7">
					<progress-bars-progress-bar-with-remaining
						:data
						v-model="progress"></progress-bars-progress-bar-with-remaining>
				</progress-bar-card>
				<progress-bar-card :position="8">
					<progress-circle-bar :items="cicleInfoSteps"
						v-model="progress"></progress-circle-bar>
				</progress-bar-card>
			</div>
		</div>
		<div class="flex flex-col gap-2 items-center justify-center">
			<button :disabled="running"
				@click="toggleProgress"
				class="bg-gray-200 rounded-2xl py-2 px-8">
				<span v-if="running">
					Running...
				</span>
				<span v-else>
					{{ progress }}%
				</span>
			</button>
			<input type="range"
				class="flex flex-1"
				:disabled="running"
				:min="0"
				:max="100"
				v-model.number="progress"/>
		</div>
	</div>
</template>

<style scoped>

</style>