<script setup
	lang="ts">
import MyProgress from '~/components/shared/MyProgress.vue'

interface CustomerReviewStarsBarsProps {
	stars: number[][]
	total: number
}

const props = defineProps<CustomerReviewStarsBarsProps>()
const calculatePercent = (stars: number[]) => {
	return (stars.length / props.total) * 100
}
</script>

<template>
	<div class="flex flex-col gap-1">
		<div class="flex gap-1 items-center"
			v-for="(star, index) in stars"
			:key="index">
			<span>{{ index + 1 }}</span>
			<my-progress class="h-3 bg-gray-100"
				class-indicator="bg-yellow-500"
				:max="100"
				:model-value="calculatePercent(star)"></my-progress>
		</div>
	</div>
</template>

<style scoped>

</style>