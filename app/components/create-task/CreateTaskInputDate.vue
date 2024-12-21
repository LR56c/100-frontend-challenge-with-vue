<script setup
	lang="ts">
import {
	Popover,
	PopoverContent,
	PopoverTrigger
} from '@/components/ui/popover'
import {
	type DateValue,
	getLocalTimeZone,
	today
} from '@internationalized/date'
import MyCalendarYear from '~/components/shared/MyCalendarYear.vue'

interface CreateTaskInputDateProps {
	label?: string
}
defineProps<CreateTaskInputDateProps>()
const date = defineModel<string | undefined>({
	default: undefined,
})
const dateValue = ref<DateValue | undefined>(undefined)
const todayDate = today( getLocalTimeZone() )

const dateFormat = computed( () => {
	if ( !dateValue.value ) {
	return useDateFormat( todayDate.toString(), 'dddd, D MMM YYYY' ).value
	}
	return useDateFormat( dateValue.value.toString(), 'dddd, D MMM YYYY' ).value
} )

watch( dateValue, ( value ) => {
	date.value = value?.toString()
} )

onMounted( () => {
	if ( !dateValue.value ) {
		dateValue.value = todayDate
	}
} )
</script>

<template>
	<div class="w-full h-full relative text-[#727272] flex flex-col gap-1">
		<label v-if="label">{{ label }}</label>
		<Popover>
			<PopoverTrigger>
				<button class="flex bg-[#2c2c2c] w-full justify-between items-center p-2 rounded-2xl">
					<span class="text-white">{{ dateFormat }}</span>
					<Icon size="20"
						class="text-white"
						name="material-symbols-calendar-month-outline-rounded"/>
				</button>
			</PopoverTrigger>
			<PopoverContent class="border-0 p-0 rounded-2xl">
				<my-calendar-year v-model="dateValue"></my-calendar-year>
			</PopoverContent>
		</Popover>
	</div>
</template>

<style scoped>

</style>