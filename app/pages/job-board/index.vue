<script setup
	lang="ts">
import JobInformation from '~/components/job-board/JobInformation.vue'
import JobSearchCard from '~/components/job-board/JobSearchCard.vue'
import JobSearchInput, { type JobSearchEvent } from '~/components/job-board/JobSearchInput.vue'
import {
	type Job,
	useJobBoard
} from '~/components/job-board/useJobBoard'

const store       = useJobBoard()
const jobSelected = ref<Job | undefined>( undefined )
const jobsResults = ref<Job[]>( [] )

const onSearch = ( { searchTerm, location }: JobSearchEvent ) => {
	if ( location.length && !searchTerm.length ) {
		jobsResults.value = store.getJobsByLocation( location )
	}
	else {
		jobsResults.value = store.getJobByTitle( searchTerm, location )
	}
}

onMounted( () => {
	jobsResults.value = store.getAllJobs()
} )

const jobSelect = (job : Job) => {
	jobSelected.value = job
}
</script>

<template>
	<div class="bg-gray-100 w-screen h-screen flex items-center gap-4 justify-center p-20">
		<div class="flex flex-col w-full gap-4">
			<div class="bg-gray-200 shadow-lg max-w-xl rounded-2xl p-4">
				<job-search-input
					@search="onSearch"
				></job-search-input>
			</div>
			<div class="bg-gray-200 shadow-lg min-h-[500px] max-w-xl rounded-2xl flex flex-col p-4 gap-4">
				<div class="flex justify-between items-center">
					<div class="font-bold text-lg">Search Results</div>
					<div class="text-sm">{{ jobsResults.length }} results found</div>
				</div>
				<div class="flex flex-wrap gap-4 justify-center">
					<job-search-card v-for="job in jobsResults"
						@click="jobSelect(job)"
						:key="job.id"
						:job>
					</job-search-card>
				</div>
			</div>
		</div>
		<div class="w-full max-w-[264px] h-full max-h-[580px] bg-white shadow-lg rounded-2xl p-4">
			<job-information :job="jobSelected"></job-information>
		</div>
	</div>
</template>

<style scoped>

</style>
