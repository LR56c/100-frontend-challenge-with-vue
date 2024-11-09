<script setup
	lang="ts">
import {
	CalendarCell,
	CalendarCellTrigger,
	CalendarGrid,
	CalendarGridBody,
	CalendarGridHead,
	CalendarGridRow,
	CalendarHeadCell,
	CalendarHeader,
	CalendarHeading
} from '@/components/ui/calendar'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/components/ui/select'
import {
	type DateValue,
	getLocalTimeZone,
	today
} from '@internationalized/date'
import { useVModel } from '@vueuse/core'
import {
	CalendarRoot,
	type CalendarRootEmits,
	type CalendarRootProps,
	useDateFormatter,
	useForwardPropsEmits
} from 'radix-vue'
import {
	createDecade,
	createYear,
	toDate
} from 'radix-vue/date'
import {
	computed,
	type HTMLAttributes,
	type Ref
} from 'vue'
import { cn } from '~/lib/utils'

const props = withDefaults(
	defineProps<CalendarRootProps & { class?: HTMLAttributes['class'] }>(), {
		modelValue: undefined,
		placeholder() {
			return today( getLocalTimeZone() )
		},
		weekdayFormat: 'short'
	} )
const emits = defineEmits<CalendarRootEmits>()

const delegatedProps = computed( () => {
	const { class: _, placeholder: __, ...delegated } = props

	return delegated
} )

const placeholder = useVModel( props, 'modelValue', emits, {
	passive: true,
	defaultValue: today( getLocalTimeZone() )
} ) as Ref<DateValue>

const todayDate = today( getLocalTimeZone() )

const forwarded = useForwardPropsEmits( delegatedProps, emits )

const formatter = useDateFormatter( 'en' )

</script>

<template>
	<CalendarRoot
		v-slot="{ date, grid, weekDays }"
		v-model:placeholder="placeholder"
		:min-value="todayDate"
		v-bind="forwarded"
		:class="cn('bg-[#2c2c2c] text-white border-0 rounded-2xl p-3', props.class)">
		<CalendarHeader>
			<CalendarHeading class="flex w-full items-center justify-between gap-2">
				<Select
					class="bg-white"
					:default-value="placeholder.month.toString()"
					@update:model-value="(v) => {
            if (!v || !placeholder) return;
            if (Number(v) === placeholder?.month) return;
            placeholder = placeholder.set({
              month: Number(v),
            })
          }"
				>
					<SelectTrigger aria-label="Select month"
						class="rounded border-[#3e3e3e] w-[60%]">
						<SelectValue placeholder="Select month"/>
					</SelectTrigger>
					<SelectContent class="bg-white rounded-2xl max-h-[200px]">
						<SelectItem
							v-for="month in createYear({ dateObj: date })"
							:key="month.toString()"
							:value="month.month.toString()"
						>
							{{ formatter.custom( toDate( month ), { month: 'long' } ) }}
						</SelectItem>
					</SelectContent>
				</Select>
				<Select
					:default-value="placeholder.year.toString()"
					@update:model-value="(v) => {
            if (!v || !placeholder) return;
            if (Number(v) === placeholder?.year) return;
            placeholder = placeholder.set({
              year: Number(v),
            })
          }"
				>
					<SelectTrigger aria-label="Select year"
						class="rounded border-[#3e3e3e] w-[40%]">
						<SelectValue placeholder="Select year"/>
					</SelectTrigger>
					<SelectContent class="bg-white rounded-2xl max-h-[200px]">
						<SelectItem
							v-for="yearValue in createDecade({ dateObj: date, startIndex: -10, endIndex: 10 })"
							:key="yearValue.toString()"
							:value="yearValue.year.toString()"
						>
							{{ yearValue.year }}
						</SelectItem>
					</SelectContent>
				</Select>
			</CalendarHeading>
		</CalendarHeader>
		<div class="flex flex-col space-y-4 pt-4 sm:flex-row sm:gap-x-4 sm:gap-y-0">
			<CalendarGrid v-for="month in grid"
				:key="month.value.toString()">
				<CalendarGridHead>
					<CalendarGridRow>
						<CalendarHeadCell v-for="day in weekDays"
							:key="day">{{ day }}
						</CalendarHeadCell>
					</CalendarGridRow>
				</CalendarGridHead>
				<CalendarGridBody class="grid">
					<CalendarGridRow v-for="(weekDates, index) in month.rows"
						:key="`weekDate-${index}`"
						class="mt-2 w-full">
						<CalendarCell v-for="weekDate in weekDates"
							:key="weekDate.toString()"
							:date="weekDate">
							<CalendarCellTrigger :day="weekDate"
								:month="month.value"
								class="relative flex items-center justify-center rounded-full whitespace-nowrap text-sm font-normal text-white w-8 h-8 outline-none data-[selected]:shadow-[0_0_0_2px] data-[selected]:shadow-white data-[disabled]:text-gray-300 hover:font-bold data-[highlighted]:bg-yellow-500 data-[unavailable]:pointer-events-none data-[unavailable]:text-gray-300 data-[unavailable]:line-through before:absolute before:top-[5px] before:hidden before:rounded-full before:w-1 before:h-1 before:bg-white data-[today]:before:block"/>
						</CalendarCell>
					</CalendarGridRow>
				</CalendarGridBody>
			</CalendarGrid>
		</div>
	</CalendarRoot>
</template>