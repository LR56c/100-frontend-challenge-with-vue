<script setup
	lang="ts">

const props = defineProps({
	segment: {
		type: Number,
		default: 6,
		required: false,
		validator(value : number, props) {
			return value > 1 && value <= 12
		},
	},
})

const progressValue = defineModel( {
	default: 0
} )

const completedStep = computed( () => {
	return Math.floor( (progressValue.value / 100) * props.segment )
} )
</script>

<template>
<div class="flex w-full h-3 gap-2" >
	<div
		v-for="index in completedStep"
		:key="index"
		class="flex-1 rounded-2xl w-1/6 bg-[#3734ff]"
	></div>
	<div
		v-for="index in props.segment - completedStep"
		:key="index"
		class="flex-1 rounded-2xl w-1/6 bg-gray-300"
	></div>
</div>
</template>

<style scoped>

</style>