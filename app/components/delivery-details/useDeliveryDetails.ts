import { ulid } from 'ulidx'

export type DeliveryDetails = {
	id: string
	entries: DeliveryEntry[]
	date: Date
	trackNumber: string
	companyName: string
}

export type DeliveryEntry = {
	id: string
	status: string
	address: string
	date: Date
}

export const useDeliveryDetails = defineStore( 'delivery-details', () => {

	const deliveryDetailsRef = ref<DeliveryDetails | undefined>( undefined )

	onMounted( () => {
		const deliveryDetails1: DeliveryDetails = {
			id         : ulid(),
			entries    : [
				{
					id     : ulid(),
					status : 'Delivered',
					address: '1234 Main St, Springfield, IL 62701',
					date   : new Date( 2024, 3, 27, 12, 30 )
				},
				{
					id     : ulid(),
					status : 'Out for Delivery',
					address: 'West 34th St, New York, NY 10001',
					date   : new Date( 2024, 3, 27, 10, 5 )
				},
				{
					id     : ulid(),
					status : 'In Transit',
					address: 'Canada Post, Toronto, ON M5V 1J9',
					date   : new Date( 2024, 3, 24, 8, 56 )
				},
				{
					id     : ulid(),
					status : 'Ordered Picked Up',
					address: 'United Parcel Service, Chicago, IL 60604',
					date   : new Date( 2024, 3, 23, 16, 47 )
				},
				{
					id     : ulid(),
					status : 'Order Recived',
					address: 'United Parcel Service, Chicago, IL 60604',
					date   : new Date( 2024, 3, 27, 9, 21 )
				}
			],
			date   : new Date( 2024, 3, 23, 12 ),
			trackNumber: 'HY2-03AQWES12',
			companyName: 'SilkScape Textiles Co.'
		}
		deliveryDetailsRef.value                = deliveryDetails1
	} )

	return {
		deliveryDetails: readonly( deliveryDetailsRef )
	}
} )