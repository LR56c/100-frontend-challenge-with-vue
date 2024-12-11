<script setup
	lang="ts">

import MyComboBox, { type MyComboBoxType } from '~/components/job-board/MyComboBox.vue'

const search = defineModel<string>( 'search',{
	default: ''
} )

const milesSelected = defineModel<string>('miles', {
	default: ''
} )

const values : MyComboBoxType[] = [
	{ value: '5' },
	{ value: '10' },
	{ value: '15' },
	{ value: '20' },
	{ value: '25' },
	{ value: '30' },
	{ value: '35' },
	{ value: '40' },
	{ value: '45' },
	{ value: '50' },
]
</script>

<template>
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
				placeholder="Enter a search location"/>
		</div>
		<my-combo-box :values
			v-model="milesSelected"
			class="basis-[40%] w-40 bg-white p-2 rounded-r-2xl"
			placeholder="+ 0 miles"></my-combo-box>
	</div>
</template>

<style scoped>

</style>