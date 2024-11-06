<script setup
	lang="ts">
interface ProgressBarCardProps {
	position : number
}

defineProps<ProgressBarCardProps>()
</script>

<template>
<div class="relative bg-gray-100 w-80 p-4 h-24 rounded-2xl shadow-lg flex items-center justify-center">
	<div class="text-sm absolute -top-2 -left-2 rounded-full font-semibold w-6 h-6 bg-blue-300 flex items-center justify-center">
		{{ position }}
	</div>
	<slot/>
</div>
</template>

<style scoped>

</style>