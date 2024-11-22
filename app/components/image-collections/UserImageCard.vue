<script setup
	lang="ts">
import ImageCollectionGallery
	from '~/components/image-collections/ImageCollectionGallery.vue'
import ImageCollectionTag
	from '~/components/image-collections/ImageCollectionTag.vue'
import type { Collection } from '~/components/image-collections/useImageCollections'

interface UserImageCardProps {
	item : Collection
}

defineProps<UserImageCardProps>()
</script>

<template>
<div class="w-full rounded-2xl justify-between flex gap-2 p-2">
	<div class="flex flex-col justify-between">
		<img class="object-center object-cover w-16 h-16 rounded-2xl" :src="item.avatar"/>
		<span>{{ item.createdBy }}</span>
		<div>
		<Icon class="h-4 text-blue-500" size="16" name="material-symbols-image-rounded"/>
		<span>{{ item.images.length }}</span>
		</div>
	</div>
	<div class="flex flex-wrap gap-2">
			<image-collection-tag
				v-for="tag in item.tags"
				:key="tag.name"
				:tag></image-collection-tag>
		</div>
	<image-collection-gallery class="w-[160px] h-[100px]" :images="item.images"></image-collection-gallery>
</div>
</template>

<style scoped>

</style>