<script setup
	lang="ts">
export interface ColumnsCardProps {
	title: string
	textColor : string
	backgroundColor : string
	icon : string
	content : string
}

defineProps<ColumnsCardProps>()
</script>

<template>
<div :class="[backgroundColor, 'flex flex-col px-4 py-8 gap-2 h-[500px]']">
	<Icon :class="[textColor, 'h-full']" size="40" :name="icon"/>
	<span class="text-3xl font-bold">{{ title }}</span>
	<span>{{ content}}</span>
	<div class="flex items-end h-full">
	<button class="flex w-fit items-end h-fit text-white bg-black rounded-2xl py-1 px-4">Learn More</button>
	</div>
</div>
</template>

<style scoped>

</style>