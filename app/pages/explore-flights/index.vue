<script setup
	lang="ts">
import ExploreCarsSearch
	from '~/components/explore-flights/ExploreCarsSearch.vue'
import ExploreFlightsSearch
	from '~/components/explore-flights/ExploreFlightsSearch.vue'
import ExploreHotelsSearch
	from '~/components/explore-flights/ExploreHotelsSearch.vue'

const exploreTypeSelected = ref( 'Flight' )

type Category = {
	name: string,
	component: any,
	icon: string
}
const categoryMap = new Map<string, Category>( [
	[ 'Flight', {
		name     : 'Flight',
		component: ExploreFlightsSearch,
		icon     : 'mdi-airplane'
	} ],
	[ 'Hotel', {
		name     : 'Hotel',
		component: ExploreHotelsSearch,
		icon     : 'ri-hotel-fill'
	} ],
	[ 'Car', {
		name     : 'Rent a car',
		component: ExploreCarsSearch,
		icon     : 'material-symbols-directions-car-rounded'
	} ]
] )

const currentCategoryComponent = computed( () => {
	return categoryMap.get( exploreTypeSelected.value )?.component
} )
</script>

<template>
	<div class="bg-[url('/cloud.avif')] bg-center bg-cover relative w-screen h-screen flex flex-col items-center justify-center">
		<div class="relative flex flex-col items-start justify-center">
			<div class="flex w-fit border-b">
				<div
					v-for="([key,value], i) in categoryMap"
					@click="exploreTypeSelected = key"
					:key="key"
					:class="[exploreTypeSelected === key ? 'bg-indigo-700 text-white' : 'cursor-pointer bg-white text-black hover:bg-gray-300',
					i === 0 ? 'rounded-tl-2xl' : '',
					i === categoryMap.size - 1 ? 'rounded-tr-2xl' : '']"
					class="flex gap-1 items-center text-sm py-2 px-4">
					<Icon class="h-5"
						:name="value.icon"/>
					<div>{{ value.name }}</div>
				</div>
			</div>
			<div
				class="z-10 bg-white p-4 min-w-[800px] h-full max-w-xl rounded-r-2xl rounded-b-2xl flex flex-col">
				<div v-if="currentCategoryComponent"
					class="flex flex-col w-full h-full gap-4">
					<div class="font-bold text-lg">Discover your next dream destination
					</div>
					<component :is="currentCategoryComponent"></component>
				</div>
				<div v-else>Seleccione una categoria</div>
			</div>
			<div id="tp">
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>
