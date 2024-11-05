<script setup
	lang="ts">
interface BillingPageOwnedPlanCardProps {
	label: string
	price: string
}

defineProps<BillingPageOwnedPlanCardProps>()
const emit = defineEmits<{
	cancelClicked : [string]
}>()
</script>

<template>
	<div class="relative flex flex-col bg-blue-100 border border-blue-300 rounded-2xl p-3 text-black justify-between w-80 h-[100px]">
		<div class="absolute w-5 h-5 bg-blue-400 rounded-full -top-2 -right-2 flex items-center justify-center">
			<Icon class="text-white" name="material-symbols-check-rounded"/>
		</div>
		<div class="flex justify-between items-center">
			<div class="font-bold text-lg">{{ label }}</div>
			<div class="font-bold">{{ price }}<span class="font-medium text-gray-500">/month</span></div>
		</div>
		<button @click="emit('cancelClicked', label)"
			class="text-sm w-44 py-2 bg-blue-100 border border-blue-300 flex items-center justify-center text-blue-400 font-semibold rounded-2xl">Cancel Subscription</button>
	</div>
</template>

<style scoped>

</style>