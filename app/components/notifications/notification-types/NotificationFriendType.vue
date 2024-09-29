<script setup
	lang="ts">

interface NotificationFriendTypeProps {
	username: string
	timeAgo: string
}

defineProps<NotificationFriendTypeProps>()
</script>

<template>
	<div class="flex flex-col gap-2">
		<div>
			<div
				class="inline space-x-1">
				<span class="font-semibold">{{ username }}</span>
				<span>send you a</span>
				<span class="font-semibold">friend request</span>
			</div>
			<div class="text-gray-500 text-sm">{{ timeAgo }}</div>
		</div>
		<div class="flex justify-between gap-2">
			<button class="rounded-2xl text-white bg-indigo-600 py-1 w-full">
				Accept
			</button>
			<button class="rounded-2xl bg-gray-300 py-1 w-full">Delete</button>
		</div>
	</div>
</template>

<style scoped>

</style>
