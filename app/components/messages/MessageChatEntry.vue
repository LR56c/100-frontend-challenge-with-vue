<script setup
	lang="ts">
import MessageAvatar from '~/components/messages/MessageAvatar.vue'
import {
	type Message,
	useMessage
} from '~/components/messages/useMessage'
import { parseUlid } from '~/lib/parseUlid'

const format = (date : Date)=> {
	const isOtherDay = date.getDay() !== new Date().getDay()
	const form =  isOtherDay ? 'd MMM ' : 'HH:mm'
	return useDateFormat(date, form)
}
export interface MessageChatEntryProps {
	image: string
	connectionStatus: boolean,
	name: string,
	lastMessage: Message
}

defineProps<MessageChatEntryProps>()

const store = useMessage()
</script>

<template>
	<NuxtLink :to="`messages/${name}`">
	<div class="w-full px-4 py-2 h-16 flex gap-2">
		<message-avatar :connection-status="connectionStatus" :image></message-avatar>
		<div class="flex flex-1 justify-center flex-col">
			<div class="font-medium text-sm">{{ name }}</div>
			<div class="text-xs text-gray-400 line-clamp-1">
				<span v-if="store.user === lastMessage.from">You: </span>
				{{ lastMessage.text }}
			</div>
		</div>
			<div class="text-sm text-gray-400">{{ format(parseUlid(lastMessage.id)) }}</div>
	</div>
	</NuxtLink>
</template>

<style scoped>

</style>
