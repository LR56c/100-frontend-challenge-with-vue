<script setup
	lang="ts">
interface NotificationCommentTypeProps {
	username: string
	timeAgo: string
}

defineProps<NotificationCommentTypeProps>()
</script>

<template>
	<div>

		<div class="inline space-x-1">
			<span class="font-semibold">{{ username }}</span>
			<span>mentioned you in</span>
			<span class="font-semibold">comment</span>
		</div>
		<div class="text-gray-500 text-sm">{{ timeAgo }}</div>
	</div>
</template>

<style scoped>

</style>
