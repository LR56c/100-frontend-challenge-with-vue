<script setup
	lang="ts">
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

interface TimeInputProps {
	label: string
}

defineProps<TimeInputProps>()

export interface TimeValue {
	hours: number
	minutes: number
}
const value = defineModel<TimeValue | null>( {
	default: null
} )
</script>

<template>
	<div class="max-w-xs w-full flex flex-col gap-2">
		<div class="flex gap-2 items-center">
			<Icon name="material-symbols-nest-clock-farsight-analog-outline-rounded"/>
			<label for="time"
				class="font-medium text-sm">{{ label }}</label>
		</div>
		<VueDatePicker placeholder="00:00" v-model="value" time-picker />
	</div>
</template>

<style scoped>

</style>
