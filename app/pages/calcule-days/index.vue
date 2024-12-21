<script setup
	lang="ts">
import CalculateDaysCard from '~/components/calcule-days/CalculateDaysCard.vue'
import MySwitch from '~/components/shared/MySwitch.vue'
import { calculateWorkHours } from '~/lib/calculateDailyWorkHours'

const startDate  = new Date( '2024-09-01T14:00:00Z' )
const result     = calculateWorkHours( startDate )
const skipHours  = ref<number[]>( result.map( () => 0 ) )
const extraHours = ref<number[]>( result.map( () => 0 ) )

const countSkipHours  = computed(
	() => skipHours.value.reduce( ( a, b ) => a + b, 0 ) )
const countExtraHours = computed(
	() => extraHours.value.reduce( ( a, b ) => a + b, 0 ) )
const totalExtraHours = computed(
	() => countExtraHours.value - countSkipHours.value )

const handleExtra = ( index: number, value: number ) => {
	extraHours.value[index] = value
}
const handleSkip  = ( index: number, value: number ) => {
	skipHours.value[index] = value
}

const showConfig = ref(false)
</script>

<template>
	<div class="w-screen h-screen flex items-center gap-8 justify-center bg-[#cbc5b9]">
		<div class="relative max-w-lg w-full bg-gray-100 rounded-2xl shadow-lg p-4 flex flex-col gap-4 items-center">
			<div class="absolute top-0 right-0">
				<my-switch v-model="showConfig"></my-switch>
			</div>
			<span>Work Hours Resume </span>
			<span>{{ useDateFormat( startDate, 'MMMM YYYY' ) }} - {{
					useDateFormat( new Date(), 'D MMMM YYYY' )
				}}</span>
			<span>count skip hours: {{
					countSkipHours
				}} - count extra hours: {{ countExtraHours }}</span>
			<span>total extra hours: {{ totalExtraHours }}</span>
			<div class="flex flex-col w-full gap-4">
				<template v-for="(day, i) in result"
					:key="`${day.month}-${day.year}`">
					<calculate-days-card :day
						:showConfig
						@skip-update="handleSkip(i, $event)"
						@extra-update="handleExtra(i, $event)"></calculate-days-card>
					<hr v-if="i !== result.length - 1"
						class="w-full border border-gray-300"/>
				</template>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>