<script setup
	lang="ts">
import type { HTMLAttributes } from 'vue'
import BrandVisualizerExampleTopBar
	from '~/components/brand-visualizer/BrandVisualizerExampleTopBar.vue'
import { cn } from '~/lib/utils'

interface BrandVisualizerExample2Props {
	class?: HTMLAttributes['class']
}
const color = defineModel<string>()
const props = defineProps<BrandVisualizerExample2Props>()
</script>

<template>
	<div :class="cn('bg-white shadow-lg rounded-2xl w-full flex flex-col', props.class)">
		<div class="py-2 px-4">
			<brand-visualizer-example-top-bar></brand-visualizer-example-top-bar>
		</div>
		<hr/>
		<div class="py-2 px-4 h-60 flex flex-col items-center justify-center gap-2">
			<div class="flex items-center justify-center border border-sync rounded-full p-2">
				<div class="flex items-center justify-center button-sync rounded-full p-1">
			<Icon class="text-white" name="material-symbols-check-rounded"/>
				</div>
			</div>
			<div class="w-8 h-4 rounded-2xl bg-black"></div>
			<div class="w-16 h-2 rounded-2xl bg-gray-300"></div>

		</div>
		<hr/>
		<div class="py-2 px-4 flex gap-2">
			<button class="w-full bg-gray-300 py-4 rounded-2xl"></button>
			<button class="w-full button-sync py-4 rounded-2xl"></button>
		</div>
	</div>
</template>

<style scoped>
.border-sync {
	border-color: v-bind(color);
}
.button-sync {
	background-color: v-bind(color);
}
</style>
