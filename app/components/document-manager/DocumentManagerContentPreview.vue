<script setup
	lang="ts">
interface DocumentManagerContentPreviewProps {
	title : string
	content : string
}

defineProps<DocumentManagerContentPreviewProps>()
const emit = defineEmits<{
	edit : [void]
}>()
</script>

<template>
<div class="h-full w-full flex flex-col gap-2 relative overflow-y-scroll">
	<button @click="emit('edit')" class="absolute top-0 right-0 w-5 h-5 flex items-center justify-center">
		<Icon class="text-gray-400" size="16" name="material-symbols-edit"/>
	</button>
	<div class="font-bold text-2xl">{{ title }}</div>
	<div class="h-[360px] text-balance pr-2 overflow-y-scroll font-semibold text-sm">{{ content }}</div>
</div>
</template>

<style scoped>

</style>