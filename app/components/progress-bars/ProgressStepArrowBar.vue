<script setup
	lang="ts">
interface ProgressStepArrowBarProps {
	steps: string[]
}

const props = defineProps<ProgressStepArrowBarProps>()

const progressValue = defineModel( {
	default: 0
} )

const completedStep = computed( () => {
	return Math.floor( ( progressValue.value / 100 ) * props.steps.length )
} )
</script>

<template>
	<div class="flex items-center w-full overflow-hidden">
		<div v-for="(step, index) in props.steps"
			:key="index"
			:style="{ zIndex: props.steps.length - index + 10 }"
			:class="[index === 0 ? 'w-24' : 'w-32',{
				'bg-[#3734ff]': index === completedStep-1,
				'bg-blue-300': index < completedStep-1,
				'bg-gray-300': index > completedStep-1,
				'my-clip': index !== steps.length -1,
			}]"
			class="-mr-8 h-12 text-sm rounded-2xl indent-2 text-white font-semibold relative flex items-center justify-center">
			{{ step }}
		</div>
	</div>

</template>

<style scoped>
.my-clip {
	clip-path: polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%);
}
</style>