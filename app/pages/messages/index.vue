<script setup
	lang="ts">

import MessageChatEntry from '~/components/messages/MessageChatEntry.vue'
import MessageStatus from '~/components/messages/MessageStatus.vue'
import { useMessage } from '~/components/messages/useMessage'

const store = useMessage()

</script>

<template>
	<div class="w-screen h-screen bg-orange-300 flex justify-center items-center">
		<div class="relative bg-white rounded-2xl flex flex-col h-96 w-full max-w-sm">
			<div class="absolute cursor-not-allowed bottom-5 right-5 w-10 h-10 rounded-full bg-orange-600 flex items-center justify-center">
				<Icon class="text-white" size="20" name="material-symbols-add"/>
		</div>
			<div class="flex p-4 justify-between">
				<div class="font-bold text-lg">Messages</div>
				<div class="flex gap-2">
					<div class="cursor-pointer relative">
						<div class="absolute bg-rose-500 bottom-2 z-10 right-0.5 w-1.5 h-1.5 rounded-full"></div>
						<Icon size="20"
							name="material-symbols-notifications-outline-rounded"/>
					</div>
					<Icon size="20"
						class="cursor-pointer"
						name="cil-options"/>
				</div>
			</div>
			<div class="flex h-36 gap-4 pl-2 overflow-x-scroll">
				<message-status
					v-for="chat in store.connectedUsers"
					:key="chat.name"
					:connection-status="chat.connectionStatus"
					:image="chat.image"
					:name="chat.name"></message-status>
			</div>
			<div class="rounded-2xl h-full mt-4 overflow-y-scroll">
				<template v-for="([key,value], index) in store.chatsRef" :key>
					<template v-if="value.lastMessage">
						<message-chat-entry
							:connection-status="value.connectionStatus"
							:image="value.image"
							:name="value.name"
							:last-message="value.lastMessage"
						></message-chat-entry>
						<hr v-if="index !== store.chatsRef.size"/>
					</template>
				</template>
			</div>

		</div>
	</div>
</template>

<style scoped>

</style>
