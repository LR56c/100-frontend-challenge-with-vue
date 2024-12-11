<script setup
	lang="ts">
import SearchFilterCard from '~/components/search-filters/SearchFilterCard.vue'
import SearchFilterSaleTab
	from '~/components/search-filters/SearchFilterSaleTab.vue'
import SearchFilterTab from '~/components/search-filters/SearchFilterTab.vue'
import { useSearchFilters } from '~/components/search-filters/useSearchFilters'

const store = useSearchFilters()

export type Tab = {
	label: string
	component: any
}
const tabs: Tab[] = [
	{
		label    : 'Rent',
		component: false
	},
	{
		label    : 'Sale',
		component: SearchFilterSaleTab
	}
]
const selectedTab = ref<Tab>( tabs[1]! )
</script>

<template>
	<div class="w-screen h-screen flex items-center gap-8 justify-center bg-[#cbc5b9]">
		<div class="max-w-md w-full bg-gray-100 rounded-2xl shadow-lg p-4 flex flex-col gap-4 items-center">
			<div class="flex w-full justify-between items-center">
				<span class="text-xl font-semibold">Filters</span>
				<button @click="store.clear" class="text-sm font-semibold text-gray-500">Clear all</button>
			</div>
			<search-filter-tab v-model="selectedTab"
				:tabs></search-filter-tab>
			<component :is="selectedTab.component"></component>
		</div>
		<div v-if="store.search.length"
			class="flex flex-col w-[448px] bg-gray-100 p-2 gap-2 rounded-2xl">
			<span class="text-lg font-semibold">Search Results</span>
			<search-filter-card
				v-for="result in store.search"
				:key="result.id"
				:result="result"
			></search-filter-card>
		</div>
	</div>
</template>

<style scoped>

</style>