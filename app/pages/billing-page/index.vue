<script setup
	lang="ts">
import BillingPageHistoryContent
	from '~/components/billing-page/BillingPageHistoryContent.vue'
import BillingPagePaymentContent
	from '~/components/billing-page/BillingPagePaymentContent.vue'
import BillingPagePlanContent
	from '~/components/billing-page/BillingPagePlanContent.vue'

export type SelectorType = {
	label: string
	component: any
}

const components = new Map<string, SelectorType>( [
	[ 'Plan', {
		label    : 'Plan',
		component: BillingPagePlanContent
	} ],
	[ 'Payment Method', {
		label    : 'Payment Method',
		component: BillingPagePaymentContent
	} ],
	[ 'Billing History', {
		label    : 'Billing History',
		component: BillingPageHistoryContent
	} ]
] )

const selectedComponent = shallowRef( components.get( 'Plan' )! )

const selectedLabel = computed( {
	get: () => selectedComponent.value.label,
	set: ( value: string ) => {
		selectedComponent.value = components.get( value )!
	}
} )
</script>

<template>
	<div class="bg-gray-200 w-screen h-screen flex items-center justify-center">
<!--		<billing-page-selector-sidebar-style class="shadow-lg" v-model="selectedLabel"-->
<!--			:initial="selectedLabel" :items="components"></billing-page-selector-sidebar-style>-->
		<div class="relative flex flex-col w-full max-w-2xl h-96 rounded-2xl bg-gray-100 shadow-lg p-4 gap-2">
<!--		<billing-page-selector-tab-style class="absolute -top-10 left-0" v-model="selectedLabel"-->
<!--			:initial="selectedLabel" :items="components"></billing-page-selector-tab-style>-->
			<billing-page-selector-dropdown-style v-model="selectedLabel"
				:initial="selectedLabel" :items="components"></billing-page-selector-dropdown-style>
			<component v-if="selectedComponent"
				:is="selectedComponent.component"/>
			<div v-else>No component selected</div>
		</div>
	</div>
</template>

<style scoped>

</style>