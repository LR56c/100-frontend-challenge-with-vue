<script setup
	lang="ts">

import { toast } from 'vue-sonner'
import TaskManagerButton from '~/components/task-manager/TaskManagerButton.vue'
import {
	type Task,
	useTaskManager
} from '~/components/task-manager/useTaskManager'

const store = useTaskManager()

const currentDate      = ref( store.currentDate )
const currentDateTasks = ref<Task[]>( [] )

onMounted( () => {
	currentDateTasks.value = store.getTasks( currentDate.value )
} )

const handleDelete = ( task: string ) => {
	store.removeTask( currentDate.value, task )
	currentDateTasks.value = store.getTasks( currentDate.value )
}

const handleEdit = ( task: string ) => {
	toast('No edit yet',{})
}

const changeDate = ( date: string ) => {
	currentDate.value = date
	store.changeCurrentDate( date )
	currentDateTasks.value = store.getTasks( currentDate.value )
}

</script>

<template>
	<div class="bg-[#9080c9] w-screen h-screen flex flex-col items-center justify-center">
		<div class="relative w-full h-[600px] pt-2 pb-0.5 pl-2 max-w-sm bg-[#070021] shadow-lg rounded-2xl flex flex-col gap-4">
			<div class="w-full grid grid-cols-5 text-white">
				<div class="col-span-3 col-start-2 flex flex-col items-center justify-center">
					<span class="text-sm text-gray-400">{{
							useDateFormat( currentDate, 'dddd' )
						}}</span>
					<span class="font-semibold">{{
							useDateFormat( currentDate, 'DD MMM' )
						}}</span>
				</div>
				<div class="col-span-1 grid items-center justify-center">
					<nuxt-img class="object-center object-cover w-8 h-8 rounded-full"
						:src="store.avatar"/>
				</div>
			</div>
			<div class="w-full flex flex-shrink-0 gap-3 overflow-x-scroll text-white pb-4 pr-2">
				<task-manager-date-pill v-for="s in store.tasksKeys"
					@click="changeDate( s )"
					:key="s"
					:date="s"
				></task-manager-date-pill>
			</div>
			<div class="w-full h-full flex flex-col overflow-y-scroll gap-4 pb-12 pr-2">
				<task-manager-card
					v-for="task in currentDateTasks"
					:key="task.id"
					:task="task"
					@delete="handleDelete"
					@edit="handleEdit"
				></task-manager-card>
			</div>
			<div class="absolute bg-transparent bottom-0 inset-x-0 w-full p-2">
				<NuxtLink to="/task-manager/create">
					<task-manager-button label="New Task"
						icon="material-symbols-add-rounded"></task-manager-button>
				</NuxtLink>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>