<script setup
	lang="ts">

import RelatedVideo from '~/components/video-player/RelatedVideo.vue'
import { useVideoPlayer } from '~/components/video-player/useVideoPlayer'
import VideoInfo from '~/components/video-player/VideoInfo.vue'

const store = useVideoPlayer()
</script>

<template>
	<div class="bg-indigo-950 w-screen h-screen flex items-center justify-center text-white gap-8">
		<div class="flex flex-col gap-4">
			<div v-if="store.currentVideoPlayer"
				class="relative bg-indigo-900 min-w-[576px] min-h-96 max-w-xl w-full rounded-2xl">
				<div class="absolute flex p-4 bottom-0 w-full">
					<video-player></video-player>
				</div>
				<img class="rounded-2xl object-cover object-center"
					:src="store.currentVideoPlayer.video.cover"/>
			</div>
			<div v-if="!store.currentVideoPlayer"
				class="bg-indigo-900 min-w-[576px] min-h-96 max-w-xl w-full rounded-2xl flex justify-center items-center">
				<div class="font-medium text-lg">No video selected</div>
			</div>
			<video-info v-if="store.currentVideoPlayer"
				:name="store.currentVideoPlayer.video.author.name"
				:subscribers="store.currentVideoPlayer.video.author.subscribers"
				:views="store.currentVideoPlayer.video.views"
				:likes="store.currentVideoPlayer.video.likes"
				:avatar="store.currentVideoPlayer.video.author.avatar"
			></video-info>
		</div>
		<div class="mt-32 bg-indigo-900 min-h-[480px] max-h-[480px] min-w-xs max-w-xs w-full rounded-2xl flex flex-col p-4 gap-4">
			<div class="font-medium text-lg">Related Videos</div>
			<div class="h-full no-scrollbar overflow-y-scroll flex flex-col gap-4">
				<related-video
					@clicked="store.setupVideo"
					v-for="[key,video] in store.videosList"
					:video
					:key="key"
				></related-video>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>
