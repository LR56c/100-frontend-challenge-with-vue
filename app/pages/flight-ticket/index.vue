<script setup
	lang="ts">
import VueBarcode from '@chenfengyuan/vue-barcode'
import {
	type FlightTicket,
	useFlightTicket
} from '~/components/flight-ticket/useFlightTicket'

const formatDate = ( date: Date ) => date.toLocaleTimeString( 'en-US', {
	hour  : '2-digit',
	minute: '2-digit'
} )

function calculateTimeRemaining( miliseconds: number ): string {
	const hours   = Math.floor( miliseconds / ( 1000 * 60 * 60 ) )
	const minutes = Math.floor(
		( miliseconds % ( 1000 * 60 * 60 ) ) / ( 1000 * 60 ) )

	if ( minutes === 0 && hours === 0 ) {
		return ''
	}

	if ( hours === 0 ) {
		return `${ minutes }min`
	}

	return `${ hours }hr ${ minutes }min`
}

const store = useFlightTicket()

const ticket: FlightTicket | undefined = store.userTicket[0] ?? undefined

const barCodeOptions = {
	displayValue: false,
	height      : 40,
	width       : 2,
	background  : '#f3f4f6'
}

const tempID                = 'FFAED43'
const infoTitleClass        = ''
const infoTitleContentClass = 'text-cyan-700 text-xs'
const seatNumberUnion       = computed( () => {
	if ( !ticket ) {
		return ''
	}
	return `${ ticket.seatNumber }${ ticket.seatChar }`
} )

const estimatedTime = computed( () => {
	if ( !ticket ) {
		return ''
	}
	return calculateTimeRemaining( ticket.destination.estimatedTimestamp )
} )

const parsedStartDate = computed( () => {
	if ( !ticket ) {
		return ''
	}
	return formatDate( ticket.destination.fromDate )
} )

const parsedEndDate = computed( () => {
	if ( !ticket ) {
		return ''
	}
	return formatDate( ticket.destination.toDate )
} )
</script>

<template>
	<div class="w-screen h-screen bg-[url('/cloud.avif')] bg-center bg-cover flex flex-col gap-4 items-center justify-center">
		<div v-if="ticket"
			class="my-mask relative w-full h-full max-w-[642px] max-h-[300px] bg-gray-100 rounded-2xl px-4 py-8 my-shadow flex justify-between">
			<div class="flex flex-col items-center justify-center gap-4">
				<flight-ticket-destination
					:fromDate="parsedStartDate"
					:toDate="parsedEndDate"
					:fromCode="ticket.destination.fromCode"
					:toCode="ticket.destination.toCode"
					:estimated-time="estimatedTime"
				></flight-ticket-destination>
				<flight-ticket-user-info
					:name="ticket.user.name"
					:classType="ticket.user.classType"
					:terminal="ticket.user.terminal"
					:seat-number-union="seatNumberUnion"
				></flight-ticket-user-info>
			</div>
			<div class="h-full">
				<svg width="50"
					height="240">
					<path d="m 25 0 l 0 240"
						stroke="#000"
						stroke-width="1"
						fill="none"
						stroke-dasharray="3,3"/>
				</svg>
			</div>
			<div class="w-full h-full flex flex-col gap-2 -ml-4 -rotate-90">
				<flight-ticket-destination
					:fromDate="parsedStartDate"
					:toDate="parsedEndDate"
					:fromCode="ticket.destination.fromCode"
					:toCode="ticket.destination.toCode"
					stroke-color="#0e7490"
					:estimated-time="estimatedTime"
				></flight-ticket-destination>
				<div class="flex items-center justify-center gap-2">
					<flight-ticket-info-label
						label="DEPARTURE"
						:content="parsedStartDate"
						:label-class="infoTitleClass"
						:content-class="infoTitleContentClass"
					></flight-ticket-info-label>
					<flight-ticket-info-label
						label="ARRIVAL"
						:content="parsedEndDate"
						:label-class="infoTitleClass"
						:content-class="infoTitleContentClass"
					></flight-ticket-info-label>
					<flight-ticket-info-label
						label="SEATS NUMBER"
						:content="seatNumberUnion"
						:label-class="infoTitleClass"
						:content-class="infoTitleContentClass"
					></flight-ticket-info-label>
					<flight-ticket-info-label
						label="TICKET NO."
						:content="tempID"
						:label-class="infoTitleClass"
						:content-class="infoTitleContentClass"
					></flight-ticket-info-label>
				</div>
				<vue-barcode :value="tempID"
					:options="barCodeOptions"></vue-barcode>
			</div>
		</div>
	</div>
</template>

<style scoped>
.my-shadow {
	box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1);
}

.my-mask {
	mask-image: radial-gradient(circle at 63.5% 100%, transparent 25px, black 25px),
	radial-gradient(circle at 63.5% 0%, transparent 25px, black 25px);
	mask-composite: intersect;
	-webkit-mask-composite: destination-in;
}
</style>