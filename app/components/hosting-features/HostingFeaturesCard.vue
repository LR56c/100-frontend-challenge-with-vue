<script setup
	lang="ts">
import type { HTMLAttributes } from 'vue'

interface HostingFeaturesCardProps {
	class?: HTMLAttributes['class']
	icon: string,
	title: string,
	description: string,
	link: string
}
defineProps<HostingFeaturesCardProps>()
</script>

<template>
	<div class="w-56 h-56 rounded-2xl border bg-white gradient-selected hover:border-0 border-gray-400 flex flex-col p-4 justify-between group">
		<div class="basis-[30%] w-16 h-16 border bg-white group-hover:border-0 border-black rounded-2xl flex items-center justify-center">
			<Icon size="40" class="h-10" :name="icon"/>
		</div>
		<div class="group-hover:text-white font-bold basis-[5%]">{{ title }}</div>
		<div class="group-hover:text-pink-300/60 text-gray-700 font-semibold text-xs basis-[30%]">{{ description }}</div>
		<NuxtLink :to="link" external class="group-hover:text-white text-sm font-semibold">Learn more</NuxtLink>
	</div>
</template>

<style scoped>
.gradient-selected:hover{
	background-size: 100% 100%;
	background-position: 0px 0px;
	background-image: linear-gradient(130deg, #6c2be7 0%, #d309fd 100%);
}
</style>
