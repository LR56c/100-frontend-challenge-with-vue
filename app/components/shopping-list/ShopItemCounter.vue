<script setup
	lang="ts">

const model = defineModel<number>( {
	default: 1
} )

const changeCount = ( value: number ) => {
	model.value += value
}
</script>

<template>
	<div class="flex gap-2">
		<button @click="changeCount(-1)"
			class="flex pb-0.5 items-center justify-center rounded-2xl bg-gray-200 w-6 h-6">
			-
		</button>
		<div>{{ model }}</div>
		<button @click="changeCount(1)"
			class="flex pb-0.5 items-center justify-center rounded-2xl bg-gray-200 w-6 h-6">
			+
		</button>
	</div>
</template>

<style scoped>

</style>
