<script setup
	lang="ts">
import type { CreateTask } from '~/components/create-task/useCreateTask'

interface CreateTaskCardProps {
	task : CreateTask
}

const parseColors = ( colors: string ) => {
	switch ( colors ) {
		case 'green':
			return 'bg-green-500'
		case 'purple':
			return 'bg-purple-500'
		case 'pink':
			return 'bg-pink-500'
		case 'orange':
			return 'bg-orange-500'
		default:
			return ''
	}
}

defineProps<CreateTaskCardProps>()
</script>

<template>
<div class="w-full p-2 flex justify-between text-white items-center">
	<div :class="[parseColors(task.color)]" class="w-4 h-4 rounded-full"></div>
	<span>{{ task.title }}</span>
	<span>{{ task.assigns.length }} user assigns</span>
</div>
</template>

<style scoped>

</style>