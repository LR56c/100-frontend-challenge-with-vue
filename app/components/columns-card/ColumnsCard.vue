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
<div :class="[backgroundColor, 'flex flex-col p-4 gap-2']">
	<span>{{ title }}</span>
</div>
</template>

<style scoped>

</style>