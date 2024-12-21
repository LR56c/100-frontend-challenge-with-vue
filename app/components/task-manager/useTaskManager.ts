import { ulid } from 'ulidx'
import type { TimeValue } from '~/components/task-manager/TaskManagerDateInput.vue'

export type Task = {
	id: string
	name: string
	icon: string
	startTime: Date
	endTime: Date
	timeReminder?: number
}

export type TimeRemainder = {
	value: number
	label: string
}

export const useTaskManager = defineStore( 'task-manager', () => {
	const date                            = new Date()
	const dateFormat                      = date.getFullYear() + '-' +
		( date.getMonth() + 1 ) +
		'-' + date.getDate()
	const currentDate                     = ref( dateFormat )
	const timesRemainder: TimeRemainder[] = [
		{ value: 5 * 60, label: '5 minutes before' },
		{ value: 15 * 60, label: '15 minutes before' },
		{ value: 30 * 60, label: '30 minutes before' }
	]
	const avatar                          = 'https://i.pravatar.cc/60?img=1'
	const tasks                           = ref( new Map<string, Task[]>( [
		[ dateFormat, [
			{
				id          : ulid(),
				name        : 'Doctor Appointment',
				icon        : 'maki-doctor',
				startTime   : new Date( 2024, 11, 12, 8, 30 ),
				endTime     : new Date( 2024, 11, 12, 9 ),
				timeReminder: 5 * 60
			},
			{
				id          : ulid(),
				name        : 'Daily stand-up',
				icon        : 'material-symbols-light-nest-cam-stand-outline',
				startTime   : new Date( 2024, 11, 12, 8, 30 ),
				endTime     : new Date( 2024, 11, 12, 9 ),
				timeReminder: 15 * 60
			},
			{
				id          : ulid(),
				name        : 'Gym',
				icon        : 'iconoir-gym',
				startTime   : new Date( 2024, 11, 12, 3, 30 ),
				endTime     : new Date( 2024, 11, 12, 5, 15 ),
				timeReminder: 30 * 60
			}
		] ]
	] ) )
	onMounted( () => {
		const days = 8
		Array.from( { length: days }, ( v, i ) => {
			const date = new Date()
			date.setDate( date.getDate() + i + 1 )
			const formated = date.getFullYear() + '-' + ( date.getMonth() + 1 ) +
				'-' + date.getDate()
			tasks.value.set( formated, [] )
		} )
	} )

	const getTasks = ( date: string ) => {
		return tasks.value.get( date ) || []
	}

	const addTask = ( props: {
		name: string
		startTime: TimeValue
		endTime: TimeValue,
		remainder?: number
	} ) => {
		const date         = new Date( currentDate.value )
		const currentTasks = tasks.value.get( currentDate.value ) || []
		const startDate    = new Date( date.getFullYear(), date.getMonth(),
			date.getDate(), props.startTime.hours, props.startTime.minutes )
		const endDate      = new Date( date.getFullYear(), date.getMonth(),
			date.getDate(), props.endTime.hours, props.endTime.minutes )
		const task: Task   = {
			id          : ulid(),
			name        : props.name,
			icon        : 'material-symbols-light-nest-cam-stand-outline',
			startTime   : startDate,
			endTime     : endDate,
			timeReminder: props.remainder
		}
		currentTasks.push( task )
		tasks.value.set( currentDate.value, currentTasks )
	}

	const removeTask = ( date: string, taskId: string ) => {
		const currentTasks = tasks.value.get( date ) || []
		tasks.value.set( date, currentTasks.filter( t => t.id !== taskId ) )
	}

	const editTask = ( date: string, taskId: string, task: Task ) => {
		const currentTasks = tasks.value.get( date ) || []
		const index        = currentTasks.findIndex( t => t.id === taskId )
		if ( index === -1 ) {
			return
		}
		currentTasks[index] = task
		tasks.value.set( date, currentTasks )
	}

	const changeCurrentDate = ( date: string ) => {
		currentDate.value = date
	}

	return {
		tasks,
		avatar,
		timesRemainder,
		tasksKeys: computed( () => Array.from( tasks.value.keys() ) ),
		currentDate,
		changeCurrentDate,
		addTask,
		removeTask,
		editTask,
		getTasks
	}
} )