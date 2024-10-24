<script setup
	lang="ts">
import { toast } from 'vue-sonner'
import WorkspaceOptionsPopover
	from '~/components/create-workspace/WorkspaceOptionsPopover.vue'

interface WorkspaceMemberPreviewProps {
	id: string
	name: string
	email: string
	avatar : string
}
const props = defineProps<WorkspaceMemberPreviewProps>()

const workspaceOptions = ['Resend Invitation', 'Remove'] as const
export type WorkspaceOptions = typeof workspaceOptions[number]

const emit = defineEmits<{
	remove : [string]
}>()

const selectedOption = (option: WorkspaceOptions) => {
	if(option === 'Remove') {
		emit('remove', props.id)
	}
	else if(option === 'Resend Invitation') {
		toast('Invitation resent', {})
	}
}
</script>

<template>
<div class="flex gap-2 items-center justify-between">
	<div class="flex gap-2 items-center">
	<img :src="avatar" class="rounded-full w-10 h-10 object-center object-cover"/>
	<div class="flex flex-col">
		<div>{{ name }}</div>
		<div class="text-sm text-gray-400">{{ email }}</div>
	</div>
	</div>
	<workspace-options-popover
		@option-selected="selectedOption"
		:values="workspaceOptions"
	></workspace-options-popover>
</div>
</template>

<style scoped>

</style>
