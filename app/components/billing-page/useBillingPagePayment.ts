import { maskCardNumber } from '~/lib/maskCard'
import type { CardMaskProps } from '~/lib/maskCard'

export const useBillingPagePayment = defineStore( 'billing-page-payment', () => {

	const list = ref<CardMaskProps[]>( [])

	const addCard = ( ) => {
		const randomNumber = () => Math.floor(Math.random() * 10);
		const randomNumbers = Array.from({ length: 10 }, randomNumber).join('');
		const randomCard = maskCardNumber( '423532' + randomNumbers )
		if( !randomCard ) return
		list.value.push( randomCard )
	}

	onMounted(()=>{
		addCard()
	})

	return{
		list : readonly( list ),
		addCard
	}
})