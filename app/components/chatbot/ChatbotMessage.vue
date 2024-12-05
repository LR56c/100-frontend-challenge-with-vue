<script setup
	lang="ts">
import { useChatbot } from '~/components/chatbot/useChatbot'

interface ChatbotMessageProps {
	from: string
	to: string
	text: string
	date: Date
}

const props = defineProps<ChatbotMessageProps>()

const store = useChatbot()

const isUser = computed( () => store.user === props.from )
</script>

<template>
	<div class="flex w-full gap-2 px-4">
		<div v-if="isUser"
			class="flex w-full justify-end bg-blue-200 shadow-lg leading-4	text-sm p-2 rounded-2xl max-w-52">
			{{ text }}
		</div>
		<template v-else>
			<div class="h-6 w-6 border border-[#336afe] rounded-full p-1 flex items-center justify-center">
				<Icon
					size="16"
					class="text-[#336afe]"
					name="teenyicons-chatbot-solid"/>
			</div>
			<div class="flex flex-col w-full gap-2">
				<div class="bg-white shadow-lg leading-4 text-sm p-2 rounded-2xl max-w-52">
					{{ text }}
				</div>
				<span class=" text-xs font-semibold text-gray-500">{{
						useDateFormat( date, 'hh:mm A' )
					}}</span>
			</div>
		</template>
	</div>
</template>

<style scoped>

</style>