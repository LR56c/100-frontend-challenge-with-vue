<script setup
	lang="ts">

import MyComboBox, { type MyComboBoxType } from '~/components/job-board/MyComboBox.vue'
import { useJobBoard } from '~/components/job-board/useJobBoard'

export interface JobSearchEvent {
	searchTerm: string
	location: string
}

const emit = defineEmits<{
	search: [ JobSearchEvent ]
}>()

const onLocationSearch = ( value: string ) => {
	console.log( 'location: ', value )
	location.value = value
}
const search           = ref( '' )
const location         = ref( '' )

const fireSearch = () => {
	emit( 'search', {
		searchTerm: search.value,
		location  : location.value
	} )
}

const store = useJobBoard()

const locationValues: MyComboBoxType[] = store.getJobLocations()
                                              .map( ( location ) => {
	                                              return { value: location }
                                              } )
</script>

<template>
	<div class="w-full flex gap-4">
		<div class="w-full flex items-center">
			<label for="default-search"
				class="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
			<div class="basis-[70%] w-full relative">
				<div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
					<Icon class="text-gray-400"
						name="material-symbols-search"/>
				</div>
				<input type="search"
					required
					id="default-search"
					v-model="search"
					class="block w-full p-2.5 ps-8 text-sm text-gray-900 border-r rounded-l-2xl focus:ring-blue-500 focus:border-blue-500"
					placeholder="Find a job"/>
			</div>
			<my-combo-box
				class="basis-[40%] w-40 bg-white p-2 rounded-r-2xl"
				placeholder="Localization"
				icon="material-symbols-location-on-outline-rounded"
				:values="locationValues"
				@select="onLocationSearch"
			></my-combo-box>
		</div>
		<button @click="fireSearch"
			class="bg-pink-500 text-sm text-white rounded-full px-4 py-1">Search
		</button>
	</div>
</template>

<style scoped>

</style>
