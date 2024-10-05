import cardValidator from 'card-validator'

export interface CardMaskProps {
	masked: string
	visible: string
	type: string
}

export function maskCardNumber( cardNumber: string,
	replaceValue: string = '*' ): CardMaskProps | null {
	const { card, isValid } = cardValidator.number( cardNumber )

	if ( card ) {
		const maskedSection = cardNumber
			.slice(0, -4)
			.replace(/\d/g, replaceValue)
			.match(/.{1,4}/g)
			?.join(' ') || '';
		const visibleSection = cardNumber.slice( -4 )

		return {
			visible: visibleSection,
			masked : maskedSection,
			type   : card.type
		}
	}

	return null
}
