<script setup
	lang="ts">

import MySwitch from '~/components/shared/MySwitch.vue'

const annually = ref(true)

const activeClass = 'font-semibold text-black'
const inactiveClass = 'font-semibold text-gray-400'
const monthlyClass = computed(() => {
	return annually.value ? inactiveClass : activeClass
})

const annuallyClass = computed(() => {
	return annually.value ? activeClass : inactiveClass
})
</script>

<template>
<div class="p-4 custom-shadow w-full rounded-2xl flex justify-between items-center bg-gray-100">
	<div class="flex flex-col gap-1">
		<span class="font-semibold">Subcription Term</span>
		<div class="flex items-center">
			<span :class="[monthlyClass]" class="text-sm">Monthly</span>
			<my-switch v-model="annually" input-class="peer-focus:ring-[#226b1c]/50 peer-checked:bg-[#226b1c]"></my-switch>
			<span :class="[annuallyClass]" class="text-sm">Annually</span>
		</div>
		<span class="px-2 py-0.5 bg-[#cdfaca]">Save price with annually</span>
	</div>
	<div class="flex flex-col items-center justify-center h-full gap-4">
		<span class="text-black/80">Number of Agents</span>
		<payment-plan-number-input></payment-plan-number-input>
	</div>
</div>
</template>

<style scoped>
.custom-shadow {
	box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}
</style>