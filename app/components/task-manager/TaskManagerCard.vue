<script setup
	lang="ts">
import {
	type Task,
	useTaskManager
} from '~/components/task-manager/useTaskManager'

interface TaskManagerCardProps {
	task: Task
}

defineProps<TaskManagerCardProps>()

const config      = ref( false )

const handleToggleEdit = () => {
	config.value = !config.value
}

const emit = defineEmits<{
	edit: [string]
	delete: [string]
}>()
</script>

<template>
	<div class="w-full flex gap-2">
		<button ref="r"
			@click="handleToggleEdit"
			class="w-full flex bg-[#332b52] text-white gap-4 p-2 rounded-2xl items-center">
			<div class="w-16 h-16 rounded-2xl flex items-center justify-center p-1 bg-[#514a69] text-white">
				<Icon size="30"
					:name="task.icon"/>
			</div>
			<div class="flex flex-col items-start">
				<span class="text-sm text-gray-400">Today</span>
				<span class="font-semibold text-lg">{{ task.name }}</span>
				<div class="flex gap-1 items-center text-sm">
					<Icon name="ic-round-access-time"/>
					<span>{{
							useDateFormat( task.startTime, 'hh:mma' )
						}} to {{ useDateFormat( task.endTime, 'hh:mma' ) }}</span>
				</div>
			</div>
		</button>
		<div v-if="config"
			class="flex flex-col justify-between basis-[13%]">
			<task-manager-button class="w-10 h-10 bg-yellow-700"
				@click="emit('edit', task.id)"
				label=""
				icon="material-symbols-light-edit-square-outline-rounded"></task-manager-button>
			<task-manager-button class="w-10 h-10 bg-red-700"
				@click="emit('delete', task.id)"
				label=""
				icon="material-symbols-delete-outline-rounded"></task-manager-button>
		</div>
	</div>
</template>

<style scoped>

</style>