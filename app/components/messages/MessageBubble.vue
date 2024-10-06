<script setup
	lang="ts">
import MessageAvatar from '~/components/messages/MessageAvatar.vue'
import { useMessage } from '~/components/messages/useMessage'

export interface MessageBubbleProps {
	id: string
	from: string
	to: string
	text: string
	image: string
	connectionStatus: boolean
}

defineProps<MessageBubbleProps>()

const store = useMessage()

</script>

<template>
	<div
		:class="[store.user === from ? 'justify-end' : 'justify-start']"
		class="flex w-full gap-2 items-center px-4">
		<template v-if="store.user === from">
			<div class="bg-orange-200 leading-4	text-sm p-2 rounded-2xl max-w-52">{{ text }}</div>
		</template>
		<template v-else>
			<message-avatar
				class-dot="w-2 h-2"
				class="w-6 h-6"
				:image
				:connection-status="connectionStatus"></message-avatar>
			<div class="bg-gray-200 leading-4	text-sm p-2 rounded-2xl max-w-52">{{ text }}</div>
		</template>
	</div>
</template>

<style scoped>

</style>
