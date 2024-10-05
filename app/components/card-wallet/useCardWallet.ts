import { maskCardNumber } from '~/lib/maskCard'
import type { CardProps } from '~/pages/card-wallet/index.vue'

export const useCardWallet = defineStore( 'card-wallet', () => {
	const cardType1 = maskCardNumber( '5132111111113123', '•' )
	const cardType2 = maskCardNumber( '3432111111112131', '•' )
	const cardType3 = maskCardNumber( '4235321111112525', '•' )

	const cardsRef = ref( new Map<number, CardProps>( [
		[ 0, {
			balance: 4387,
			expire : new Date( 2026, 6 ),
			number : cardType3!
		} ],
		[ 1, {
			balance: 6673,
			expire : new Date( 2026, 6 ),
			number : cardType2!
		} ],
		[ 2, {
			balance: 7472,
			expire : new Date( 2026, 6 ),
			number : cardType1!
		} ]
	] ) )

	const addCard = ( card: CardProps ) => {
		console.log( 'addCard', card ,cardsRef.value.size)
		cardsRef.value.set( cardsRef.value.size, card )
	}

	return {
		cardsRef,
		addCard
	}
} )
