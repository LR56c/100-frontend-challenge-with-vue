<script setup
	lang="ts">
const formatNumber = (num: number) => {
	if (num >= 1000 && num < 1000000) {
		return `$${(num / 1000).toFixed(0)}k`;
	} else if (num >= 1000000) {
		return `$${(num / 1000000).toFixed(1)}M`;
	}
	return `$${num}`;
}

interface JobSalaryFormat {
	value : number
}
defineProps<JobSalaryFormat>()
</script>

<template>
<div>{{ formatNumber(value) }}/month
</div>
</template>

<style scoped>

</style>
