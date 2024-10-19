<script setup
	lang="ts">

import type { DateValue } from '@internationalized/date'
import { toDate } from 'radix-vue/date'
import MyPopupCalendar from '~/components/explore-flights/MyPopupCalendar.vue'
import MyRadioButtons, { type MyRadio } from '~/components/explore-flights/MyRadioButtons.vue'
import SquareClearButton
	from '~/components/explore-flights/SquareClearButton.vue'
import {
	type ExploreFlights,
	useExploreFlights
} from '~/components/explore-flights/useExploreFlights'
import MyComboBox, { type MyComboBoxType } from '~/components/job-board/MyComboBox.vue'

const options: MyRadio[] = [
	{ name: 'Round trip', enabled: false },
	{ name: 'One way', enabled: true },
	{ name: 'Multi-city', enabled: false }
]
const optionValue        = ref( options[1]!.name )

const places: MyComboBoxType[] = [
	{ value: 'New York' },
	{ value: 'Los Angeles' },
	{ value: 'San Francisco' },
	{ value: 'Chicago' },
	{ value: 'Miami' },
	{ value: 'Las Vegas' },
	{ value: 'Orlando' },
	{ value: 'Washington' },
	{ value: 'Boston' },
	{ value: 'Seattle' },
	{ value: 'Denver' },
	{ value: 'Atlanta' },
	{ value: 'Dallas' },
	{ value: 'Houston' },
	{ value: 'Phoenix' },
	{ value: 'Philadelphia' },
	{ value: 'Detroit' },
	{ value: 'Minneapolis' },
	{ value: 'San Diego' },
	{ value: 'Portland' },
	{ value: 'St. Louis' },
	{ value: 'San Antonio' },
	{ value: 'Oakland' }
]
const valueDate                = ref<DateValue | undefined>( undefined )
const fromPlace                = ref( '' )
const toPlace                  = ref( '' )
const results                  = ref<ExploreFlights[]>( [] )

const store = useExploreFlights()

const onSearch         = () => {
	const date: Date | undefined = valueDate.value ? toDate( valueDate.value ) : new Date()
	const response               = store.filterFlight( fromPlace.value,
		toPlace.value, date )
	if ( response.length > 0 ) {
		results.value = [ response[0] ]
	}
}
const changeDateSearch = () => {
	const prevFromPlace = fromPlace.value
	fromPlace.value     = toPlace.value
	toPlace.value       = prevFromPlace
}
const clearSearch      = () => {
	fromPlace.value = ''
	toPlace.value   = ''
	valueDate.value = undefined
}
</script>

<template>
	<div class="flex flex-col w-full h-full gap-4">
		<my-radio-buttons v-model="optionValue"
			:values="options"></my-radio-buttons>
		<div class="flex gap-1 bg-gray-300 rounded-2xl p-2 items-center">
			<my-combo-box class="basis-[30%] bg-white p-2 rounded-2xl w-full"
				icon="material-symbols-flight-takeoff-rounded"
				:values="places"
				v-model="fromPlace"
				placeholder="Where from?"></my-combo-box>
			<button @click="changeDateSearch"
				class="flex bg-white rounded-full w-8 h-8 justify-center items-center">
				<Icon class="h-5"
					name="basil-exchange-outline"/>
			</button>
			<my-combo-box class="basis-[30%] bg-white p-2 rounded-2xl w-full"
				icon="material-symbols-flight-land-rounded"
				:values="places"
				v-model="toPlace"
				placeholder="Where to?"></my-combo-box>
			<my-popup-calendar
				v-model="valueDate"
				class="basis-[30%]"></my-popup-calendar>
			<square-clear-button @clear="clearSearch"
			></square-clear-button>
		</div>
		<div class="flex justify-between">
			<button class="text-indigo-700 font-medium text-sm cursor-not-allowed">Add
				a flight
			</button>
			<button @click="onSearch"
				class="text-white gap-1 flex bg-indigo-500 rounded-2xl items-center justify-center py-2 px-4 text-sm">
				<Icon class="h-5"
					name="mdi-airplane"/>
				<span>Search</span>
			</button>
		</div>
	</div>
	<ClientOnly>
		<Teleport defer
			to="#tp">
			<div v-if="results.length"
				class="flex flex-col gap-4 min-w-[800px] max-w-xl h-full bg-white rounded-2xl mt-4 p-4">
				<div
					v-for="(flight, i) in results"
					:key="flight.id"
					class="flex gap-4 w-full h-full items-center justify-between"
				>
					<div>{{ i+1 }}.</div>
					<div class="flex gap-1">
						<div>Origin:</div>
						<div>{{ flight.origin.country }} {{ flight.origin.direction }}</div>
					</div>
					<div class="flex gap-1">
						<div>Destination:</div>
						<div>{{ flight.destination.country }} {{ flight.destination.direction }}</div>
					</div>
					<div class="flex gap-1">
						<div>Departure Date</div>
						<div>{{ useDateFormat(flight.departureDate, 'MMMM D YYYY HH:mm') }}</div>
					</div>
				</div>
			</div>
		</Teleport>
	</ClientOnly>
</template>

<style scoped>

</style>
