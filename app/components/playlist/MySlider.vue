<script setup
	lang="ts">

interface Props {
	minValue: number,
	maxValue: number
}

const MIN_VALUE                               = 0
const { minValue = MIN_VALUE, maxValue = 100 } = defineProps<Props>()

const model = defineModel<number>( {
	default: MIN_VALUE
} )
</script>

<template>
			<input type="range"
				id="price-range"
				disabled
				class="w-full"
				:min="minValue"
				:max="maxValue"
				v-model.number="model"/>
</template>

<style scoped>
</style>
