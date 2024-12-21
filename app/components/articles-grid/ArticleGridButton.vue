<script setup
	lang="ts">
interface ArticleGridButtonProps {
	label : string
}

defineProps<ArticleGridButtonProps>()
</script>

<template>
<button class="flex items-center justify-center py-1 px-4 w-full font-semibold text-white gap-2">
	<span>{{ label }}</span>
	<Icon name="material-symbols-arrow-forward-rounded"/>
</button>
</template>

<style scoped>

</style>