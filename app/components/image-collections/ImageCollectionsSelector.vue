<script setup
	lang="ts">
interface ImageCollectionsSelectorProps {
	sections : string[]
	initialSection: string
}

const props = defineProps<ImageCollectionsSelectorProps>()

const currentSection = ref<string>(props.initialSection)

const emit = defineEmits<{
	changeSection : [string]
}>()

const changeSelector = ( section: string ) => {
	currentSection.value = section
	emit( 'changeSection', section )
}
</script>

<template>
<div class="flex w-fit items-center bg-gray-200 rounded-2xl p-2">
	<image-collections-selector-item
		v-for="section in props.sections"
		:key="section"
		:data-selected="section === currentSection"
		icon="material-symbols-image-rounded"
		@click="changeSelector(section)"
		:label="section"></image-collections-selector-item>
</div>
</template>

<style scoped>

</style>