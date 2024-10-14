<script setup
	lang="ts">

import { useDashboardSubscription } from '~/components/dashboard/useDashboardSubscription'

const store = useDashboardSubscription()
const colorLevel = computed( () => {
	const subcription = store.subcription
	if ( subcription < 10 ) {
		return 'bg-red-500'
	}
	if ( subcription < 20 ) {
		return 'bg-yellow-600'
	}
	return 'bg-orange-500'
} )
</script>

<template>
	<div :class="['w-4 h-4 text-xs flex pr-0.5 rounded-2xl items-center justify-center', colorLevel]">
		{{ store.subcription }}
	</div>
</template>

<style scoped>

</style>
