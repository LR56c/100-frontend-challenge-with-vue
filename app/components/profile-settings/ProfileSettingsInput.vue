<script setup
	lang="ts">
interface ProfileSettingsInputProps {
	label : string
}

defineProps<ProfileSettingsInputProps>()

const modelValue = defineModel<string>()
</script>

<template>
	<div class="relative h-fit w-fit">
		<input
			type="text"
			id="floating_outlined"
			v-model="modelValue"
			class="h-9 ps-3 w-full text-sm dark:text-gray-100 text-gray-900 border border-gray-400 rounded-2xl bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-[#0600fe] dark:focus:border-indigo-400 peer"/>
		<label for="floating_outlined"
			class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-1 z-10 origin-[0] dark:bg-gray-950 bg-gray-100 px-2 peer-focus:px-2 peer-focus:text-[#0600fe] dark:peer-focus:text-indigo-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-2">
			{{ label }}</label>
	</div>
</template>

<style scoped>

</style>