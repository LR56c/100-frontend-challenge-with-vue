<script setup
	lang="ts">

import AddShotSearch from '~/components/add-shot/AddShotSearch.vue'
import {
	type Shot,
	useAddShot
} from '~/components/add-shot/useAddShot'

const store = useAddShot()

const itemRef = ref<Shot | undefined>( undefined )
const selectedItem = ( shot : Shot ) => {
	itemRef.value = shot
}

const onSearch = ( text: string ) => {
	store.searchShot( text )
}
</script>

<template>
	<div class="relative w-screen h-screen flex bg-gray-200 p-12">
		<div class="absolute top-0 left-0 bg-black/20 h-full w-full flex flex-col backdrop-blur-md"></div>
		<div class="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-gray-100 shadow-lg rounded-2xl w-full max-w-xl min-h-[400px] px-4 py-6 flex flex-col gap-4">
			<button class="absolute top-[4%] right-[2%]">
				<Icon size="20"
					name="material-symbols-close-rounded"/>
			</button>
			<span class="font-semibold text-lg">Add this Shot to a collection</span>
			<add-shot-search @search="onSearch"
				placeholder="Filter collections"></add-shot-search>
			<add-shot-card v-for="shot in store.shots"
				:data-selected="shot.id === itemRef?.id"
				:key="shot.id"
				@select-item="selectedItem(shot)"
				:shot
			></add-shot-card>
			<div class="w-full flex justify-between">
				<add-shot-button type="outline"
					label="Create a new collection"></add-shot-button>
				<add-shot-button class="bg-purple-700"
					type="normal"
					label="Done"></add-shot-button>
			</div>
		</div>
		<div class="w-full h-ful flex items-center justify-center bg-purple-600 rounded-2xl">
			<div class="bg-gray-100 w-full min-h-[500px] max-w-sm rounded-2xl flex flex-col">
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>