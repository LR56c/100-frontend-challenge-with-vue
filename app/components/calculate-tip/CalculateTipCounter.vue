<script setup
	lang="ts">
import {
	NumberFieldDecrement,
	NumberFieldIncrement,
	NumberFieldInput,
	NumberFieldRoot
} from 'radix-vue'

interface CalculateTipCounterProps {
	label?: string
}

defineProps<CalculateTipCounterProps>()

const valueModel = defineModel( {
	default: 1
} )
</script>

<template>
	<div class="flex flex-col w-full gap-2">
		<label v-if="label" class="font-bold text-lg">{{ label }}</label>
		<NumberFieldRoot
			v-model="valueModel"
			id="tip-counter"
			:min="1"
		>
			<div class="px-2 h-8 text-black gap-2 w-full text-sm flex items-center border border-gray-400 bg-gray-100 rounded-2xl">
				<NumberFieldDecrement class="flex items-center disabled:opacity-20">
					<Icon class="h-6"
						size="20"
						name="radix-icons-minus"/>
				</NumberFieldDecrement>
				<NumberFieldInput class="outline-none focus:border-green-600 focus:border bg-transparent text-center w-full tabular-nums  p-1"/>
				<NumberFieldIncrement class="flex items-center disabled:opacity-20">
					<Icon class="h-6"
						size="20"
						name="radix-icons-plus"/>
				</NumberFieldIncrement>
			</div>
		</NumberFieldRoot>
	</div>
</template>

<style scoped>

</style>