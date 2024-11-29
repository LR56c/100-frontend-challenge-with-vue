<script setup
	lang="ts">

import { useAudioPlayer } from '~/components/audio-player/useAudioPlayer'
import MyIconButtonColored from '~/components/shared/MyIconButtonColored.vue'
import MyProgress from '~/components/shared/MyProgress.vue'
import { formatSongDuration } from '~/lib/formatSongDuration'

const store = useAudioPlayer()

const { currentSongState, currentPlaylistSelected } = storeToRefs( store )
</script>

<template>
	<div class="w-screen h-screen flex items-center justify-center bg-orange-200">
		<div class="max-w-md w-full bg-gray-100 rounded-2xl shadow-lg p-4 flex flex-col gap-4 items-center">
			<template v-if="currentSongState">
				<div class="w-full h-48 bg-[#7dcbfc] rounded-2xl flex items-center justify-center">
					<img v-if="currentSongState.song.cover"
						class="rounded-2xl self-center object-center object-cover w-36 h-36"
						:src="currentSongState.song.cover"/>
					<NuxtImg v-else
						class="rounded-2xl self-center object-center object-cover w-36 h-36"
						src="/music3d.jpg"/>
				</div>
				<div class="flex flex-col w-full items-center gap-1">
					<span class="text-lg font-semibold">{{
							currentSongState.song.title
						}}</span>
					<span class="text-sm text-gray-500">{{
							currentSongState.song.artist
						}}</span>
				</div>
				<div class="flex w-full justify-between items-center h-fit pl-2 pr-4 rounded-full gap-2 bg-[#7dcbfc]/10">
					<button @click="store.togglePlay">
						<my-icon-button-colored
							v-if="!currentSongState.playing"
							icon="material-symbols-light-play-circle-rounded"
							background-class="bg-white"
							icon-class="text-[#7dcbfc]"></my-icon-button-colored>
						<my-icon-button-colored
							v-else
							icon="material-symbols-pause-circle-rounded"
							background-class="bg-white"
							icon-class="text-[#7dcbfc]"></my-icon-button-colored>
					</button>
					<my-progress class="h-3 bg-gray-100" class-indicator="bg-[#7dcbfc]" :max="100"
						v-model="store.getPercentageDuration"
					></my-progress>
					<div class="flex justify-between font-semibold text-xs items-center">
						<span>{{ store.getDurationCurrentSongFormat }}/</span>
						<span>{{
								formatSongDuration( currentSongState.song.duration )
							}}
						</span>
					</div>
					<button>
						<Icon size="20"
							class="text-black"
							name="material-symbols-volume-down"/>
					</button>
				</div>
			</template>
			<template v-else>
				Loading...
			</template>
		</div>
	</div>
</template>

<style scoped>

</style>