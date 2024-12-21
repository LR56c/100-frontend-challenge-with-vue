<script setup
	lang="ts">
interface MyDevicesLabelInfoProps {
	icon: string
	title:string
	label: string
}

defineProps<MyDevicesLabelInfoProps>()
</script>

<template>
<div class="flex w-44 flex-col justify-between bg-purple-100 rounded-2xl py-1 px-4">
	<Icon class="text-purple-600" :name="icon"/>
	<span class="font-semibold">{{ title }}</span>
	<span class="text-gray-400">{{ label }}</span>
</div>
</template>

<style scoped>

</style>