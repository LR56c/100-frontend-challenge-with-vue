<script setup
	lang="ts">

import JobCompanyIconAvatar
	from '~/components/job-board/JobCompanyIconAvatar.vue'
import JobSalaryFormat from '~/components/job-board/JobSalaryFormat.vue'
import JobTagsList from '~/components/job-board/JobTagsList.vue'
import type { Job } from '~/components/job-board/useJobBoard'

interface JobInformationProps {
	job?: Job
}

defineProps<JobInformationProps>()
const readMore = ref(false)
</script>

<template>
	<div :class="job ? 'justify-between':'justify-center'"
		class="w-full h-full flex flex-col gap-2">
		<template v-if="job">
			<div class="flex flex-col gap-2">
			<job-company-icon-avatar :company="job.company" :company-icon="job.companyLogo"></job-company-icon-avatar>
			<div class="font-medium">{{ job.title }}</div>
			<div class="text-gray-400 text-sm">{{ job.company }}</div>
			<div class="text-pink-500 text-xs py-0.5 px-2 w-fit bg-pink-200 rounded-full">
				+{{job.applicants }} Applicants
			</div>
			<hr/>
			<div class="font-medium ">Description</div>
			<div :class="[readMore? '': 'line-clamp-4']"
				class="text-sm">{{ job.description }}</div>
				<span v-if="!readMore" @click="readMore = true" class="cursor-pointer text-pink-400 font-bold cursor-pointer underline text-xs">read more</span>
			<hr/>
			<div class="font-medium ">Skills</div>
			<div class="flex gap-1">
				<job-tags-list :tags="job.tags"></job-tags-list>
			</div>
			<hr/>
			<div class="font-medium ">Based salary</div>
			<job-salary-format class="text-sm text-gray-400" :value="job.salary"></job-salary-format>
			</div>
			<button @click="console.log('click apply')" class="w-full py-2 bg-pink-500 text-white rounded-full">Apply Now</button>
		</template>
		<div class="self-center flex items-center gap-2"
			v-else>
			<Icon size="32"
				class="text-pink-300"
				name="material-symbols-info"/>
			<div class="text-gray-400">No job selected</div>
		</div>
	</div>
</template>

<style scoped>

</style>
