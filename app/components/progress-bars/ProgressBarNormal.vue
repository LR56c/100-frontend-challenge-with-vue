<script setup
	lang="ts">
import MyProgress from '~/components/shared/MyProgress.vue'

const progressValue = defineModel( {
	default: 0
} )
</script>

<template>
<div class="w-full flex flex-col items-center justify-center gap-2">
	<span class="text-sm font-semibold">{{ progressValue }}%</span>
	<my-progress class="h-3 bg-gray-200" class-indicator="bg-[#3734ff]" :max="100" :model-value="progressValue"></my-progress>
</div>
</template>

<style scoped>

</style>