<script setup
	lang="ts">
interface ImageCollectionsSelectorItemProps {
	icon : string
	label : string
}

const props = defineProps<ImageCollectionsSelectorItemProps>()
</script>

<template>
<button class="flex items-center py-1 px-4 gap-1 data-[selected=true]:bg-blue-600 data-[selected=true]:text-white data-[selected=true]:rounded-2xl bg-transparent text-zinc-500">
	<Icon size="20" :name="icon"/>
	<span class="capitalize">{{ label }}</span>
</button>
</template>

<style scoped>

</style>