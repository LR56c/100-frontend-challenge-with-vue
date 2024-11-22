<script setup
	lang="ts">
import ImageCollectionGallery
	from '~/components/image-collections/ImageCollectionGallery.vue'
import ImageCollectionTag
	from '~/components/image-collections/ImageCollectionTag.vue'
import type { Collection } from '~/components/image-collections/useImageCollections'

interface ImageCollectionsCardProps {
	item : Collection
}

const props = defineProps<ImageCollectionsCardProps>()
</script>

<template>
<NuxtLink :to="`/image-collections/${item.createdBy}/${item.id}`" class="cursor-pointer rounded-2xl p-2 hover:bg-gray-300 flex flex-col gap-0.5">
	<image-collection-gallery class="w-[260px] h-[200px]" :images="item.images"></image-collection-gallery>
	<span class="font-semibold text-lg">{{ item.categoryTitle }}</span>
	<div class="flex justify-between w-full">
		<div>
			<span class="font-light text-sm text-gray-500">created by </span>
			<span class="underline text-sm">{{ item.createdBy }}</span>
		</div>
		<div class="flex gap-1 items-center">
			<Icon class="h-4 text-blue-500" size="16" name="material-symbols-image-rounded"/>
			<span>{{ item.images.length }}</span>
		</div>
	</div>
	<div class="flex gap-1 py-1">
		<image-collection-tag
			v-for="tag in item.tags"
			:key="tag.name"
			:tag></image-collection-tag>
	</div>
</NuxtLink>
</template>

<style scoped>

</style>