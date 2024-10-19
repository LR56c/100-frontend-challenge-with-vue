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

const props = withDefaults(defineProps<CalendarRootProps & { class?: HTMLAttributes['class'] }>(), {
	modelValue: undefined,
	placeholder() {
		return today(getLocalTimeZone())
	},
	weekdayFormat: 'short',
})
const emits = defineEmits<CalendarRootEmits>()

const delegatedProps = computed(() => {
	const { class: _, placeholder: __, ...delegated } = props

	return delegated
})

const placeholder = useVModel(props, 'modelValue', emits, {
	passive: true,
	defaultValue: today(getLocalTimeZone()),
}) as Ref<DateValue>

const forwarded = useForwardPropsEmits(delegatedProps, emits)

const formatter  = useDateFormatter('en')
const dateValue = defineModel<DateValue | null>('dateSelected', {
	default: null,
})
</script>

<template>
	<CalendarRoot
		v-slot="{ date, grid, weekDays }"
		v-model:placeholder="placeholder"
		v-model:model-value="dateValue"
		v-bind="forwarded"
		:class="cn('rounded-2xl text-white border-0', props.class)"
	>
		<CalendarHeader>
			<CalendarHeading class="flex w-full items-center justify-between gap-2">
				<Select
					:default-value="placeholder.month.toString()"
					:model-value="dateValue?.month.toString()"
				>
					<SelectTrigger aria-label="Select month" class="rounded-2xl w-[60%]">
						<SelectValue placeholder="Select month" />
					</SelectTrigger>
					<SelectContent class="rounded-2xl bg-white max-h-[200px]">
						<SelectItem
							v-for="month in createYear({ dateObj: date })"
							:key="month.toString()" :value="month.month.toString()"
						>
							{{ formatter.custom(toDate(month), { month: 'long' }) }}
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
					<SelectTrigger aria-label="Select year" class="w-[40%] rounded-2xl">
						<SelectValue placeholder="Select year" />
					</SelectTrigger>
					<SelectContent class="max-h-[200px] rounded-2xl bg-white">
						<SelectItem
							v-for="yearValue in createDecade({ dateObj: date, startIndex: -10, endIndex: 10 })"
							:key="yearValue.toString()" :value="yearValue.year.toString()"
						>
							{{ yearValue.year }}
						</SelectItem>
					</SelectContent>
				</Select>
			</CalendarHeading>
		</CalendarHeader>
		<div class="flex flex-col space-y-4 pt-4 sm:flex-row sm:gap-x-4 sm:gap-y-0">
			<CalendarGrid v-for="month in grid" :key="month.value.toString()">
				<CalendarGridHead>
					<CalendarGridRow class="w-full flex justify-between">
						<CalendarHeadCell
							v-for="day in weekDays" :key="day"
						>
							{{ day }}
						</CalendarHeadCell>
					</CalendarGridRow>
				</CalendarGridHead>
				<hr class="opacity-30"/>
				<CalendarGridBody class="grid">
					<CalendarGridRow v-for="(weekDates, index) in month.rows" :key="`weekDate-${index}`"
						class="mt-2 w-full flex justify-between">
						<CalendarCell
							v-for="weekDate in weekDates"
							:key="weekDate.toString()"
							:date="weekDate"
						>
							<CalendarCellTrigger
								class="relative flex items-center justify-center rounded-full whitespace-nowrap text-sm font-normal text-white w-8 h-8 outline-none data-[selected]:shadow-[0_0_0_2px] data-[selected]:shadow-white data-[disabled]:text-gray-300 hover:text-black data-[highlighted]:bg-green-300 data-[unavailable]:pointer-events-none data-[unavailable]:text-gray-300 data-[unavailable]:line-through before:absolute before:top-[5px] before:hidden before:rounded-full before:w-1 before:h-1 before:bg-white data-[today]:before:block"
								:day="weekDate"
								:month="month.value"
							/>
						</CalendarCell>
					</CalendarGridRow>
				</CalendarGridBody>
			</CalendarGrid>
		</div>
	</CalendarRoot>
</template>

<style scoped>

</style>
