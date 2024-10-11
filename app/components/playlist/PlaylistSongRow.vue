<script setup
	lang="ts">

import { formatSongDuration } from '~/lib/formatSongDuration'

interface PlaylistSongRowProps {
	id: string
	title: string
	cover: string
	artist: string
	duration: number
}

defineProps<PlaylistSongRowProps>()

const emit = defineEmits<{
	clickSong: [string]
}>()
</script>

<template>
	<button @click="emit('clickSong', id)" class="flex gap-4 justify-between items-center py-2 px-4">
		<div class="flex gap-4">
			<img class="rounded-2xl object-center object-cover w-12 h-12"
				:src="cover"/>
			<div class="flex flex-col items-start">
				<div class="font-medium">{{ title }}</div>
				<div class="text-sm font-light">{{ artist }}</div>
			</div>
		</div>
		<div class="font-light">{{ formatSongDuration(duration) }}</div>
	</button>
</template>

<style scoped>

</style>
