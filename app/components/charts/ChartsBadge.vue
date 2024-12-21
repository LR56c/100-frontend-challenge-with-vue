<script setup
	lang="ts">
interface ChartsBadgeProps {
	label: string
}

defineProps<ChartsBadgeProps>()
</script>

<template>
	<button class="flex items-center justify-center bg-transparent hover:bg-gray-100 rounded-2xl py-1 px-2 text-center text-black font-semibold">
		{{ label }}
	</button>
</template>

<style scoped>

</style>