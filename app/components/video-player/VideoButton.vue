<script setup
	lang="ts">
interface VideoButtonProps {
	icon?: string
	label : string
}

defineProps<VideoButtonProps>()
const emit = defineEmits<{
	clicked : [void]
}>()
</script>

<template>
	<button @click="emit('clicked')"
		class="w-fit flex p-2 gap-1 items-center bg-gray-600 justify-center rounded-2xl">
		<Icon v-if="icon"
			size="20"
			:name="icon"/>
		<span>{{ label }}</span>
	</button>
</template>

<style scoped>

</style>
