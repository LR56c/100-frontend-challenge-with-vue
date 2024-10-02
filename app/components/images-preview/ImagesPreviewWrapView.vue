<script setup
	lang="ts">
import type { ImagePreviewProps } from '~/pages/images-preview/index.vue'

const images = defineModel<ImagePreviewProps[]>()
</script>

<template>
	<div class="w-full h-full items-center justify-center no-scrollbar overflow-y-scroll flex flex-wrap gap-4 p-4">
		<img v-for="(item, index) in images"
			:key="index"
			class="w-40 h-32 object-cover object-center rounded-2xl"
			:src="item.img"
			:alt="item.name"/>
	</div>
</template>

<style scoped>

</style>
