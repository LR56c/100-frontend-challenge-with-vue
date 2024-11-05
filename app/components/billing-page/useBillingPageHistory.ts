import { ulid } from 'ulidx'

export type BillingHistory = {
	id: string
	date: Date
	amount: number
	detail: string
}

export const useBillingPageHistory = defineStore( 'billing-page-history',
	() => {

		const list = ref<BillingHistory[]>( [
			{
				id: ulid(),
				date: new Date( 2023, 11, 4 ),
				amount: 29.99,
				detail: 'Standard Plan'
			},
			{
				id: ulid(),
				date: new Date( 2023, 10, 4 ),
				amount: 29.99,
				detail: 'Standard Plan'
			},
			{
				id: ulid(),
				date: new Date( 2023, 9, 4 ),
				amount: 29.99,
				detail: 'Standard Plan'
			},
			{
				id: ulid(),
				date: new Date( 2023, 8, 4 ),
				amount: 29.99,
				detail: 'Standard Plan'
			}
		] )

		return {
			list: readonly( list )
		}
	} )