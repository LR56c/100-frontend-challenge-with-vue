<script setup
	lang="ts">
const selectedRate = defineModel<number>()
const numberColorParser = ( rate: number ) => {
	switch ( rate ) {
		case 1:
			return 'bg-red-500'
		case 2:
			return 'bg-orange-500'
		case 3:
			return 'bg-yellow-500'
		case 4:
			return 'bg-lime-500'
		case 5:
			return 'bg-cyan-500'
		default:
			return 'bg-zinc-500'
	}
}

const rateSelected = ( rate: number ) => {
	selectedRate.value = rate
}
</script>

<template>
<div class="flex flex-col gap-2">
	<div class="flex w-full h-24 justify-between items-center">
	<user-satisfaction-rate-card
		v-for="rate in 5"
		:key="rate"
		@click="rateSelected(rate)"
		:data-selected="selectedRate === rate"
		:rate="rate"
		:class="numberColorParser(rate)"
	></user-satisfaction-rate-card>
	</div>
	<div class="flex w-full justify-between">
		<span class="text-zinc-500 text-sm">Very dissatisfied</span>
		<span class="text-zinc-500 text-sm">Very satisfied</span>
	</div>
</div>
</template>

<style scoped>

</style>