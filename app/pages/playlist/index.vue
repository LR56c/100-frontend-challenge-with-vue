<script setup
	lang="ts">
import PlaylistBottomModal from '~/components/playlist/PlaylistBottomModal.vue'
import PlaylistLikeButton from '~/components/playlist/PlaylistLikeButton.vue'
import { usePlaylist } from '~/components/playlist/usePlaylist'
import {
	formatLikes,
	formatPlaylistDuration
} from '~/lib/formatSongDuration'

const store = usePlaylist()
const onClickSong = (value : string) => {
	if(!store.currentPlaylistSelected) return
  store.getSong(store.currentPlaylistSelected.title,value)
}
const modalOpen = ref(false)
</script>
<template>
	<div class="bg-gray-100 w-screen h-screen flex items-center justify-center">
		<div v-if="store.currentPlaylistSelected"
			class="relative rounded-2xl bg-[#0f0f45] pt-4 flex flex-col gap-4 min-h-[600px] max-h-[600px] max-w-xs w-full text-white">
			<div v-if="modalOpen" class="z-10 absolute rounded-t-2xl inset-0 bg-black/30 backdrop-blur-sm"></div>

			<div v-if="store.currentSongState"
				class="z-20 absolute rounded-2xl -bottom-10 left-1/2 w-full bg-white -translate-x-1/2">
				<playlist-bottom-modal
					v-model:open="modalOpen"
				></playlist-bottom-modal>
			</div>
			<div class="flex w-full items-center justify-center rounded-2xl">
				<img class="rounded-2xl object-center object-cover w-28 h-28"
					:src="store.currentPlaylistSelected.cover"/>
			</div>
			<div class="flex justify-between px-4">
				<div class="flex flex-col">
					<div class="font-medium text-lg">
						{{ store.currentPlaylistSelected.title }}
					</div>
					<div class="font-light text-sm">{{
							formatLikes(store.currentPlaylistSelected.likes)
						}} likes • {{ formatPlaylistDuration(store.currentPlaylistSelected.totalDuration) }}
					</div>
				</div>
				<div class="flex gap-2">
					<playlist-like-button></playlist-like-button>
					<Icon class="cursor-pointer" size="20" name="mi:options-vertical"/>
				</div>
			</div>
			<div class="flex flex-col gap-4 pb-16 overflow-y-scroll no-scrollbar">
				<playlist-song-row v-for="song in store.currentPlaylistSelected.songs"
					@click-song="onClickSong"
					:key="song.id"
					:id="song.id"
					:title="song.title"
					:cover="song.cover"
					:artist="song.artist"
					:duration="song.duration">
				</playlist-song-row>
			 </div>
		</div>
		<div v-else
			class="rounded-2xl bg-[#0f0f45] p-4 flex flex-col items-center justify-center min-h-[600px] max-h-[600px] max-w-xs w-full">
			<div class="text-white text-2xl font-medium text-center">Select a playlist to see the
				songs
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>
