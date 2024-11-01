<script setup
	lang="ts">
import {
	Popover,
	PopoverContent,
	PopoverTrigger
} from '@/components/ui/popover'
import FriendRequestButton
	from '~/components/friend-request/FriendRequestButton.vue'
import type { FriendRequest } from '~/components/friend-request/useFriendRequest'

interface FriendRequestCardProps {
	request: FriendRequest
}

defineProps<FriendRequestCardProps>()

const emit = defineEmits<{
	declineRequest: [string]
	acceptRequest: [string]
}>()
</script>

<template>
	<div class="w-full h-fit p-2 border-2 border-gray-500/50 flex justify-between items-center rounded-2xl">
		<div class="flex gap-2">
			<img class="w-12 h-12 rounded-full object-cover object-center"
				:src="request.avatar"/>
			<div class="flex flex-col items-start justify-center">
				<div class="font-semibold">{{ request.name }}</div>
				<Popover>
					<PopoverTrigger>
						<div class="text-xs text-gray-500 font-semibold">
							{{ request.mutualFriends.length }} mutual friends
						</div>
					</PopoverTrigger>
					<PopoverContent class="bg-white border-2 border-black p-2 rounded-2xl w-32">
						<div v-for="friend in request.mutualFriends"
							:key="friend.id"
							class="text-sm font-semibold">
							{{ friend.name }}
						</div>
					</PopoverContent>
				</Popover>
			</div>
		</div>
		<div class="flex">
			<friend-request-button @click="emit('declineRequest', request.id)"
				icon="material-symbols-close-rounded" class="text-gray-500"
				label="decline"></friend-request-button>
			<friend-request-button @click="emit('acceptRequest', request.id)"
				icon="material-symbols-check-rounded" class="bg-[#80d7b3]" 
				label="confirm"></friend-request-button>
		</div>
	</div>
</template>

<style scoped>

</style>