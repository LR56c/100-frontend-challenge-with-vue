<script setup
	lang="ts">
import SearchFilterBadge
	from '~/components/search-filters/SearchFilterBadge.vue'
import SearchFilterInput
	from '~/components/search-filters/SearchFilterInput.vue'
import SearchFilterRangeInput
	from '~/components/search-filters/SearchFilterRangeInput.vue'
import
{
	useSearchFilters
} from '~/components/search-filters/useSearchFilters'

const store = useSearchFilters()

export type PropertySelect = {
	value: string
	enabled : boolean
}

const propertiesTypes: PropertySelect[] = ref( store.propertiesTypes.map( ( property ) => ( {
	value  : property,
	enabled: false
} ) ))

const propertiesSelected = computed( () => {
	return propertiesTypes.value.filter( ( property ) => property.enabled ).map( ( property ) => property.value )
})
const search             = ref( '' )
const miles              = ref( '' )
const price 						= ref( [20_000,200_000] )
const surface 						= ref( [0,200] )

store.clearHook.on( () => {
	propertiesTypes.value = propertiesTypes.value.map( ( property ) => ( {
		value  : property.value,
		enabled: false
	} ) )
	search.value = ''
	miles.value = ''
	price.value = [20_000,200_000]
	surface.value = [0,200]
})

const handleProperties = ( property: string ) => {
	const index = propertiesTypes.value.findIndex( ( p ) => p.value === property )
	propertiesTypes.value[index].enabled = !propertiesTypes.value[index].enabled
}

const handleShow = () => {
	store.filter(
		price.value[0],
		price.value[1],
		miles.value,
		search.value,
		propertiesSelected.value,
		surface.value[0],
		surface.value[1],
	)
}
</script>

<template>
	<div class="flex flex-col gap-4 w-full h-full">
		<search-filter-input v-model:miles="miles"
			v-model:search="search"></search-filter-input>
		<search-filter-range-input v-model="price" :max="200_000" type="price" label="Price"></search-filter-range-input>
		<div class="flex flex-col gap-4">
			<span class="font-semibold">Property Type</span>
			<div class="flex flex-wrap gap-2">
				<search-filter-badge
					v-for="badge in propertiesTypes"
					:key="badge.value"
					:property="badge"
					@click="handleProperties(badge.value)"></search-filter-badge>
			</div>
		</div>
		<search-filter-range-input v-model="surface" :max="200" type="surface" label="Property Size"></search-filter-range-input>
		<button @click="handleShow" class="bg-[#40c045] w-full flex items-center py-2 justify-center text-white font-semibold text-lg rounded-2xl">
			Show Results
		</button>
	</div>
</template>

<style scoped>

</style>