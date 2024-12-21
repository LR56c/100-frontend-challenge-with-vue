<script setup
	lang="ts">
interface TimeWidgetButtonProps {
	label?: string
	icon?: string
	disabled?: boolean
}

const props = defineProps<TimeWidgetButtonProps>()
</script>

<template>
<button :disabled class="disabled:bg-transparent disabled:opacity-50 disabled:cursor-not-allowed bg-gray-200 rounded hover:bg-gray-300 flex items-center justify-center p-0.5">
	<Icon v-if="icon" size="20" :name="icon"/>
	<span v-if="label">{{ label }}</span>
</button>
</template>

<style scoped>

</style>