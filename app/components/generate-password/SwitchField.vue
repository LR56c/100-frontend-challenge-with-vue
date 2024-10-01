<script setup
	lang="ts">

interface Props {
	label: string
}

const { label } = defineProps<Props>()
const model     = defineModel<boolean>( {
	default: false
} )

</script>

<template>
	<label class="inline-flex cursor-pointer p-2 justify-between bg-purple-950/50 rounded-2xl">
		<span class="ms-3 text-sm font-medium text-white">{{ label }}</span>
		<input type="checkbox"
			v-model="model"
			class="sr-only peer">
		<div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-fuchsia-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all peer-checked:bg-fuchsia-500"></div>
	</label>
</template>

<style scoped>

</style>
