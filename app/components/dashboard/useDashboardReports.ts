import { ulid } from 'ulidx'

export type DashboardReportsCategoryType = 'traffic' | 'pending'

export type DashboardReports = {
	id : string
	entry : string
	link : string
	type : DashboardReportsCategoryType
	createdAt : Date
	completedAt ?: Date
}

function generateReports(numReports: number, type : DashboardReportsCategoryType, startDate: Date): DashboardReports[] {
	const reports: DashboardReports[] = [];
	for (let i = 0; i < numReports; i++) {
		const id = ulid()
		reports.push({
			id,
			entry: `Report Traffic`,
			link: `/reports/${id}`,
			type,
			createdAt: startDate,
			completedAt: type === 'pending' ? undefined : new Date(startDate.getTime() + 1),
		});
	}
	return reports;
}

export const useDashboardReports = defineStore( 'dashboard-reports', () => {
	const reports = ref<DashboardReports[]>([])

	onMounted(()=>{
		const trafficReportsWeek1 = generateReports(681, 'traffic' , new Date('2024-09-15'))
		const trafficReportsWeek2 = generateReports(763, 'traffic' , new Date('2024-10-06'))
		const pendingReportsWeek1 = generateReports(333, 'pending' , new Date('2024-09-29'))
		const pendingReportsWeek2 = generateReports(320, 'pending' , new Date('2024-10-06'))
		reports.value = [...trafficReportsWeek1, ...trafficReportsWeek2, ...pendingReportsWeek1, ...pendingReportsWeek2]
	})

	function calculatePercentageDateRange(
		reports: DashboardReports[],
		type : DashboardReportsCategoryType,
		startDate: Date,
		endDate: Date
	): {
		currentValue: number
		percentage: number
	} | undefined {
		const filterReportsByDateRange = (start: Date, end: Date) => {
			return reports.filter(report => report.type === type && report.createdAt >= start && report.createdAt <= end)
		}
		const currentPeriodReports = filterReportsByDateRange(startDate, endDate)
		const previousStartDate = new Date(startDate.getFullYear(), startDate.getMonth() - 1, startDate.getDate())
		const previousEndDate = new Date(endDate.getFullYear(), endDate.getMonth() - 1, endDate.getDate())
		const previousPeriodReports = filterReportsByDateRange(previousStartDate, previousEndDate)

		const previousCount = previousPeriodReports.length
		const currentCount = currentPeriodReports.length
		if (currentCount === 0 || previousCount === 0) {
			return undefined
		}
		const change = ((currentCount - previousCount) / previousCount) * 100
		return {
			currentValue : currentCount,
			percentage : parseInt((Math.round(change * 100) / 100).toFixed(0))
		}
	}

	return {
		reports,
		calculatePercentageDateRange
	}
})
