<script setup
	lang="ts">

interface Props {
	minValue: number,
	maxValue: number
}

const MIN_VALUE                               = 12
const { minValue = MIN_VALUE, maxValue = 32 } = defineProps<Props>()

const model = defineModel<number>( {
	default: MIN_VALUE
} )

</script>

<template>
	<div class="flex flex-col gap-2">
		<div class="w-full flex justify-between">

			<label for="price-range"
				class="block uppercase">Character Length</label>
			<span class="font-bold text-fuchsia-500">{{ model }}</span>
		</div>
		<div class="rounded-2xl flex items-center bg-purple-950/50 px-4 py-2 gap-4">
			<span id="minPrice">{{ minValue }}</span>
			<input type="range"
				id="price-range"
				class="w-full accent-fuchsia-500"
				:min="minValue"
				:max="maxValue"
				v-model.number="model"/>
			<span id="maxPrice">{{ maxValue }}</span>
		</div>
	</div>
</template>

<style scoped>
</style>
