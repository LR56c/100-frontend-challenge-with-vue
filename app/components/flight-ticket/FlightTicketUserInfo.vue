<script setup
	lang="ts">

import FlightTicketInfoLabel
	from '~/components/flight-ticket/FlightTicketInfoLabel.vue'

interface FlightTicketUserInfoProps {
	name: string
	classType: string
	terminal: number
	seatNumberUnion: string
}

defineProps<FlightTicketUserInfoProps>()
</script>

<template>
	<div class="w-[364px] flex rounded-2xl bg-blue-200 p-4 items-center gap-2 justify-center">
			<flight-ticket-info-label
				label="FULL NAME"
				:content="name"
			></flight-ticket-info-label>
			<flight-ticket-info-label
				label="SEATS NUMBER"
				:content="seatNumberUnion"
			></flight-ticket-info-label>
			<flight-ticket-info-label
				label="TERMINAL"
				:content="terminal.toString()"
			></flight-ticket-info-label>
			<flight-ticket-info-label
				label="CLASS"
				:content="classType"
			></flight-ticket-info-label>
	</div>
</template>

<style scoped>

</style>