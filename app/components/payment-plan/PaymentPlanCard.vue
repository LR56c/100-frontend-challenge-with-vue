<script setup
	lang="ts">
const formatter = new Intl.NumberFormat( 'es-US', {
	style                : 'currency',
	currency             : 'USD',
	minimumFractionDigits: 0
} )

interface PaymentPlanCardProps {
	title: string
	price : number
}

defineProps<PaymentPlanCardProps>()
</script>

<template>
<div class="w-full gap-2 p-2 items-center custom-shadow rounded-2xl flex flex-col bg-gray-100">
	<span class="font-semibold">{{ title }}</span>
	<span class="text-xl font-bold">{{ formatter.format(price) }}</span>
	<span class="text-xs text-gray-500">per agent/per month</span>
	<button class="w-full text-sm py-1 rounded-2xl border border-black flex items-center justify-center hover:border-0 hover:bg-[#226b1c] hover:text-white">Select a plan</button>
</div>
</template>

<style scoped>
.custom-shadow {
	box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}
</style>