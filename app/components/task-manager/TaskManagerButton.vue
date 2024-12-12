<script setup
	lang="ts">
interface TaskManagerButtonProps {
	label: string
	icon?:string
}

defineProps<TaskManagerButtonProps>()
</script>

<template>
	<button class="bg-[#40c045] w-full py-2 rounded-2xl text-white flex justify-center items-center">
		<Icon v-if="icon" size="20" :name="icon"/>
		<span>{{ label }}</span>
	</button>
</template>

<style scoped>

</style>