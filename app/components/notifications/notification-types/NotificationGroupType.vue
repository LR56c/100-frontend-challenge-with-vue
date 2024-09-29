<script setup
	lang="ts">
interface NotificationGroupTypeProps {
	username: string
	groupName: string
	timeAgo: string
}

defineProps<NotificationGroupTypeProps>()
</script>

<template>
	<div>
		<div class="inline space-x-1">
			<span class="font-semibold">{{ username }}</span>
			<span>joined to</span>
			<span class="font-semibold">"{{ groupName }}"</span>
			<span>Group.</span>
		</div>
		<div class="text-gray-500 text-sm">{{ timeAgo }}</div>
	</div>
</template>

<style scoped>

</style>
