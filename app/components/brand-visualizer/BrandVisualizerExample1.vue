<script setup
	lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '~/lib/utils'

interface BrandVisualizerExample1Props {
	class?: HTMLAttributes['class']
}
const color = defineModel<string>()
const props = defineProps<BrandVisualizerExample1Props>()
</script>

<template>
<div :class="cn('bg-white shadow-lg rounded-2xl w-full flex flex-col',props.class)">
	<div class="py-2 px-4">
		<brand-visualizer-example-top-bar></brand-visualizer-example-top-bar>
	</div>
	<hr/>
	<div class="py-2 px-4 h-60 flex items-center justify-center">
		<div class="flex py-2 flex-col border border-gray-300 rounded-2xl">
			<div class="mx-2 mb-2 w-12 h-2 rounded-2xl bg-gray-300"></div>
			<hr/>
			<div class="m-2 w-8 h-2 rounded-2xl bg-black"></div>
			<input disabled
				class="rounded-2xl border h-4 w-32 mx-2"/>
		</div>
	</div>
	<hr/>
	<div class="py-2 px-4">
		<button class="w-full bg-indigo-700 py-4 rounded-2xl"></button>
	</div>
</div>
</template>

<style scoped>
input {
	border-color: v-bind(color);
}
button {
	background-color: v-bind(color);
}
</style>
