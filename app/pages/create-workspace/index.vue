<script setup
	lang="ts">

import {
	useCreateWorkspace,
	type WorkspaceUser
} from '~/components/create-workspace/useCreateWorkspace'
import WorkspaceInput from '~/components/create-workspace/WorkspaceInput.vue'
import WorkspaceMemberPreview
	from '~/components/create-workspace/WorkspaceMemberPreview.vue'
import WorkspaceSelect from '~/components/create-workspace/WorkspaceSelect.vue'
import WorkspaceTagsInput
	from '~/components/create-workspace/WorkspaceTagsInput.vue'
import { toast } from 'vue-sonner'
const industries = [
	'Technology',
	'Manufacturing',
	'Health',
	'Education',
	'Finance',
	'Marketing',
	'Design',
	'Other'
]

const emails      = ref<string[]>( [] )
const userAdded   = ref<WorkspaceUser[]>( [] )
const store       = useCreateWorkspace()
const checkEmails = () => {
	const emailsExists : string[] = []
	for ( let i = 0; i < emails.value.length; i++ ){
		const email = emails.value[i]
		const user  = store.checkUser( email )
		if ( user ) {
			userAdded.value.push( user )
			emailsExists.push( email )
		}
	}
	emails.value = emailsExists
}

const memberRemoved = ( id: string ) => {
	const userIndex = userAdded.value.findIndex( ( user ) => user.id === id )
	const userEmailIndex = emails.value.findIndex( ( email ) => email === userAdded.value[userIndex].email )
	userAdded.value.splice( userIndex, 1 )
	emails.value.splice( userEmailIndex, 1 )
}
</script>

<template>
	<div class="bg-gray-200 w-screen h-screen flex flex-col items-center justify-center">
		<div class="w-full max-w-md bg-white px-4 py-6 min-h-[500px] rounded-2xl flex flex-col gap-8">
			<div class="font-semibold">Setup workspace</div>
			<workspace-input label="Workspace name"></workspace-input>
			<workspace-select
				label="Select your industry"
				:values="industries"
			></workspace-select>
			<hr class="border-2 border-gray-400 rounded-2xl"/>
			<div class="text-lg font-semibold">Add a workspace members</div>
			<div class="w-full flex gap-2">
				<workspace-tags-input @invite-click="checkEmails"
					v-model="emails"
					placeholder="Add members"></workspace-tags-input>
				<button @click="checkEmails"
					class="basis-[10%] h-fit bg-lime-600 py-2 px-4 text-white rounded-2xl flex items-center justify-center">
					Invite
				</button>
			</div>
			<workspace-member-preview
				v-for="member in userAdded"
				:key="member.email"
				@remove="memberRemoved"
				:id="member.id" :name="member.name" :email="member.email" :avatar="member.avatar"></workspace-member-preview>
			<button class="py-2 w-full rounded-2xl bg-lime-600 text-white flex items-center justify-center">Setup workspace</button>
		</div>
	</div>
</template>

<style scoped>

</style>
