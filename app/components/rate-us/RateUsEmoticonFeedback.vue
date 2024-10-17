<script setup lang="ts">

interface RateUsEmoticonFeedbackProps {
	rate : number
	selected: boolean
}

const props = defineProps<RateUsEmoticonFeedbackProps>()
const emit = defineEmits<{
	rateSelected: [number]
}>()
const label = computed(() => {
	switch(props.rate) {
		case 0:
			return 'Terrible'
		case 1:
			return 'Bad'
		case 2:
			return 'Okey'
		case 3:
			return 'Good'
		case 4:
			return 'Great'
		default:
			return 'No label'
	}
})

const image = computed(() => {
	switch(props.rate) {
		case 0:
			return '/terrible.png'
		case 1:
			return '/bad.png'
		case 2:
			return '/happy.png'
		case 3:
			return '/good.png'
		case 4:
			return '/great.png'
		default:
			return ''
	}
})

const rateSelected = () => {
	emit('rateSelected', props.rate)
}
</script>

<template>
  <div @click="rateSelected" class="cursor-pointer flex flex-col gap-2 justify-between hover:bg-gray-100 rounded-2xl p-4 items-center">
	  <img :class="{'grayscale' : !selected }" class="w-10 h-10 filter" v-if="image.length" :src="image"/>
	  <div v-else>No image available</div>
	  <div :class="[selected ? 'text-black' : 'text-gray-500']">{{ label }}</div>
  </div>
</template>

<style scoped>

</style>
