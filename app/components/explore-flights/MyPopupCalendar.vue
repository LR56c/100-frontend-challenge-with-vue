<script setup
	lang="ts">

import {
	type DateValue,
	getLocalTimeZone,
	today
} from '@internationalized/date'
import { useVModel } from '@vueuse/core'
import { Calendar as CalendarIcon } from 'lucide-vue-next'
import {
	CalendarRoot,
	type CalendarRootEmits,
	type CalendarRootProps,
	useForwardPropsEmits
} from 'radix-vue'
import {
	computed,
	type HTMLAttributes,
	type Ref,
	ref
} from 'vue'
import {
	CalendarCell,
	CalendarCellTrigger,
	CalendarGrid,
	CalendarGridBody,
	CalendarGridHead,
	CalendarGridRow,
	CalendarHeadCell,
	CalendarHeader,
	CalendarHeading,
	CalendarNextButton,
	CalendarPrevButton
} from '~/components/ui/calendar'
import {
	Popover,
	PopoverContent,
	PopoverTrigger
} from '~/components/ui/popover'
import { cn } from '~/lib/utils'

interface MyPopupCalendarProps {
	icon?: string
	placeholderLabel ?: string
	class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<CalendarRootProps & MyPopupCalendarProps>(), {
	modelValue: undefined,
	placeholder() {
		return today(getLocalTimeZone())
	},
	weekdayFormat: 'short',
})

const emits = defineEmits<CalendarRootEmits>()

const delegatedProps = computed( () => {
	const { class: _, ...delegated } = props

	return delegated
} )

const placeholder = today(getLocalTimeZone()).toString()

const forwarded = useForwardPropsEmits( delegatedProps, emits )

const value    = defineModel<DateValue | undefined>()
const open        = ref( false )
const todayDate    = today( getLocalTimeZone() )
const nextYearDate = todayDate.add( { years: 1 } )
const dateFormat   = computed( () => {
	if(!value.value) return useDateFormat(placeholder.toString(), 'ddd D MMM').value
	return useDateFormat(value.value.toString(), 'ddd D MMM').value
} )
</script>

<template>
	<Popover v-model:open="open">
		<PopoverTrigger as-child>
			<button
					:class="cn('w-full h-10 bg-white rounded-2xl flex items-center px-4 gap-2', !value && 'text-muted-foreground', props.class)">
				<CalendarIcon
					:class="[value ? 'text-black' : 'text-gray-400']"
					class="h-4 w-4 opacity-100"/>
				<span :class="[value ? 'text-black' : 'text-gray-400']">{{
						value
							? dateFormat
							: props.placeholderLabel ?? dateFormat
					}}</span>
			</button>
		</PopoverTrigger>
		<PopoverContent class="p-0 border-0 w-auto">
			<CalendarRoot
				class="rounded-2xl bg-white"
				:class="cn('p-3', props.class)"
				:min-value="todayDate"
				:max-value="nextYearDate"
				initial-focus
				v-model="value"
				:placeholder
				v-slot="{ grid, weekDays }"
				v-bind="forwarded"
			>
				<CalendarHeader>
					<CalendarPrevButton class="rounded-full"/>
					<CalendarHeading/>
					<CalendarNextButton class="rounded-full"/>
				</CalendarHeader>

				<div class="flex flex-col gap-y-4 mt-4 sm:flex-row sm:gap-x-4 sm:gap-y-0">
					<CalendarGrid v-for="month in grid"
						:key="month.value.toString()">
						<CalendarGridHead>
							<CalendarGridRow>
								<CalendarHeadCell
									v-for="day in weekDays"
									:key="day"
								>
									{{ day }}
								</CalendarHeadCell>
							</CalendarGridRow>
						</CalendarGridHead>
						<CalendarGridBody>
							<CalendarGridRow v-for="(weekDates, index) in month.rows"
								:key="`weekDate-${index}`"
								class="mt-2 w-full">
								<CalendarCell
									v-for="weekDate in weekDates"
									:key="weekDate.toString()"
									:date="weekDate"
								>
									<CalendarCellTrigger
										class="relative flex items-center justify-center rounded-full whitespace-nowrap text-sm font-normal text-black w-8 h-8 outline-none data-[selected]:shadow-[0_0_0_2px] data-[selected]:shadow-indigo-700 data-[disabled]:text-gray-300 hover:text-indigo-700 hover:font-bold data-[highlighted]:bg-yellow-500 data-[unavailable]:pointer-events-none data-[unavailable]:text-gray-300 data-[unavailable]:line-through before:absolute before:top-[5px] before:hidden before:rounded-full before:w-1 before:h-1 before:bg-black data-[today]:before:block"
										:day="weekDate"
										:month="month.value"
									/>
								</CalendarCell>
							</CalendarGridRow>
						</CalendarGridBody>
					</CalendarGrid>
				</div>
			</CalendarRoot>
		</PopoverContent>
	</Popover>
</template>

<style scoped>

</style>
