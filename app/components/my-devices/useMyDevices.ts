import { ulid } from 'ulidx'

export type Device ={
	id: string
	name: string
	image: string
	key: string
	type : string
	update : string
	version: string
	battery ?: number
}

export const useMyDevices = defineStore( 'my-devices', () => {

	const devices = ref<Device[]>( [
		{
			id     : ulid(),
			name   : 'APPLE AirPods Pro II',
			image  : 'https://media.istockphoto.com/id/1208634599/es/foto/apple-airpods-pro-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=Dh-zQ0MdwbgfKSJ54Gk3h3uY_8RsmBeJSlNxyeLNCPg=',
			key    : 'MQw84532',
			type   : 'Headphones',
			update : 'Up to date',
			version: '1.2',
			battery: 80
		},
		{
			id     : ulid(),
			name   : 'APPLE Airpods Max',
			image  : 'https://www.apple.com/newsroom/images/product/airpods/standard/apple_airpods-max_hero_12082020_big.jpg.large.jpg',
			key    : 'MQw84533',
			type   : 'Headphones',
			update : 'Up to date',
			version: '1.0',
		},
	] )
	const currentDevice = ref<Device | undefined>( devices.value[ 0 ] )

	const removeDevice = ( id: string ) => {
		devices.value = devices.value.filter( device => device.id !== id )
	}

	const disconnectDevice = () => {
		currentDevice.value = undefined
	}

	const connectDevice = ( id: string ) => {
		currentDevice.value = devices.value.find( device => device.id === id )
	}

	const getDevice = ( id: string ) => {
		return devices.value.find( device => device.id === id )
	}

	return {
		devices: readonly( devices ),
		currentDevice : readonly( currentDevice ),
		removeDevice,
		disconnectDevice,
		getDevice,
		connectDevice
	}
})