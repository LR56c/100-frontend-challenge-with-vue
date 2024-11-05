export type BillingPlan = {
	name: string
	price: number
}

export const useBillingPagePlan = defineStore( 'billing-page-plan', () => {

	const standard: BillingPlan = {
		name : 'Standard',
		price: 29.99
	}

	const activePlan = ref<BillingPlan | undefined>( standard )

	const plans = ref( new Map<string, BillingPlan>( [
		[ 'Standard', standard ],
		[ 'Ultimate', {
			name : 'Ultimate',
			price: 49.99
		} ]
	] ) )

	const getPlan = ( plan: string ) => {
		return plans.value.get( plan )
	}

	const setActivePlan = ( plan: string ) => {
		console.log('set active', plan )
		const planExist = getPlan( plan )
		if ( !planExist ) {
			return
		}
		console.log('set active', planExist )
		activePlan.value = planExist
	}

	const cancelActivePlan = () => {
		activePlan.value = undefined
	}

	return {
		activePlan: readonly( activePlan ),
		plans     : readonly( plans ),
		setActivePlan,
		cancelPlan: cancelActivePlan,
		getPlan
	}
} )