import { ulid } from 'ulidx'

export type CreateTaskPriority = {
	icon: string
	value: string
}
export type CreateTaskUser = {
	id: string
	avatar: string
	name: string
}

export type CreateTask = {
	id: string
	title: string
	date: Date
	color: string
	assigns: CreateTaskUser[]
	priority: CreateTaskPriority
}

export const createTaskColors = ['green', 'purple', 'pink', 'orange'] as const
export type CreateTaskColors = typeof createTaskColors[number]
export const useCreateTask = defineStore( 'create-task', () => {

	const colors: CreateTaskColors[] = [ 'purple', 'green', 'orange', 'pink' ]

	const priorities: CreateTaskPriority[] = [
		{ icon: 'fluent-emoji-sun-behind-small-cloud', value: 'Low' },
		{
			icon : 'fluent-emoji-hand-with-index-finger-and-thumb-crossed',
			value: 'Medium'
		},
		{ icon: 'fluent-emoji-fire', value: 'High' }
	]

	const tasks = ref( new Map<string, CreateTask>() )

	const users = ref( new Map<string, CreateTaskUser>( [
		[ 'Julie Wright', {
			id    : ulid(),
			avatar: 'https://i.pravatar.cc/60?img=1',
			name  : 'Julie Wright'
		} ],
		[ 'Connie Dietz', {
			id    : ulid(),
			avatar: 'https://i.pravatar.cc/60?img=2',
			name  : 'Connie Dietz'
		} ],
		[ 'Richard Bright', {
			id    : ulid(),
			avatar: 'https://i.pravatar.cc/60?img=3',
			name  : 'Richard Bright'
		} ]
	] ) )

	const createTask = ( task: CreateTask ) => {
		tasks.value.set( task.id, task )
		console.log('creatd', tasks)
	}

	return {
		tasks     : readonly( tasks ),
		users     : readonly( users ),
		colors    : readonly( colors ),
		priorities: readonly( priorities ),
		createTask
	}
} )