<script setup
	lang="ts">
interface ChartsIconButtonProps {
	icon :string
}

defineProps<ChartsIconButtonProps>()
</script>

<template>
<button class="rounded-full w-8 h-8 flex items-center justify-center p-1 text-gray-600 bg-transparent hover:bg-gray-100">
	<Icon size="20" :name="icon"/>
</button>
</template>

<style scoped>

</style>