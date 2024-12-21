<script setup
	lang="ts">
import type { MontlyWorkHours } from '~/lib/calculateDailyWorkHours'

interface CalculateDaysCardProps {
	day: MontlyWorkHours
	showConfig : boolean
}

const props = defineProps<CalculateDaysCardProps>()

const emit = defineEmits<{
	skipUpdate: [ number ]
	extraUpdate: [ number ]
}>()

const skip  = ref( 0 )
const extra = ref( 0 )

const handleExtra = () => {
	emit( 'extraUpdate', extra.value )
}

const handleSkip = () => {
	emit( 'skipUpdate', skip.value )
}
const realHours  = computed( () => {
	return props.day.totalHours - skip.value + extra.value
} )
</script>

<template>
	<div class="flex w-full gap-2 justify-between">
		<div class="flex w-full justify-between">
			<span>{{ day.month }} {{ day.year }} - {{ day.days }} days ({{ day.totalHours }} hours)</span>
			<span>{{ realHours }}h real</span>
		</div>
		<div v-if="showConfig" class="flex flex-col gap-2 justify-between">
			<div class="flex gap-1 w-36 justify-between">
				<label>skip hours</label>
				<input type="number"
					v-model="skip"
					class="w-10 h-fit"
					@input="handleSkip"
				/>
			</div>
			<div class="flex gap-1 w-36 justify-between">
				<label>extra hours</label>
				<input type="number"
					v-model="extra"
					class="w-10 h-fit"
					@input="handleExtra"
				/>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>