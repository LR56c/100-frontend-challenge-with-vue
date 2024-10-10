<script setup
	lang="ts">
import {
	Stepper,
	StepperDescription,
	StepperItem,
	StepperSeparator,
	StepperTitle,
	StepperTrigger
} from '@/components/ui/stepper'
import {
	type Meeting,
	type MeetingStatusType,
	useMeetingSchedule
} from '~/components/meeting-schedule/useMeetingSchedule'
const formatted = (date: Date)=>useDateFormat(date, 'HH:mm A')

const colorMeetingStatusParser = ( status: MeetingStatusType ): string => {
	switch ( status ) {
		case 'done':
			return 'bg-pink-500'
		case 'pending':
			return 'border-4 border-blue-400'
		case 'not started':
			return 'bg-purple-800'
	}
}

const colorMeetingStatusBadge = ( status: MeetingStatusType ): string => {
	switch ( status ) {
		case 'done':
			return 'bg-pink-500'
		case 'pending':
			return 'bg-blue-400'
		case 'not started':
			return 'bg-purple-800'
	}
}


interface MeetingVerticalStepperProps {
	meetings: Meeting[]
}

defineProps<MeetingVerticalStepperProps>()

const store = useMeetingSchedule()

const changeStatus = ( dayKey: Date, title: string ) => {
  store.advanceMeetingStatus(dayKey,title)
}
</script>

<template>
	<Stepper orientation="vertical"
		class="mx-auto flex w-full max-w-md flex-col justify-start gap-10">
		<StepperItem
			v-for="(m,i) in meetings"
			:key="m.title"
			v-slot="{ state }"
			class="relative flex w-full flex-1"
			:step="i">
			<StepperSeparator
				v-if="i !== meetings.length - 1"
				class="absolute left-[18px] top-[34px] block h-[130%] border-dotted border-r-4 border-black"/>
			<StepperTrigger
				@click="changeStatus( m.date, m.title )"
			>
				<div
					class="rounded-full flex items-center justify-center w-6 h-6"
					:class="[colorMeetingStatusParser( m.status )]">
					<Icon v-if="m.status === 'done'"
						name="material-symbols-check"
						class="text-white"/>
				</div>
			</StepperTrigger>
			<div class="w-full flex flex-col basis-[80%] gap-1">
				<StepperTitle
					:class="[state === 'active' && 'text-primary']"
					class="text-sm font-semibold transition lg:text-base"
				>
					{{ m.title }}
				</StepperTitle>
				<StepperDescription
					class="text-xs transition text-gray-600"
				>
					<div>{{ formatted(m.start) }} - {{ formatted(m.end) }}</div>
				</StepperDescription>
			</div>
			<div class="basis-[30%] flex">
				<div :class="[colorMeetingStatusBadge( m.status )]"
					class="capitalize rounded-full text-white text-xs p-1.5">{{ m.status }}
				</div>
			</div>
		</StepperItem>
	</Stepper>
</template>
