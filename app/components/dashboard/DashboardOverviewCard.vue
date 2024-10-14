<script setup
	lang="ts">

import DashboardBadge from '~/components/dashboard/DashboardBadge.vue'
import DashboardOverviewCategoryUpdate
	from '~/components/dashboard/DashboardOverviewCategoryUpdate.vue'
import {
	type DashboardReportsCategoryType,
	useDashboardReports
} from '~/components/dashboard/useDashboardReports'

export interface DashboardOverviewCardProps {
	type: DashboardReportsCategoryType
	startDate: Date
	endDate: Date
}

const props = defineProps<DashboardOverviewCardProps>()

const store = useDashboardReports()

const calculateObject  = computed( () => {
	return store.calculatePercentageDateRange( store.reports, props.type,
		props.startDate, props.endDate )
} )
const num              = computed( () => {
	return calculateObject.value?.currentValue ?? 0
} )
const percentage       = computed( () => {
	return calculateObject.value?.percentage ?? 0
} )
const percentagePrefix = computed( () => {
	return percentage.value > 0 ? '+' : ''
} )

const color     = props.type === 'traffic' ? 'bg-green-500' : 'bg-orange-600'
const iconArrow = computed( () => {
	return percentage.value === 0 ? '' : percentage.value > 0
		? 'material-symbols-fitbit-arrow-upward'
		: 'material-symbols-fitbit-arrow-downward'
} )

const executionDate = ref( new Date() )

watch( () => [ props.startDate, props.endDate ], () => {
	executionDate.value = new Date()
} )
</script>

<template>
	<div class="bg-gray-700 rounded-2xl flex flex-col items-center justify-center p-4 gap-2">
		<div class="rounded-2xl bg-gray-600 flex flex-col min-w-60 items-center justify-center p-4 gap-2">
			<div class="font-medium text-3xl flex items-center gap-2">
				<div>{{ num === 0 ? 'No data' : num }}</div>
				<dashboard-badge class="w-fit p-0"
					:class="color"
					v-if="iconArrow.length">
					<Icon size="20"
						:name="iconArrow"/>
				</dashboard-badge>
			</div>
			<dashboard-badge v-if="calculateObject"
				:class="color"
				class="w-fit">
				<div>{{ percentagePrefix }}{{ percentage }}%</div>
			</dashboard-badge>
		</div>
		<dashboard-overview-category-update
			:execution-date="executionDate"
			:type="props.type"
		></dashboard-overview-category-update>
	</div>
</template>

<style scoped>

</style>
