<script setup
	lang="ts">
interface CustomerReviewStarsBadgeProps {
	average: number
	max : number
}

const { max = 5, ...props } = defineProps<CustomerReviewStarsBadgeProps>()
</script>

<template>
<div class="flex rounded-2xl w-full items-center justify-center gap-2 bg-gray-100 py-2">
	<Icon
		v-for="i in max"
		:key="i"
		size="40"
		:class="[i <= average ? 'text-yellow-500' : 'text-yellow-500/30']"
		name="material-symbols-light-kid-star"/>
	<span>{{ average }} out of {{ max }}</span>
</div>
</template>

<style scoped>

</style>