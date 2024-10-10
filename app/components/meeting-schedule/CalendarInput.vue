<script setup
	lang="ts">

import {
	DateFormatter,
	type DateValue
} from '@internationalized/date'
import { toDate } from 'radix-vue/date'
import { Calendar } from '~/components/ui/calendar'
import { Button } from '~/components/ui/button'
import { Label } from '~/components/ui/label'
import {
	Popover,
	PopoverContent,
	PopoverTrigger
} from '~/components/ui/popover'
import { cn } from '~/lib/utils'

const df = new DateFormatter( 'en-US', {
	dateStyle: 'long'
} )

interface CalendarInputProps {
	label: string
}

defineProps<CalendarInputProps>()

const value = defineModel<DateValue | null>( {
	default: null
} )
</script>

<template>
	<div class="w-full flex flex-col gap-2">
		<div class="flex gap-2">
			<Icon name="material-symbols-calendar-month"/>
			<Label>{{ label }}</Label>
		</div>
		<Popover>
			<PopoverTrigger as-child>
				<Button
					variant="outline"
					:class="cn( 'w-full border-0 bg-gray-100 rounded-2xl text-start font-normal flex items-center justify-between px-3 py-2', !value && 'text-muted-foreground')">
								<span class="text-gray-500">{{ value ? df.format( toDate( value ) ) : 'Pick a date' }}</span>
				</Button>
			</PopoverTrigger>
			<PopoverContent class="border-0 bg-white rounded-2xl p-2">
				<Calendar v-model="value"
					:weekday-format="'short'"/>
			</PopoverContent>
		</Popover>
	</div>
</template>

<style scoped>

</style>
