import { ulid } from 'ulidx'

export type FlightTicketUserInfo = {
	id: string
	name: string
	terminal: number
	classType: string
}

export type FlightTicketDestination = {
	id: string
	fromDate : Date
	toDate : Date
	fromCode : string
	toCode : string
	estimatedTimestamp : number
}

export type FlightTicket = {
	id: string
	seatNumber: number
	seatChar : string
	destination: FlightTicketDestination
	user: FlightTicketUserInfo
}

export const useFlightTicket = defineStore( 'flight-ticket', () => {
	const dateStart = new Date(2024,10,11,0,30)
	const dateEnd = new Date(2024,10,11,14,40)
	const userTicket = ref<FlightTicket[]>([
		{
			id: ulid(),
			seatNumber: 43,
			seatChar: 'C',
			destination: {
				id: ulid(),
				fromDate: dateStart,
				toDate: dateEnd,
				fromCode: 'NYC',
				toCode: 'ROM',
				estimatedTimestamp: dateEnd.getTime() - dateStart.getTime()
			},
			user: {
				id: ulid(),
				name: 'John Doe',
				terminal: 3,
				classType: 'Business'
			}
		},
	])

	return {
		userTicket : readonly(userTicket)
	}
} )