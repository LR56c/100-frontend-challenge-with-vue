<script setup
	lang="ts">
import { useTimeAgo } from '@vueuse/core'
import JobCompanyIconAvatar
	from '~/components/job-board/JobCompanyIconAvatar.vue'
import JobSalaryFormat from '~/components/job-board/JobSalaryFormat.vue'
import JobTagsList from '~/components/job-board/JobTagsList.vue'
import type { Job } from '~/components/job-board/useJobBoard'

interface JobSearchCardProps {
	job: Job
}

defineProps<JobSearchCardProps>()
</script>

<template>
	<div class="transition-all cursor-pointer hover:bg-pink-50 bg-white rounded-2xl w-64 h-32 p-2 flex flex-col gap-4 justify-between">
		<div class="flex flex-col gap-2">
		<div class="flex items-center gap-2">
			<job-company-icon-avatar
				:company="job.company"
				:company-icon="job.companyLogo"
			></job-company-icon-avatar>
			<div class="flex flex-col">
				<div class="text-sm font-medium">{{ job.title }}</div>
				<div class="text-xs text-gray-400">{{ job.company }}</div>
			</div>
		</div>
		<div class="flex gap-1">
			<job-tags-list :tags="job.tags"></job-tags-list>
		</div>
		</div>
		<div class="flex justify-between items-center">
			<div class="flex items-center gap-2">
				<Icon class="text-pink-500"
					name="material-symbols-account-balance-wallet-outline"/>
				<job-salary-format class="text-xs" :value="job.salary"></job-salary-format>

			</div>
			<div class="text-xs text-gray-400">{{ useTimeAgo( job.createdAt ) }}</div>
		</div>
	</div>
</template>

<style scoped>

</style>
