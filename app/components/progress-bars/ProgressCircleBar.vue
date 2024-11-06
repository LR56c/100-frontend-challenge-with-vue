<script setup
	lang="ts">

export type CircleBarType = {
	title: string
	description: string
}

interface ProgressCircleBarProps {
	items : CircleBarType[]
}

const props = defineProps<ProgressCircleBarProps>()

const progressValue  = defineModel( {
	default: 0
} )

const completedStep = computed( () => {
	return Math.floor( ( progressValue.value / 100 ) * props.items.length )
} )

const progressString = computed( () => {
	const progressValue = completedStep.value * 360 / props.items.length
	return {
		background: `conic-gradient(#3734ff ${ progressValue }deg, #e0e0e0 0deg)`
	}
} )

const itemSelected = computed( () => {
	return props.items[completedStep.value] ?? { title: '', description: '' }
} )
</script>

<template>
	<div class="flex w-full h-full items-center justify-center gap-2">
		<div class="flex items-center justify-center relative rounded-full w-20 h-20 progress-circle"
			:style="progressString">
			<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-100 w-16 h-16 rounded-full text-sm flex items-center justify-center">
				<span class="font-semibold">{{ completedStep }} of {{ items.length }}</span>
			</div>
		</div>
		<div class=" flex flex-col text-black">
			<div class="font-semibold">{{ itemSelected.title }}</div>
			<div class="text-sm text-gray-400 font-semibold">{{ itemSelected.description }}</div>
		</div>
	</div>
</template>

<style scoped>

</style>