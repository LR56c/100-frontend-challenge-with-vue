<script setup
	lang="ts">

import MyProgress from '~/components/shared/MyProgress.vue'
import { calculateUploadTime } from '~/lib/uploadTime'

const progressValue = defineModel( {
	default: 0
} )

const fileSizeMB      = 20
const uploadSpeedMbps = 10

const fileSizeLeft = computed( () => {
	return fileSizeMB * ( 100 - progressValue.value ) / 100
} )

const progressLeft = computed( () => {
	return calculateUploadTime( fileSizeLeft.value, uploadSpeedMbps )
} )
</script>

<template>
	<div class="w-full flex flex-col items-center justify-center gap-2">
		<div class="flex gap-2 text-sm font-semibold">
			<span class="text-[#3734ff]">{{ progressValue }}%</span>
			<span>Update in progress...</span>
			<span class="text-blue-400">{{ progressLeft }} left</span>
		</div>
		<my-progress class="h-3 bg-gray-200"
			class-indicator="bg-[#3734ff]"
			:max="100"
			:model-value="progressValue"></my-progress>
	</div>
</template>

<style scoped>

</style>