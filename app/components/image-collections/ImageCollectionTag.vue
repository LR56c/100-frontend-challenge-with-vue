<script setup
	lang="ts">
import type { ImageTag } from '~/components/image-collections/useImageCollections'

interface ImageCollectionTagProps {
	tag : ImageTag
}

defineProps<ImageCollectionTagProps>()
</script>

<template>
<div class="bg-gray-200 w-fit h-fit rounded py-0.5 px-1 text-sm font-light capitalize">
	{{ tag.name }}
</div>
</template>

<style scoped>

</style>