<script setup
	lang="ts">
interface TaskManagerDatePillProps {
	date: string
}

const extractDay = ( date: string ) => {
	return date.split( '-' )[2]
}

defineProps<TaskManagerDatePillProps>()
</script>

<template>
	<button class="bg-[#332b52] rounded-full flex flex-col min-w-12 h-16 py-2">
		<span>{{ useDateFormat( date, 'ddd' ) }}</span>
		<span class="text-lg font-semibold">{{ extractDay( date ) }}</span>
	</button>
</template>

<style scoped>

</style>