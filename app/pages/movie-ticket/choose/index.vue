<script setup
	lang="ts">

import SeatSquare from '~/components/movie-ticket/SeatSquare.vue'
import { useMovieTicket } from '~/components/movie-ticket/useMovieTicket'

interface DateSelected {
	index: number
	date: Date
}

const store  = useMovieTicket()

const arr: string[][] = [
	[ 'E', 'A', 'A', 'A', 'A', 'A', 'A', 'E' ],
	[ 'E', 'A', 'S', 'S', 'A', 'A', 'A', 'E' ],
	[ 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A' ],
	[ 'A', 'A', 'A', 'A', 'B', 'B', 'B', 'A' ],
	[ 'A', 'B', 'B', 'A', 'A', 'A', 'A', 'A' ],
	[ 'A', 'A', 'A', 'B', 'B', 'A', 'A', 'A' ]
]
store.configure( arr )

const onSquareClick = ( col: string, row: number ) => {
	if(!canSelectSeat.value) return
	store.selectSeat( row, col )
}

const pay = () => {
	const seats = store.confirmSelectedSeats()
	console.log( 'Booked seats:', seats )
}

const dateSelected = ref<DateSelected>( {
	index: 0,
	date : store.datesRef[0]!.date
} )
const timeSelected = ref<DateSelected | null>()
const canSelectSeat = ref(false)
const changeDateSelected = (i : number, date : Date) => {
	dateSelected.value = { index: i, date }
	canSelectSeat.value = false
	timeSelected.value = null
	store.configure( arr )
}

const onTimeSelected = (i : number, date : Date) => {
	canSelectSeat.value = true
	timeSelected.value = { index: i, date }
	store.configure( arr )
}
</script>

<template>
	<div class="w-screen h-screen flex items-center justify-center">
		<div class="w-full max-w-sm flex flex-col shadow-lg rounded-2xl bg-[#7000c7]">
			<div class="flex gap-4 text-white items-center p-4">
				<NuxtLink to="/movie-ticket">
				<Icon name="material-symbols-arrow-back-ios-new-rounded"/>
				</NuxtLink>
				<div class="font-medium text-2xl">Choose seats</div>
			</div>
			<div class="h-60 relative flex flex-col items-center justify-center">
				<svg viewBox="100 50 200 200"
					class="pointer-events-none absolute top-0 scale-[2] w-full h-full text-white z-10"
					xmlns="http://www.w3.org/2000/svg">
					<path stroke-linecap="round"
						d="M 146 116 A 100 100 237 0 1 253 115"
						stroke="white"
						stroke-width="2"
						fill="none"/>
				</svg>
				<div class="z-0 light w-full h-56 absolute top-0"></div>
				<div class="z-20 flex flex-col items-center justify-around pt-8 h-full w-full">
					<div class="flex flex-col gap-2">
						<div
							v-for="(col, i) in store.seatMatrix"
							:key="i"
							class="flex gap-2">
							<seat-square v-for="(row, j) in col"
								:class="canSelectSeat ? 'cursor-pointer' : 'cursor-default'"
								@square-click="onSquareClick(row.col,row.row)"
								:key="i + j"
								:status="row.status"></seat-square>
						</div>
					</div>
					<div class="flex w-full items-center justify-around">
						<div class="flex items-center gap-2 ">
							<seat-square status="selected"></seat-square>
							<div class="text-sm text-white">Selected</div>
						</div>
						<div class="flex items-center gap-2 ">
							<seat-square status="booked"></seat-square>
							<div class="text-sm text-white">Reserved</div>
						</div>
						<div class="flex items-center gap-2 ">
							<seat-square status="available"></seat-square>
							<div class="text-sm text-white">Available</div>
						</div>
					</div>
				</div>
			</div>
			<div class="bg-white flex flex-col rounded-2xl justify-between shadow-lg p-4 h-64">
				<div class="flex flex-col">
					<div class="font-medium">Date</div>
					<div class="flex justify-between">
						<button
							v-for="(d, i) in store.datesRef"
							:key="i"
							data-allow-mismatch
							class="w-16 border-2 border-gray-400 text-gray-400 p-1.5 rounded-2xl"
							:class="{ 'border-orange-500 text-orange-500': dateSelected?.index === i }"
							@click="changeDateSelected( i, d.date )"
						>{{ useDateFormat( d.date, 'DD MMM' ) }}
						</button>
					</div>
				</div>
				<div class="flex flex-col">
					<div class="font-medium">Time</div>
					<div class="flex justify-between">
						<button
							v-for="(t, i) in store.datesRef[dateSelected.index]!.times"
							:key="i"
							data-allow-mismatch
							class="w-16 border-2 border-gray-400 text-gray-400 p-1.5 rounded-2xl"
							:class="{ 'border-orange-500 text-orange-500': timeSelected?.index === i }"
							@click="onTimeSelected( i, t )"
						>{{ useDateFormat( t, 'HH:mm' ) }}
						</button>
					</div>
				</div>
				<button @click="pay"
					class="bg-black text-white py-2 w-full rounded-2xl">Pay
				</button>
			</div>
		</div>
	</div>
</template>
<style scoped>

.light {
	clip-path: polygon(45% 0%, 55% 0%, 70% 5%, 83% 17%, 100% 100%, 0% 100%, 17% 17%, 30% 5%);
	background: linear-gradient(
		180deg,
		rgb(156, 74, 216) 0%,
		rgba(255, 255, 255, 0) 100%,
		rgba(255, 255, 255, 0) 100%
	)
}
</style>
