<script setup
	lang="ts">
import type { DateValue } from '@internationalized/date'
import { toDate } from 'radix-vue/date'
import ExploreHotelPersonPopup
	from '~/components/explore-flights/ExploreHotelPersonPopup.vue'
import MyInputSearch from '~/components/explore-flights/MyInputSearch.vue'
import MyPopupCalendar from '~/components/explore-flights/MyPopupCalendar.vue'
import SquareClearButton
	from '~/components/explore-flights/SquareClearButton.vue'
import {
	type ExploreHotel,
	useExploreHotels
} from '~/components/explore-flights/useExploreHotels'


const inDate      = ref<DateValue | undefined>( undefined )
const outDate     = ref<DateValue | undefined>( undefined )
const searchPlace = ref( '' )
const store       = useExploreHotels()
const results     = ref<ExploreHotel[]>( [] )
const guests      = ref( 0 )
const rooms       = ref( 0 )

const onSearch = () => {
	const inDateParse: Date | undefined = inDate.value ? toDate( inDate.value ) : new Date()
	const outDateParse: Date | undefined = outDate.value ? toDate( outDate.value ) : new Date()

	const response = store.filterHotel( searchPlace.value, inDateParse,
		outDateParse, guests.value, rooms.value )
	if ( response.length ) {
		results.value = [response[0]]
	}
}

const clearSearch = () => {
	inDate.value      = undefined
	outDate.value     = undefined
	searchPlace.value = ''
	guests.value      = 0
	rooms.value       = 0
}
</script>

<template>
	<div class="flex flex-col w-full h-full gap-4">
		<div class="h-4"></div>
		<div class="flex gap-1 bg-gray-300 rounded-2xl p-2 items-center">
			<my-input-search placeholder="Where to?"
				v-model="searchPlace"
				class="basis-[30%]"></my-input-search>
			<my-popup-calendar
				placeholder-label="Check in"
				v-model="inDate"
				class="basis-[20%]"></my-popup-calendar>
			<my-popup-calendar
				placeholder-label="Check out"
				v-model="outDate"
				class="basis-[20%]"></my-popup-calendar>
			<explore-hotel-person-popup
				v-model:rooms="rooms"
				v-model:guests="guests"
				class="basis-[30%]"></explore-hotel-person-popup>
			<square-clear-button @clear="clearSearch"
			></square-clear-button>
		</div>
		<div class="flex justify-between">
			<div></div>
			<button @click="onSearch"
				class="text-white gap-1 flex bg-indigo-500 rounded-2xl items-center justify-center py-2 px-4 text-sm">
				<Icon class="h-5"
					name="ri-hotel-fill"/>
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
					v-for="(hotel, i) in results"
					:key="hotel.id"
					class="flex gap-4 w-full h-full items-center justify-between"
				>
					<div>{{ i + 1 }}.</div>
					<div class="flex gap-1">
						<div>Location:</div>
						<div>{{ hotel.location.country }} {{ hotel.location.direction }}</div>
					</div>
					<div class="flex gap-1">
						<div>Check In:</div>
						<div>{{
								useDateFormat( hotel.checkInDate, 'MMMM D YYYY HH:mm' )
							}}
						</div>
					</div>
					<div class="flex gap-1">
						<div>Check Out:</div>
						<div>{{
								useDateFormat( hotel.checkOutDate, 'MMMM D YYYY HH:mm' )
							}}
						</div>
					</div>

				</div>
			</div>
		</Teleport>
	</ClientOnly>
</template>

<style scoped>

</style>
