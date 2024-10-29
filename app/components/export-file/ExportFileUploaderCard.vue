<script setup
	lang="ts">
import MyProgress from '~/components/shared/MyProgress.vue'

const emit = defineEmits<{
	onCanceled : [void]
	onPause : [void]
	onPlay : [void]
}>()

const progressValue = defineModel( {
	default: 0
} )
const paused = ref(false)

const cancel = () => {
	emit('onCanceled')
}

const pause = () => {
	paused.value = true
	emit('onPause')
}

const play = () => {
	paused.value = false
	emit('onPlay')
}
</script>

<template>
	<div class="h-24 w-64 flex flex-col rounded-2xl bg-black/50 p-4 justify-between">
		<div class="flex justify-between w-full items-center">
			<div class="text-white">Exporting...</div>
			<div class="flex gap-1 items-center">
				<button v-if="!paused" @click="pause"
					class="w-5 h-5 bg-gray-500 rounded-2xl flex items-center justify-center">
					<Icon name="material-symbols-pause"/>
				</button>
				<button v-else @click="play"
					class="w-5 h-5 bg-gray-500 rounded-2xl flex items-center justify-center">
					<Icon name="material-symbols-play-arrow-rounded"/>
				</button>
				<button @click="cancel"
					class="w-5 h-5 bg-gray-500 rounded-2xl flex items-center justify-center">
					<Icon size="20" name="material-symbols-close-small-rounded"/>
				</button>
			</div>
		</div>
		<div class="flex flex-col w-full">
		<span class="text-white text-sm">{{ progressValue }}%</span>
		<MyProgress
			:max="100"
			class="bg-gray-500 h-2"
			class-indicator="bg-yellow-300"
			v-model="progressValue"/>
		</div>
	</div>
</template>

<style scoped>

</style>
