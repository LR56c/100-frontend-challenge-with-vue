<script setup
	lang="ts">
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

interface TaskManagerDateInputProps {
	label: string
}

defineProps<TaskManagerDateInputProps>()

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
			<label for="time" class="text-white font-medium text-sm">{{ label }}</label>
		<VueDatePicker dark placeholder="00:00" v-model="value" time-picker />
	</div>
</template>

<style scoped>

</style>
