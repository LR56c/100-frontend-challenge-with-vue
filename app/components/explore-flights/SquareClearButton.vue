<script setup
	lang="ts">
const emit = defineEmits<{
	clear : [void]
}>()
</script>

<template>
	<button @click="emit('clear')"
		class="w-10 h-10 bg-white rounded-2xl flex items-center justify-center">
		<Icon class="h-5"
			size="20"
			name="material-symbols-close-small-rounded"/>
	</button>
</template>

<style scoped>

</style>
