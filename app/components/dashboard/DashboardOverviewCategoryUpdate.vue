<script setup
	lang="ts">
import type { DashboardReportsCategoryType } from '~/components/dashboard/useDashboardReports'

export interface DashboardOverviewCategoryUpdateProps {
	type : DashboardReportsCategoryType
	executionDate : Date
}
const props = defineProps<DashboardOverviewCategoryUpdateProps>()

const badgeIcon = props.type === 'traffic' ? 'mage-dashboard-2-fill' : 'icon-park-outline-loading'
const typeText = props.type === 'traffic' ? 'Referral traffic' : 'Pending'
</script>

<template>
	<div class="flex items-center w-full bg-gray-600 rounded-2xl p-2 text-sm justify-start gap-2">
		<dashboard-badge v-if="badgeIcon.length" class="w-7 h-7 bg-pink-500 p-0">
			<Icon size="20" :name="badgeIcon"/>
		</dashboard-badge>
		<div class="flex flex-col">
			<div>{{ typeText }}</div>
			<div class="text-gray-300/75">Last updated on {{ useDateFormat( executionDate, 'DD MMM' ) }}</div>
		</div>
	</div>
</template>

<style scoped>

</style>
