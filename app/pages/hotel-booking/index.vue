<script setup
	lang="ts">

import {
	CalendarDate,
	DateFormatter,
	type DateValue,
	getLocalTimeZone,
	today
} from '@internationalized/date'
import { Calendar as CalendarIcon } from 'lucide-vue-next'
import { toDate } from 'radix-vue/date'
import { Calendar } from '~/components/ui/calendar'
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

const start = today( getLocalTimeZone() )
const end   = start.add( { days: 7 } )

const placeholder = ref()
const startValue  = ref<DateValue>( start )
const endValue    = ref<DateValue>( end )
const ages        = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
</script>

<template>
	<div class="bg-orange-300 w-screen h-screen flex items-center justify-center">
		<div class="max-w-2xl w-full bg-white shadow-lg rounded-2xl p-4 flex gap-4">
			<div class="flex flex-col basis-[40%] gap-2">
				<Label>Check In</Label>
				<Popover>
					<PopoverTrigger as-child>
						<Button
							variant="outline"
							:class="cn(
                  'w-[240px] border-0 bg-gray-200 rounded-2xl text-start font-normal flex items-center justify-between px-3 py-2',
                                    !startValue && 'text-muted-foreground',
                )"
						>
								<span>{{
										startValue
											? df.format( toDate( startValue ) )
											: 'Pick a date'
									}}</span>
							<CalendarIcon class="h-4 w-4 opacity-100"/>
						</Button>
					</PopoverTrigger>
					<PopoverContent class="p-0 w-auto">
						<Calendar
							v-model="startValue"
							v-model:placeholder="placeholder"
							:weekday-format="'short'"
							initial-focus
							:min-value="new CalendarDate(1900, 1, 1)"
							:max-value="today(getLocalTimeZone())"
							class="bg-white"/>
					</PopoverContent>
				</Popover>
				<Label>Check Out</Label>
				<Popover>
					<PopoverTrigger as-child>
						<Button
							variant="outline"
							:class="cn(
                  'w-[240px] border-0 bg-gray-200 rounded-2xl text-start font-normal flex items-center justify-between px-3 py-2',
                                    !endValue && 'text-muted-foreground',
                )"
						>
								<span>{{
										endValue
											? df.format( toDate( endValue ) )
											: 'Pick a date'
									}}</span>
							<CalendarIcon class="h-4 w-4 opacity-100"/>
						</Button>
					</PopoverTrigger>
					<PopoverContent>
						<Calendar v-model="endValue"
							:weekday-format="'short'"
							class="rounded-md border"/>
					</PopoverContent>
				</Popover>
				<div class="flex w-full gap-4">
					<div class="w-full">
						<label for="adults"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Adults</label>
						<select id="adults"
							class="bg-gray-200 rounded-2xl text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
							<option :selected="i === 0"
								v-for="i in ages"
								:value="i">{{ i }}
							</option>
						</select>
					</div>
					<div class="w-full">
						<label for="children"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Children</label>
						<select id="children"
							class="bg-gray-200 rounded-2xl text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
							<option :selected="i === 0"
								v-for="i in ages"
								:value="i">{{ i }}
							</option>
						</select>
					</div>
				</div>
				<div class="h-full"></div>
				<button class="bg-orange-500 text-white w-full rounded-2xl py-2">Book a
					room
				</button>
			</div>
			<div class="basis-[60%] flex flex-col gap-4 ">
				<div class="relative w-full h-full">
					<img src="https://placehold.co/600x600"/>
					<div class="absolute bottom-0 left-0 p-4">
						<div class="text-sm text-white font-bold">Golden Apartments</div>
						<div class="text-sm text-white flex items-center gap-2">
							<Icon name="mdi-map-marker"/>
							<span>Punta Cana, Dominican Republic</span>
						</div>
					</div>
				</div>
				<div class="flex justify-between">
					<img src="https://placehold.co/115x115"/>
					<img src="https://placehold.co/115x115"/>
					<img src="https://placehold.co/115x115"/>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>
