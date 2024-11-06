<script setup
	lang="ts">
import {
	StepperIndicator,
	StepperItem,
	StepperRoot,
	StepperSeparator,
	StepperTrigger
} from 'radix-vue'

interface ProgressStepCircleBarProps {
	steps: string[]
}

const props = defineProps<ProgressStepCircleBarProps>()

const progressValue = defineModel( {
	default: 0
} )

const completedStep = computed( () => {
	return Math.floor( (progressValue.value / 100) * props.steps.length )
} )
</script>

<template>
	<StepperRoot
		:default-value="1"
		class="flex gap-2 h-full w-full max-w-[32rem]"
	>
		<StepperItem
			v-for="(item,i) in steps"
			:key="item"
			:disabled="true"
			v-slot=" {state}"
			class="w-full h-8 flex items-center justify-center gap-2 cursor-pointer group data-[disabled]:pointer-events-none relative px-4"
			:step="i">
			<StepperTrigger class="inline-flex items-center group-data-[state=inactive]:bg-gray-300 group-data-[state=active]:bg-[#3937fb] border-0 text-white justify-center rounded-full w-6 h-6 shrink-0 group-data-[state=completed]:bg-blue-200 focus:outline-none">
				<StepperIndicator>

						<Icon v-if="state === 'completed'" name="material-symbols-check-rounded"/>
					<span v-else>{{ i + 1 }}</span>
				</StepperIndicator>
			</StepperTrigger>
			<StepperSeparator
				v-if="item !== steps[steps.length - 1]"
				class="absolute block top-4 left-[calc(50%+15px)] right-[calc(-50%+5px)] h-0.5 rounded-full bg-blue-700 shrink-0"
			/>
			<div class="absolute text-center top-full left-0 w-full mt-2 text-black text-sm font-semibold group-data-[state=inactive]:text-gray-300">
				{{ item }}
			</div>
		</StepperItem>
	</StepperRoot>
</template>

<style scoped>

</style>