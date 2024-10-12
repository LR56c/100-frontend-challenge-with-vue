<script setup
	lang="ts">

import VideoButton from '~/components/video-player/VideoButton.vue'
import VideoLikeButton from '~/components/video-player/VideoLikeButton.vue'
import { formatLikes } from '~/lib/formatSongDuration'

interface VideoInfoProps {
	name: string
	subscribers: number
	views: number
	likes: number
	avatar: string
}
defineProps<VideoInfoProps>()
</script>

<template>
	<div
		class="bg-indigo-900 min-w-[576px] min-h-16 max-w-xl w-full rounded-2xl flex justify-between items-center p-4">
		<div class="flex gap-2 items-center">
			<img class="rounded-full w-10 h-10 object-cover object-center"
				:src="avatar"/>
			<div class="flex flex-col">
				<div class="font-medium text-sm">{{ name }}</div>
				<div class="font-light text-xs">{{ formatLikes(subscribers) }} subscribers</div>
			</div>
		</div>
		<div class="flex items-center gap-1">
			<Icon name="mdi-eye"/>
			<div>{{ formatLikes(views) }}</div>
		</div>
		<div class="flex items-center gap-1">
			<Icon class="scale-x-[-1]" name="mynaui-like-solid"/>
			<div>{{ formatLikes(likes) }} likes</div>
		</div>
		<div class="flex gap-2">
			<video-button class="hover:bg-gray-100/50" label="Share" icon="material-symbols-share-outline"></video-button>
			<video-like-button></video-like-button>
		</div>
	</div>
</template>

<style scoped>

</style>
