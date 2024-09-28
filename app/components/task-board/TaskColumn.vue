<script setup
	lang="ts">

import TaskCard, { type TaskCardProps } from '~/components/task-board/TaskCard.vue'

interface Props {
	name: string
	tasks: TaskCardProps[]
}

const { tasks, name } = defineProps<Props>()

const onAddColumn = () => {
	console.log('add column', name)
}
</script>

<template>
	<div class="flex flex-none flex-col gap-4">
		<div class="flex items-center gap-2">
		<div class="font-bold capitalize">{{ name }}</div>
			<Icon @click="onAddColumn" class="opacity-70" name="mdi-plus"/>
		</div>
			<task-card v-for="task in tasks"
				:key="task.title"
				:priority="task.priority"
				:img="task.img"
				:title="task.title"
				:description="task.description"
				:date="task.date"
				:personsImages="task.personsImages"
			></task-card>
	</div>
</template>

<style scoped>

</style>
