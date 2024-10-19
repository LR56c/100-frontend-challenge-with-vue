<script setup
	lang="ts">

interface SleepDataCircleProgressProps {
	value: number
	score: number
}
const props = defineProps<SleepDataCircleProgressProps>()

const progressStyle1 = computed(() => {
	return {
		background: `conic-gradient(#9333ea 360deg, #9333ea 360deg)`
	}
})
const progressStyle2 = computed(() => {
	const angle = (props.value / 100) * 360
	return {
		background: `conic-gradient(#ff1bf5 ${angle}deg, #7f1596 ${angle}deg)`
	}
})
</script>

<template>
		<div class="relative">
			<div
				class="w-52 h-52 rounded-full bg-purple-600"
				:style="progressStyle1"
			></div>
			<div class="w-40 h-40 m-auto z-20 rounded-full bg-indigo-950 absolute inset-0"></div>
			<div class="w-24 h-24 z-30 rounded-full bg-indigo-950 absolute inset-0 m-auto"></div>
			<div class="w-36 h-36 z-20 rounded-full absolute inset-0 m-auto"
			:style="progressStyle2"></div>
			<div class="absolute inset-0 z-30 flex flex-col items-center justify-center">
				<div class="font-bold text-5xl">{{ score }}</div>
				<div class="font-light text-xs">Sleep score</div>
			</div>
		</div>
</template>

<style scoped>

</style>
