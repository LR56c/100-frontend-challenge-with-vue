<script setup
	lang="ts">
import type { Photo } from '~/components/image-collections/useImageCollections'

interface ImageCardProps {
	item : Photo
}

defineProps<ImageCardProps>()
</script>

<template>
<div class="relative flex flex-col gap-2 rounded-2xl group">
	<div class="group-hover:absolute hidden group-hover:flex items-end justify-center rounded-2xl bg-gradient-to-t from-black to-30% to-transparent w-full h-full">
	<span class="font-light text-sm text-gray-200">created by&nbsp;</span>
	<span class="underline text-sm text-gray-400">{{ item.createdBy }}</span>
	</div>
	<img class="object-center object-cover w-32 h-32 rounded-2xl" :src="item.image"/>
</div>
</template>

<style scoped>

</style>