<script setup
	lang="ts">
import {parseUlid} from '~/lib/parseUlid'
import {formatDate} from '~/lib/format-message-date'
import MessageAvatar from '~/components/messages/MessageAvatar.vue'
import MessageBubble from '~/components/messages/MessageBubble.vue'
import {
	type Chat,
	useMessage
} from '~/components/messages/useMessage'

const router = useRouter()
const route  = useRoute()
const name   = route.params.name

const chatRef = ref<Chat | null>( null )
const newMessageRef = ref('')
const store   = useMessage()
watch( () => route.params.name, ( name ) => {
	if ( !store.chatsRef.has( name ) ) {
		router.replace( '/' )
	}
	else {
		chatRef.value = store.chatsRef.get( name )
	}
}, {
	immediate: true
} )

async function onNewMessage() {
	const text = newMessageRef.value.trim()
	if (text.length > 0) {
		store.addMessage(name, text, true)
		newMessageRef.value = ''
		store.addMessage(name, await store.pickRandomComment(), false)
	}
}
</script>

<template>
	<div class="w-screen h-screen bg-orange-300 flex justify-center items-center">
		<div v-if="chatRef"
			class="bg-white rounded-2xl flex flex-col h-96 w-full max-w-sm">
			<div class="relative p-4 flex flex-col items-center justify-center">
				<div class="absolute pl-4 left-0 top-1/2 -translate-y-1/2">
					<NuxtLink to="/messages">
						<Icon size="20"
							name="material-symbols-arrow-back"/>
					</NuxtLink>
				</div>
				<div class="flex flex-col items-center gap-1">
					<message-avatar
						:connection-status="chatRef.connectionStatus"
						:image="chatRef.image"></message-avatar>
					<div>{{ name }}</div>
				</div>
			</div>
			<hr/>
			<div class="flex flex-1 flex-col gap-2 py-4 overflow-y-scroll">
				<template
					v-for="message in chatRef.messages"
					:key="message.id">
					<div class="flex items-center justify-center text-xs text-gray-400">{{ formatDate(parseUlid(message.id)) }}</div>
				<message-bubble
					:id="message.id"
					:from="message.from"
					:to="message.to"
					:text="message.text"
					:image="chatRef.image"
					:connection-status="chatRef.connectionStatus"></message-bubble>
				</template>
			</div>
			<div class="p-2">
			<input
				class="rounded-2xl py-1 px-2 w-full bg-gray-200 text-black"
				placeholder="Message"
				@keydown.enter="onNewMessage"
				type="text"
				v-model="newMessageRef"
			/>
			</div>
		</div>
		<div v-else
			class="bg-white rounded-2xl justify-center items-center flex flex-col h-96 w-full max-w-sm">
			Chat no encontrado
		</div>
	</div>
</template>

<style scoped>

</style>
