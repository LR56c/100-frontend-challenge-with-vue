<script setup
	lang="ts">
import { vAutoAnimate } from '@formkit/auto-animate'
import FriendRequestCard
	from '~/components/friend-request/FriendRequestCard.vue'
import { useFriendRequest } from '~/components/friend-request/useFriendRequest'

const store = useFriendRequest()
</script>

<template>
	<div class="bg-[#c6ddaf] w-screen h-screen flex flex-col items-center justify-center">
	<div class="max-w-xl w-full bg-white rounded-2xl h-96 flex flex-col px-4 py-6 gap-6 border-2 border-black box-shadow">
		<div class="flex flex-col gap-2">
			<div class="text-xl font-semibold">Pending invitation</div>
			<div class="text-sm font-semibold">{{ store.requests.size }} friend user request</div>
		</div>
		<div v-auto-animate class="flex flex-col gap-4" >
		<friend-request-card
			v-for="([key, value], index) in store.requests"
			:key="key"
			:request="value"
			@decline-request="store.declineRequest(key)"
			@accept-request="store.acceptRequest(key)"
		></friend-request-card>
		</div>
	</div>
</div>
</template>

<style scoped>
.box-shadow {
	box-shadow: 10px 10px 0 rgba(0, 0, 0, 1);
	box-sizing: border-box;
}
</style>