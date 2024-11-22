<script setup
	lang="ts">
import ImageCollectionSection
	from '~/components/image-collections/ImageCollectionSection.vue'
import ImagePhotoSection
	from '~/components/image-collections/ImagePhotoSection.vue'
import ImageUserSection
	from '~/components/image-collections/ImageUserSection.vue'
import { useImageCollections } from '~/components/image-collections/useImageCollections'

export type SelectorType = {
	label: string
	component: any
}

const categorySearch = ref( 'Fitness' )
const store          = useImageCollections()

const sections = new Map<string, SelectorType>( [
	[ 'photos', {
		label    : 'photos',
		component: ImagePhotoSection
	} ],
	[ 'collections', {
		label    : 'collections',
		component: ImageCollectionSection
	} ],
	[ 'users', {
		label    : 'users',
		component: ImageUserSection
	} ]
] )

const sectionsLabels  = Array.from( sections.keys() )
const sectionSelector = ref( sections.get( 'collections' )! )
const changeSectionComponent = ( section: string ) => {
	sectionSelector.value = sections.get( section )!
}

onMounted( () => {
	store.updateCategoryUsers( categorySearch.value )
} )
</script>

<template>
	<div class="w-screen h-screen flex items-center justify-center bg-gray-200">
		<div class="bg-gray-100 w-[600px] h-full max-h-[750px] rounded-2xl flex flex-col p-4 shadow-lg gap-2">
			<image-collections-selector v-if="sectionSelector"
				:sections="sectionsLabels"
				@change-section="changeSectionComponent"
				:initial-section="sectionSelector.label"></image-collections-selector>
			<span class="text-2xl font-bold">{{ categorySearch }}</span>
			<div class="flex flex-wrap gap-2 justify-center">
				<component v-if="sectionSelector && store.userPhotos.length"
					:is="sectionSelector.component"/>
				<div v-else>
					There are no photos to display for this category
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>