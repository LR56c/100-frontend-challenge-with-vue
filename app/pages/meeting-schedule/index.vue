<script setup
	lang="ts">

import type { DateValue } from '@internationalized/date'
import MeetingVerticalStepper
	from '~/components/meeting-schedule/MeetingVerticalStepper.vue'
import MyCalendar from '~/components/meeting-schedule/MyCalendar.vue'
import {
	type Meeting,
	useMeetingSchedule
} from '~/components/meeting-schedule/useMeetingSchedule'

const store        = useMeetingSchedule()
const meetings     = ref<Meeting[]>( [] )
const dateSelected = ref<DateValue | null>( null )


watch( () => dateSelected.value, ( value : DateValue | null) => {
	if(value === null) return
	const dateString = `${ value.year }-${ value.month }-${ value.day.toString().padStart( 2, '0' ) }`
	const entry = store.getMeetings( dateString )
	meetings.value = entry
} )
</script>

<template>
	<div class="bg-gray-100 w-screen h-screen flex items-center justify-center">
		<div class="relative w-full max-w-sm flex flex-col gap-12">
			<div class="bg-[#3d663f] justify-center rounded-2xl shadow-lg flex flex-col p-3 gap-3">
				<div class="text-lime-300">Calendar</div>
				<my-calendar v-model:date-selected="dateSelected"></my-calendar>
			</div>
			<div class="relative bg-white h-72 rounded-2xl shadow-lg p-4 flex flex-col gap-2">
				<NuxtLink to="/meeting-schedule/add">
				<div class="absolute z-50 bottom-4 right-4 w-16 h-16 shadow-lg flex items-center justify-center rounded-2xl bg-[#f0ff4f]">
					<Icon size="32" name="material-symbols-add"/>
				</div>
				</NuxtLink>
				<div class="font-bold">Today</div>
				<meeting-vertical-stepper :meetings></meeting-vertical-stepper>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>
