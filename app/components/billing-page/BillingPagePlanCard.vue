<script setup
	lang="ts">
interface BillingPagePlanCardProps {
	label: string
	price: string
}

defineProps<BillingPagePlanCardProps>()
const emit = defineEmits<{
	upgradeClicked : [void]
}>()
</script>

<template>

<div class="flex flex-col bg-indigo-700 rounded-2xl p-3 text-white justify-between w-80 h-[100px]">
	<div class="flex justify-between items-center">
		<div class="font-bold text-lg">{{ label }}</div>
		<div class="font-bold">{{ price }}<span class="font-medium text-gray-500">/month</span></div>
	</div>
	<div class="flex items-center gap-2">
		<button @click="emit('upgradeClicked')"
			class="text-sm font-semibold text-indigo-700 bg-white rounded-2xl py-2 w-24">Upgrade</button>
		<div class="text-xs">Learn more  about this plan</div>
	</div>
</div>
</template>

<style scoped>

</style>