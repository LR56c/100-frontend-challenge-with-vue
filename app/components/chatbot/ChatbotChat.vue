<script setup
	lang="ts">
import { useChatbot } from '~/components/chatbot/useChatbot'

const store    = useChatbot()
const { chat } = storeToRefs( store )
</script>

<template>
	<div class="flex flex-col w-full h-96 gap-4 pt-2">
		<span class="flex w-full justify-center text-sm font-semibold text-gray-500">{{ useDateFormat(new Date(), 'dddd, D, MMM') }}</span>
		<template
			v-for="message in chat.messages">
			<div v-if="message.type === 'button'" class="flex flex-wrap justify-end gap-2 px-2">
				<chatbot-button
					v-for="b in message.buttons"
					:class="b.class"
					:key="b.content"
					:label="b.content"></chatbot-button>
			</div>
			<chatbot-message
				v-else
				:from="message.from"
				:to="message.to"
				:text="message.text"
				:date="message.createdAt"></chatbot-message>
		</template>
	</div>
</template>

<style scoped>

</style>