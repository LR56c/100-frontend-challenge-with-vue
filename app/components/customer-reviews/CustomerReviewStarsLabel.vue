<script setup
	lang="ts">
interface CustomerReviewStarsLabelProps {
	total: number
	average: number
	max : number
}

const { max = 5, ...props } = defineProps<CustomerReviewStarsLabelProps>()
</script>

<template>
<div class="flex items-center gap-1">
	<span>{{ average }}</span>
	<Icon
		v-for="i in max"
		:key="i"
		size="20"
		:class="[i <= average ? 'text-yellow-500' : 'text-yellow-500/30']"
		name="material-symbols-light-kid-star"/>
	<span>({{ total }} reviews)</span>
</div>
</template>

<style scoped>

</style>