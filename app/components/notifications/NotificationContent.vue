<script setup
	lang="ts">
import NotificationItem from '~/components/notifications/NotificationItem.vue'
import { useNotification } from '~/components/notifications/useNotification'

const { notificationRef,markAllAsSeen } = useNotification()
</script>

<template>
	<div class="shadow-lg bg-white w-full max-w-sm rounded-2xl flex flex-col">
		<div class="flex justify-between items-center p-4">
			<div class="font-bold text-xl">Notifications</div>
			<button
				:disabled="notificationRef.size === 0"
				@click="markAllAsSeen" class="font-thin text-gray-500">Mark as read</button>
		</div>
		<template v-if="notificationRef.size > 0">
		<NotificationItem v-for="[key,item] in notificationRef"
			:key
			:item></NotificationItem>
		<div class="flex p-4 mt-4">
			<button class="bg-indigo-600 text-white w-full py-2 rounded-2xl">See all
				notifications
			</button>
		</div>
		</template>
		<div class="flex items-center justify-center text-gray-500 px-8 pb-8 pt-4" v-else>
			You dont have any notifications yet
		</div>
	</div>
</template>

<style scoped>

</style>
