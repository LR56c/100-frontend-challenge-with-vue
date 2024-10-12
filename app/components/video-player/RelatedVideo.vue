<script setup
	lang="ts">
import { useTimeAgo } from '@vueuse/core'
import type { Video } from '~/components/video-player/useVideoPlayer'
import { formatLikes } from '~/lib/formatSongDuration'

interface RelatedVideoProps {
	video : Video
}

defineProps<RelatedVideoProps>()
const emit = defineEmits<{
	clicked : [Video]
}>()
</script>

<template>
<div
	@click="emit('clicked', video)"
	class="hover:bg-gray-200/20 p-1 rounded-2xl flex items-center gap-2 cursor-pointer">
	<img class="w-28 h-20 rounded-2xl object-cover object-center" :src="video.cover"/>
	<div class="flex flex-col">
		<div class="line-clamp-1 text-sm font-medium">{{ video.title }}</div>
		<div class="line-clamp-1 text-xs font-light">{{ video.author.name }}</div>
		<div class="line-clamp-1 text-xs font-light">{{ formatLikes(video.views) }} views • {{ useTimeAgo(video.createdAt) }}</div>
	</div>
</div>
</template>

<style scoped>

</style>
