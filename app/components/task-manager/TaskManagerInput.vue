<script setup
	lang="ts">
interface TaskManagerInputProps {
	placeholder: string
	label?: string
}

const props = defineProps<TaskManagerInputProps>()

const inputValue = defineModel( {
	default: ''
} )
</script>

<template>
	<div class="w-full text-white flex flex-col gap-1">
		<label v-if="label">{{ label }}</label>
		<input type="text"
			required
			v-model="inputValue"
			class="block h-10 w-full p-2 placeholder:text-[#727272] text-sm text-white rounded focus:ring-white focus:border-white bg-[#2c2c2c] outline-none"
			:placeholder/>
	</div>
</template>

<style scoped>

</style>