<script setup
	lang="ts">
interface QuizappCardProps {
	quiz : string
	label: string
}

defineProps<QuizappCardProps>()
</script>

<template>
<button class="flex data-[selected=true]:bg-[#5550e0] dark:data-[selected=true]:bg-[#5550e0] dark:bg-gray-900 bg-gray-300 p-2 gap-2 rounded">
	<div class="uppercase font-semibold rounded bg-white w-6 h-6 flex items-center justify-center">{{ label }}</div>
	<span class="text-white">{{ quiz }}</span>
</button>
</template>

<style scoped>

</style>