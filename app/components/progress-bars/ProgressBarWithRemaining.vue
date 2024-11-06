<script setup
	lang="ts">

import MyProgress from '~/components/shared/MyProgress.vue'
import {
	calculateTimeRemaining,
	calculateUploadTimeInMs
} from '~/lib/uploadTime'

interface ProgressBarWithRemainingProps {
	data: {
		fileSizeMB: number
		uploadSpeedMbps: number
	}
}

const props = defineProps<ProgressBarWithRemainingProps>()

const progressValue = defineModel( {
	default: 0
} )

const fileSizeLeft = computed( () => {
	return props.data.fileSizeMB * ( 100 - progressValue.value ) / 100
} )

const progressLeft = computed( () => {
	return calculateTimeRemaining(
		calculateUploadTimeInMs( fileSizeLeft.value, props.data.uploadSpeedMbps ) )
} )
</script>

<template>
	<div class="w-full flex flex-col items-center justify-center gap-2">
		<div class="flex gap-2 text-sm font-semibold">
			<span class="text-[#3734ff]">{{ progressValue }}%</span>
			<template v-if="progressLeft">
				<span>Update in progress...</span>
				<span class="text-blue-400">{{ progressLeft }} left</span>
			</template>
			<span v-else>Completed</span>
		</div>
		<my-progress class="h-3 bg-gray-200"
			class-indicator="bg-[#3734ff]"
			:max="100"
			:model-value="progressValue"></my-progress>
	</div>
</template>

<style scoped>

</style>