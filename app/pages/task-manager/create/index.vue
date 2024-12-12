<script setup
	lang="ts">

import { toast } from 'vue-sonner'
import TaskManagerButton from '~/components/task-manager/TaskManagerButton.vue'
import TaskManagerDateInput
	, { type TimeValue } from '~/components/task-manager/TaskManagerDateInput.vue'
import {
	type TimeRemainder,
	useTaskManager
} from '~/components/task-manager/useTaskManager'

const store        = useTaskManager()
const taskName     = ref( '' )
const startTime    = ref<TimeValue | null>( null )
const endTime      = ref<TimeValue | null>( null )
const timeSelected = ref<TimeRemainder | undefined>( undefined )

const reset = () => {
	taskName.value     = ''
	startTime.value    = null
	endTime.value      = null
	timeSelected.value = undefined
}

const router = useRouter()

const handleCreate = () => {
	if ( !taskName.value || !startTime.value || !endTime.value ) {
		toast( 'Please fill all fields', {} )
		return
	}

	store.addTask( {
		name     : taskName.value,
		startTime: startTime.value!,
		endTime  : endTime.value!,
		remainder: timeSelected.value
	} )
	reset()
	toast( 'Task created', {} )
	router.push( '/task-manager' )
}
</script>

<template>
	<div class="bg-[#9080c9] w-screen h-screen flex flex-col items-center justify-center">
		<div class="relative w-full h-[600px] max-w-sm bg-[#070021] shadow-lg rounded-2xl flex flex-col gap-4 p-2">
			<div class="flex w-full justify-between">
				<div class="flex gap-2 text-white items-center">
					<NuxtLink to="/task-manager">
						<Icon size="30"
							name="material-symbols-arrow-left-alt-rounded"/>
					</NuxtLink>
					<span class="text-lg font-semibold">New Task</span>
				</div>
				<nuxt-img class="object-center object-cover w-8 h-8 rounded-full"
					:src="store.avatar"/>
			</div>
			<task-manager-input v-model="taskName"
				class="w-full"
				label="Task name"
				placeholder="Enter name"></task-manager-input>
			<div class="flex w-full gap-4">
				<task-manager-date-input v-model="startTime"
					label="Start time"></task-manager-date-input>
				<task-manager-date-input v-model="endTime"
					label="End time"></task-manager-date-input>
			</div>
			<div class="w-full flex gap-2 text-white items-center">
				<Icon size="20"
					name="material-symbols-notifications-outline-rounded"/>
				<span>Set Reminder</span>
			</div>
			<div class="flex flex-wrap gap-2">
				<task-manager-badge
					v-for="s in store.timesRemainder"
					:key="s.label"
					:time="s"
					@click="timeSelected = s"
					:data-selected="timeSelected?.label === s.label"
				></task-manager-badge>
			</div>
			<div class="absolute bottom-0 inset-x-0 w-full p-2">
				<task-manager-button @click="handleCreate"
					label="Create Task"></task-manager-button>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>