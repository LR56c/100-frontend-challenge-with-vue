import { ulid } from 'ulidx'

export type CustomerReview = {
	id: string
	place: string
	averageStar: number
	reviewsCount: number
	stars: number[][]
}

export const useCustomerReviews = defineStore( 'customer-reviews', () => {

	const customerReviews = ref<CustomerReview | undefined>( undefined )

	onMounted( () => {
		const customerReviews1: CustomerReview = {
			id          : ulid(),
			place       : 'Whisk & Ladle Bistro',
			averageStar : 4,
			reviewsCount: 15,
			stars       : [
				[],
				[ 1, 1 ],
				[ 1, 1, 1 ],
				[ 1, 1, 1, 1, 1, 1 ],
				[ 1, 1, 1, 1, 1, 1, 1, 1 ]
			]
		}
		customerReviews.value                  = customerReviews1
	} )

	return {
		customerReviews
	}
} )