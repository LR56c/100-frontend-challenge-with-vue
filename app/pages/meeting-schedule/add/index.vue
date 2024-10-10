<script setup
	lang="ts">
import type { DateValue } from '@internationalized/date'
import CalendarInput from '~/components/meeting-schedule/CalendarInput.vue'
import TextInput from '~/components/meeting-schedule/TextInput.vue'
import TimeInput, { type TimeValue } from '~/components/meeting-schedule/TimeInput.vue'
import {
	type Meeting,
	useMeetingSchedule
} from '~/components/meeting-schedule/useMeetingSchedule'

const titleRef = ref( '' )
const dateRef  = ref<DateValue | null>( null )
const startRef = ref<TimeValue | null>( null )
const endRef   = ref<TimeValue | null>( null )
const errorHourError = ref( '' )


const store    = useMeetingSchedule()
const onSubmit = () => {
	if ( !dateRef.value || !startRef.value || !endRef.value ) {
		return
	}

	// check if start time is before end time
	if ( startRef.value.hours > endRef.value.hours || ( startRef.value.hours === endRef.value.hours && startRef.value.minutes >= endRef.value.minutes ) ) {
		errorHourError.value = 'Verifique la hora de inicio y fin'
		return
	}

	const date             = new Date( dateRef.value.year, dateRef.value.month-1, dateRef.value.day )
	const start            = new Date( dateRef.value.year, dateRef.value.month-1, dateRef.value.day, startRef.value.hours, startRef.value.minutes )
	const end              = new Date( dateRef.value.year, dateRef.value.month-1, dateRef.value.day, endRef.value.hours, endRef.value.minutes )
	const meeting: Meeting = {
		title : titleRef.value,
		status: 'not started',
		date,
		start,
		end
	}
	const result           = store.addMeeting( meeting )
	console.log( 'add meeting result: ', result )
}
</script>

<template>
	<div class="bg-gray-100 w-screen h-screen flex items-center justify-center">
		<div class="relative w-full max-w-sm flex flex-col shadow-lg rounded-2xl bg-[#3d663f]">
			<div class="bg-[#3d663f] font-medium rounded-2xl text-white p-4 flex items-center gap-2">
				<NuxtLink to="/meeting-schedule">
					<Icon size="20" name="material-symbols-arrow-back"/>
				</NuxtLink>
				<div>Add meeting</div>
			</div>
			<div
				class="bg-white rounded-2xl flex flex-col p-4 gap-4">
				<text-input
					v-model="titleRef"
					label="Title"></text-input>
				<calendar-input v-model="dateRef"
					label="Date"></calendar-input>
				<div class="flex gap-4 w-full">
					<time-input v-model="startRef"
						label="Start"></time-input>
					<time-input v-model="endRef"
						label="End"></time-input>
				</div>
				<p v-if="errorHourError !== ''" class="text-sm text-red-800">{{ errorHourError }}</p>
				<button @click="onSubmit"
					class="bg-[#f0ff4f] w-full py-2 rounded-2xl font-medium">Save
				</button>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>
