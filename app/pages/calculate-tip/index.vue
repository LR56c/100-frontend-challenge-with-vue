<script setup
	lang="ts">
import CalculateTipLabel from '~/components/calculate-tip/CalculateTipLabel.vue'

const values = [0, 10, 15, 20 ]
const total  = ref( 0 )
const tip    = ref( 0 )
const split  = ref( 1 )

const tipValue = computed( () => {
	return ( total.value * tip.value ) / 100
} )

const totalValue = computed( () => {
	return total.value + tipValue.value
} )

const perPersonValue = computed( () => {
	return totalValue.value / split.value
} )

const reset = () => {
	total.value = 0
	tip.value   = 0
	split.value = 1
}
</script>

<template>
	<div class="w-screen h-screen bg-[#95e2b8] flex flex-col gap-4 items-center justify-center">
		<div class="w-full max-w-2xl bg-gray-100 h-fit rounded-2xl p-4 my-shadow flex justify-between gap-4">
			<div class="flex w-full rounded-2xl flex-col justify-between">
				<label class="font-bold text-xl pb-4">Calculate Tip</label>
				<calculate-tip-input v-model="total"
					label="Bill Total"></calculate-tip-input>
				<calculate-tip-selectors v-model="tip"
					label="Choose a tip"
					:values></calculate-tip-selectors>
				<calculate-tip-counter v-model="split"
					label="Split by"></calculate-tip-counter>
			</div>
			<div class="bg-[#2a8b56] flex w-full rounded-2xl p-4 flex-col justify-between gap-6">
				<div class="flex flex-col justify-between gap-2">
					<calculate-tip-label label="Base"
						:value="total"></calculate-tip-label>
					<calculate-tip-label label="Tip"
						:value="tipValue"></calculate-tip-label>
					<calculate-tip-label label="Per person"
						:value="perPersonValue"></calculate-tip-label>
					<hr class="border-white/50"/>
					<calculate-tip-label label="Total"
						:value="totalValue"></calculate-tip-label>
				</div>
				<button class="focus:border focus:border-green-400 outline-none w-full text-center bg-[#227046] rounded-2xl py-1.5 text-white/75"
				@click="reset">
					RESET
				</button>
			</div>
		</div>
	</div>
</template>

<style scoped>
.my-shadow {
	box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1);
}
</style>