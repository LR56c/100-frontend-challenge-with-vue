<script setup
	lang="ts">
// interface VideoPlayerProps {
// 	isLive : boolean
// 	currentDuration : number
// 	maxDuration : number
// 	playing : boolean
// }
// defineProps<VideoPlayerProps>()

import MySlider from '~/components/playlist/MySlider.vue'
import { useVideoPlayer } from '~/components/video-player/useVideoPlayer'
import VideoButton from '~/components/video-player/VideoButton.vue'
import { formatSongDuration } from '~/lib/formatSongDuration'

const emit = defineEmits<{
	fullScreen: [ boolean ]
	playing: [ boolean ]
}>()

const store      = useVideoPlayer()
const fullScreen = ref( false )

const toggleFullscreen = () => {
	fullScreen.value = !fullScreen.value
	emit( 'fullScreen', fullScreen.value )
}
</script>

<template>
	<div class="bg-black/70 backdrop-blur-sm rounded-2xl p-2 w-full flex gap-4 items-center">
		<template v-if="store.currentVideoPlayer">
			<div class="w-fit flex p-3 h-7 gap-1 items-center bg-purple-500 justify-center rounded-2xl">
				<span>• LIVE</span>
			</div>
			<button @click="store.togglePlay">
				<Icon v-if="store.currentVideoPlayer.playing"
					size="30"
					name="material-symbols-play-arrow-rounded"/>
				<Icon v-else
					size="30"
					name="material-symbols-pause-rounded"/>
			</button>
			<my-slider
				:max-value="100"
				:min-value="0"
				v-model="store.getPercentageDuration"></my-slider>
			<div class="text-xs w-fit">{{ formatSongDuration( store.currentVideoPlayer.currentDuration ) }} / {{ formatSongDuration( store.currentVideoPlayer.video.duration ) }}</div>
			<button class="hover:bg-gray-200/20 p-1 rounded-full" @click="toggleFullscreen">
				<Icon size="20"
					name="mingcute-fullscreen-line"/>
			</button>
		</template>
		<template v-else>
			<div>Loading</div>
		</template>
	</div>
</template>

<style scoped>

</style>
