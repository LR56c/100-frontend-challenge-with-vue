<script setup
	lang="ts">
interface ImageCollectionGalleryProps {
	images: string[]
}

defineProps<ImageCollectionGalleryProps>()
</script>

<template>
	<div v-if="images.length >= 3"
		class="flex gap-1">
		<img class="rounded-l-2xl w-full h-full object-cover object-center basis-[50%]"
			:src="images[0]"/>
		<div class="flex flex-col gap-1 basis-[50%]">
		<img class="rounded-tr-2xl aspect-square w-full h-full object-cover object-center basis-[50%]"
				:src="images[1]"/>
		<img class="rounded-br-2xl aspect-square w-full h-full object-cover object-center basis-[50%]"
				:src="images[2]"/>
		</div>
	</div>
</template>

<style scoped>

</style>