<script setup
	lang="ts">


interface TextInputProps {
	label: string
}

defineProps<TextInputProps>()

const value = defineModel<string>( {
	default: ''
} )
</script>

<template>
	<div
		class="w-full flex flex-col gap-2">
		<label class="font-medium">{{ label }}</label>
		<input
			v-model="value"
			:placeholder="`Enter the ${label.toLowerCase()}`"
			class="placeholder:text-gray-500 bg-gray-100 rounded-2xl px-3 py-2"
			type="text"/>
	</div>
</template>

<style scoped>

</style>
