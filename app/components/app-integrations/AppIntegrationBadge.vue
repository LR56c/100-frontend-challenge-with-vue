<script setup
	lang="ts">
interface AppIntegrationBadgeProps {
	label: string
}

defineProps<AppIntegrationBadgeProps>()
</script>

<template>
<button class="flex text-sm w-auto py-0.5 px-2 rounded-2xl items-center justify-center bg-purple-200 data-[selected=true]:bg-purple-600 data-[selected=true]:text-white">
	{{ label }}
</button>
</template>

<style scoped>

</style>