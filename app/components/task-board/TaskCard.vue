<script setup
	lang="ts">

import { DateFormatter } from '@internationalized/date'
import TaskAvatar from '~/components/task-board/TaskAvatar.vue'

export interface TaskCardProps {
	priority: 'low' | 'medium' | 'high'
	img?: string
	title: string
	description: string
	date: Date
	personsImages: string[]
}

const props = defineProps<TaskCardProps>()

const colorsType = new Map<string, string>( [
	[ 'low', 'bg-green-500' ],
	[ 'medium', 'bg-yellow-500' ],
	[ 'high', 'bg-rose-500' ]
] )

const selectedColor = colorsType.get( props.priority )
const df            = new DateFormatter( 'en-US', {
	dateStyle: 'short'
} )

const addPerson = () => {
	console.log( 'add person', props.title )
}
</script>

<template>
	<div class="min-w-64 max-w-64 flex flex-col p-4 rounded-2xl shadow-lg gap-4 bg-white">
		<div class="flex justify-between">
		<span
			:class="selectedColor"
			class="text-white text-xs uppercase font-medium px-2.5 py-0.5 rounded-full">{{
				priority
			}}</span>
			<div class="text-sm text-gray-400">{{ df.format( date ) }}</div>
		</div>
		<img v-if="img"
			class="rounded-2xl"
			:src="img"/>
		<div class="font-bold">
			{{ title }}
		</div>
		<div>
			{{ description }}
		</div>
		<div class="w-full h-full flex -space-x-3">
			<task-avatar class="z-10"
				v-for="personImg in personsImages"
				:img="personImg"></task-avatar>
			<task-avatar @newClick="addPerson"
				class="z-0"
				dotted></task-avatar>
		</div>
	</div>
</template>

<style scoped>

</style>
