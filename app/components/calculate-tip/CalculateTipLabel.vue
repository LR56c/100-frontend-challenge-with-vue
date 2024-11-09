<script setup
	lang="ts">
const formatter = new Intl.NumberFormat( 'es-US', {
	style                : 'currency',
	currency             : 'USD',
	minimumFractionDigits: 2
} )

interface CalculateTipLabelProps {
	label: string
	value : number
}

defineProps<CalculateTipLabelProps>()
</script>

<template>
<div class="flex items-center w-full justify-between">
	<span class="text-white/75 font-semibold">{{ label }}</span>
	<span class="text-xl font-semibold text-white">{{ formatter.format(value) }}</span>
</div>
</template>

<style scoped>

</style>