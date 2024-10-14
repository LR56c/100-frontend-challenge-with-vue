<script setup
	lang="ts">

import DashboardButton from '~/components/dashboard/DashboardButton.vue'
import DashboardOverviewCard
	from '~/components/dashboard/DashboardOverviewCard.vue'
import { useDashboardReports } from '~/components/dashboard/useDashboardReports'

const store = useDashboardReports()

const selectedMonth = ref<string | undefined>()
const startDate = computed(() => {
	if (!selectedMonth.value) {
		return new Date(2024,9,1)
	}
	return new Date(2024,+selectedMonth.value,1)
})
const endDate = computed(() => {
	if (!selectedMonth.value) {
		return new Date(2024,9+1,0)
	}
	return new Date(2024,+selectedMonth.value+1,0)
})
</script>

<template>
	<div class="w-full min-w-[596px] flex flex-col gap-4 bg-gray-800 rounded-2xl p-4 text-white">
		<template v-if="store.reports.length">
		<div>Welcome</div>
		<div class="flex justify-between items-center">
			<div class="flex gap-4 items-center">
				<dashboard-button
					class="uppercase"
					label="Overview"></dashboard-button>
				<dashboard-button
					label="Partner Network" class="uppercase bg-transparent"></dashboard-button>
			</div>
			<div class="flex gap-4 items-center">
				<dashboard-date-month-select v-model="selectedMonth"></dashboard-date-month-select>
				<dashboard-button
					label="Filter"
					icon="proicons-filter"
				></dashboard-button>
			</div>
		</div>
		<div class="flex w-full justify-between gap-4">
			<dashboard-overview-card
				:type="'traffic'"
				:startDate="startDate"
				:endDate="endDate"></dashboard-overview-card>
			<dashboard-overview-card
				:type="'pending'"
				:startDate="startDate"
				:endDate="endDate"></dashboard-overview-card>
		</div>
		</template>
		<template v-else>
			<div>Loading</div>
		</template>
	</div>
</template>

<style scoped>

</style>
