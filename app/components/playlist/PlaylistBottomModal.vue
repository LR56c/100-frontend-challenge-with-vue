<script setup
	lang="ts">
import MySlider from '~/components/playlist/MySlider.vue'
import { usePlaylist } from '~/components/playlist/usePlaylist'
import { formatSongDuration } from '~/lib/formatSongDuration'

const open  = defineModel( 'open', {
	default: false
} )
const store = usePlaylist()
</script>

<template>
	<div
		v-if="store.currentSongState"
		class="relative w-full p-4 rounded-2xl shadow-xl text-black">
		<button @click="open = !open"
			class="absolute rounded-full left-1/2 -translate-x-1/2 -top-4 w-10 h-2 bg-white"></button>
		<div class="flex justify-between gap-4"
			v-if="!open">
			<div class="flex gap-4">
				<img class="rounded-2xl object-center object-cover w-12 h-12"
					:src="store.currentSongState.song.cover"/>
				<div class="flex flex-col">
					<div class="font-medium">{{
							store.currentSongState.song.title
						}}
					</div>
					<div class="font-light">{{
							store.currentSongState.song.artist
						}}
					</div>
				</div>
			</div>
			<button @click="store.togglePlay">
				<Icon v-if="store.currentSongState.playing"
					size="40"
					class="text-indigo-500"
					name="material-symbols-play-arrow-rounded"/>
				<Icon v-else
					size="40"
					class="text-indigo-500"
					name="material-symbols-pause-rounded"/>
			</button>
		</div>
		<div v-else
			class="h-80 flex flex-col gap-4">
			<img class="rounded-2xl self-center object-center object-cover w-36 h-36"
				:src="store.currentSongState.song.cover"/>
			<div class="flex justify-between">
				<div class="flex flex-col">
					<div class="font-medium">{{
							store.currentSongState.song.title
						}}
					</div>
					<div class="font-light">{{
							store.currentSongState.song.artist
						}}
					</div>
				</div>
				<playlist-like-button></playlist-like-button>
			</div>
			<my-slider
				:max-value="100"
				:min-value="0"
				v-model="store.getPercentageDuration"></my-slider>
			<div class="flex justify-between">
				<div class="text-sm">{{ store.getDurationCurrentSongFormat }}</div>
				<div class="text-sm">{{
						formatSongDuration( store.currentSongState.song.duration )
					}}
				</div>
			</div>
			<div class="flex items-center justify-center gap-4">
				<button
					:disabled="!store.prevSongExist"
					@click="store.playPreviousSong">
					<Icon
						size="40"
						class="group-disabled:opacity-25 rotate-180 text-indigo-500"
						name="material-symbols-fast-forward-rounded"/>
				</button>
				<button @click="store.togglePlay">
					<Icon v-if="store.currentSongState.playing"
						size="40"
						class="text-indigo-500"
						name="material-symbols-play-arrow-rounded"/>
					<Icon v-else
						size="40"
						class="text-indigo-500"
						name="material-symbols-pause-rounded"/>
				</button>
				<button
					class="group"
					:disabled="!store.nextSongExist"
					@click="store.playNextSong">
					<Icon
						size="40"
						class="group-disabled:opacity-25 text-indigo-500"
						name="material-symbols-fast-forward-rounded"/>
				</button>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>
