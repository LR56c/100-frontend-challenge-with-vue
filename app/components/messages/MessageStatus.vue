<script setup
	lang="ts">

import MessageAvatar from '~/components/messages/MessageAvatar.vue'

export interface MessageStatusProps {
	image: string
	connectionStatus: boolean,
	name: string
}

const { name }    = defineProps<MessageStatusProps>()
const nameLimited = name.length > 8 ? name.substring( 0, 8 ) + '..' : name

</script>

<template>
	<div class="w-16 h-16 gap-1 rounded-full flex flex-col items-center justify-center">
		<message-avatar :connection-status="connectionStatus" :image></message-avatar>
		<div class="line-clamp-1 text-xs">{{ nameLimited }}</div>
	</div>
</template>

<style scoped>

</style>
