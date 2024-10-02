<script setup
	lang="ts">
import type { ImagePreviewProps } from '~/pages/images-preview/index.vue'

const images = defineModel<ImagePreviewProps[]>()
</script>

<template>
	<div class="w-full h-full no-scrollbar overflow-y-scroll flex flex-col">
		<div class="flex items-center gap-4 px-4 py-2 text-white"
			v-for="(item, index) in images"
			:class="index % 2 !== 0 ? 'bg-zinc-700' : ''"
		>
			<img
				:key="index"
				class="w-20 h-16 object-cover object-center rounded-2xl"
				:src="item.img"
				:alt="item.name"/>
			<div>{{ item.name }}</div>
		</div>
	</div>
</template>

<style scoped>

</style>
