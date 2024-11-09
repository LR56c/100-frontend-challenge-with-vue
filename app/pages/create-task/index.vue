<script setup
	lang="ts">
import * as z from 'zod'
import { ulid } from 'ulidx'
import {
	createTaskColors,
	type CreateTaskPriority,
	type CreateTaskUser,
	useCreateTask
} from '~/components/create-task/useCreateTask'
import {
	FormField,
	FormItem,
	FormMessage
} from '@/components/ui/form'

const store = useCreateTask()

const users = computed<CreateTaskUser[]>(
	() => Array.from( store.users.values() ) )

const priorityValues = computed<CreateTaskPriority[]>(
	() => Array.from( store.priorities ) )

const colors = computed( () => store.colors as string[] )

const formSchema = toTypedSchema( z.object( {
	title   : z.string()
	           .min( 1, 'Title is required' )
	           .max( 56 ),
	date    : z.string()
	           .date( 'Date is required' ),
	color   : z.enum( createTaskColors, {
		message: 'Color is required'
	} )
	           .default( 'orange' ),
	users   : z.array( z.string() )
	           .default( [] ),
	priority: z.string( {
		message: 'Priority is required'
	} )
} ) )

const { handleSubmit, resetForm } = useForm( {
	validationSchema: formSchema
} )

const onSubmit = handleSubmit( ( values ) => {
	const usersToAdd : CreateTaskUser[] = users.value.filter( user => values.users.includes( user.id ) )
	store.createTask({
		id       : ulid(),
		title    : values.title,
		date     : new Date( values.date),
		color    : values.color,
		assigns    : usersToAdd,
		priority : values.priority as unknown as CreateTaskPriority
	})
	resetForm()
} )

const reset = () => {
	resetForm()
}
</script>

<template>
	<div class="w-screen h-screen bg-[#4d4d4d] flex flex-col gap-4 items-center justify-center">
		<form @submit="onSubmit"
			class="w-full max-w-sm bg-[#212121] gap-4 h-fit rounded-2xl shadow-lg flex flex-col p-4 justify-between">
			<span class="text-white text-xl font-semibold">Create a Task</span>
			<FormField v-slot="{ componentField }"
				name="title">
				<FormItem>
					<create-task-input
						label="Title"
						:limit="56"
						data-allow-mismatch
						placeholder="Input"
						v-bind="componentField"></create-task-input>
					<FormMessage class="text-red-700"/>
				</FormItem>
			</FormField>
			<FormField v-slot="{ componentField }"
				name="date">
				<FormItem>
					<create-task-input-date
						data-allow-mismatch
						v-bind="componentField"
						label="Date"></create-task-input-date>
					<FormMessage class="text-red-700"/>
				</FormItem>
			</FormField>
			<FormField v-slot="{ componentField }"
				name="color">
				<FormItem>
					<create-task-input-colors
						label="Color"
						data-allow-mismatch
						v-bind="componentField"
						:colors></create-task-input-colors>
					<FormMessage class="text-red-700"/>
				</FormItem>
			</FormField>
			<FormField v-slot="{ componentField }"
				name="users">
				<FormItem>
					<create-task-multi-input
						data-allow-mismatch
						v-model:data="users"
						v-bind="componentField"
						label="Assigned to"
					></create-task-multi-input>
					<FormMessage class="text-red-700"/>
				</FormItem>
			</FormField>
			<hr class="w-full border-[#3e3e3e]"/>
			<div class="w-full flex items-end gap-2">
				<FormField v-slot="{ componentField }"
					name="priority">
					<FormItem>
						<create-task-input-select
							data-allow-mismatch
							v-bind="componentField"
							label="Priority"
							v-model:values="priorityValues"
						></create-task-input-select>
						<FormMessage class="text-red-700"/>
					</FormItem>
				</FormField>
				<button type="button"
					@click="reset"
					class="w-48 h-10 text-lime-200">Cancel
				</button>
				<button type="submit"
					class="w-48 h-10 rounded-2xl bg-lime-200">Save Task
				</button>
			</div>
		</form>
		<div class="bg-[#212121] rounded-2xl flex flex-col w-full max-w-sm">
			<create-task-card v-for="[key,task] in store.tasks"
				:key="task.id"
				:task="task"></create-task-card>
		</div>
	</div>
</template>

<style scoped>

</style>