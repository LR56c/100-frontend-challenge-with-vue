<script setup
	lang="ts">
const formatter = new Intl.NumberFormat( 'es-US', {
	style                : 'currency',
	currency             : 'USD',
	minimumFractionDigits: 2
} )

import {
	useBillingPagePlan
} from '~/components/billing-page/useBillingPagePlan'

const store = useBillingPagePlan()

const activePlan = computed( () => store.activePlan )

const changePlan = ( value: string ) => {
	store.setActivePlan( value )
}
const cancelPlan = ( value: string ) => {
	store.cancelPlan()
}
</script>

<template>
	<div class="flex flex-col gap-4">
		<div class="flex flex-col">
			<div class="font-semibold text-lg">Plan</div>
			<div class="text-gray-500 text-sm font-semibold">Decide what is best for you</div>
		</div>
		<div class="flex justify-between gap-4">
			<billing-page-owned-plan-card
				v-if="activePlan"
				:label="activePlan.name"
				:price="formatter.format(activePlan.price)"
				@cancel-clicked="cancelPlan"
			></billing-page-owned-plan-card>
			<template v-for="[key,plan] in store.plans"
				:key="key">
				<billing-page-plan-card
					v-if="key !== activePlan?.name"
					:label="plan.name"
					:price="formatter.format(plan.price)"
					@upgrade-clicked="changePlan(key)"
				></billing-page-plan-card>
			</template>
		</div>
	</div>
</template>

<style scoped>

</style>