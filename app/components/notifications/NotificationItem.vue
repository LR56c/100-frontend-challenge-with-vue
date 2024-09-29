<script setup
	lang="ts">
import NotificationCommentType
	from '~/components/notifications/notification-types/NotificationCommentType.vue'
import NotificationFriendType
	from '~/components/notifications/notification-types/NotificationFriendType.vue'
import NotificationGroupType
	from '~/components/notifications/notification-types/NotificationGroupType.vue'
import NotificationUploadType
	from '~/components/notifications/notification-types/NotificationUploadType.vue'
import NotificationAvatar
	from '~/components/notifications/NotificationAvatar.vue'
import { type Notification } from '~/components/notifications/useNotification'

interface NotificationItemProps {
	item: Notification
}

defineProps<NotificationItemProps>()

</script>

<template>
	<div
		:class="[item.seen ? 'bg-gray-100' : 'bg-white']"
		class="flex flex-col">
		<div class="flex p-3 gap-4">
			<div class="flex justify-center">
				<NotificationAvatar v-if="item.type === 'group'"
					color="cyan"
					:img="item.avatarImage">
					<Icon size="18"
						name="ic-baseline-groups-2"/>
				</NotificationAvatar>
				<NotificationAvatar v-else-if="item.type === 'comment'"
					color="orange"
					:img="item.avatarImage">
					<Icon size="14"
						class="scale-x-[-1]"
						name="ic-baseline-comment"/>
				</NotificationAvatar>
				<NotificationAvatar v-else-if="item.type === 'friend'"
					color="blue"
					:img="item.avatarImage">
					<Icon size="18"
						name="ic-round-person"/>
				</NotificationAvatar>
				<NotificationAvatar v-else-if="item.type === 'upload'"
					color="green"
					:img="item.avatarImage">
					<Icon size="14"
						class="rotate-45"
						name="ic-outline-attach-file"/>
				</NotificationAvatar>
			</div>
			<div class="flex flex-col h-full w-full">
				<NotificationGroupType v-if="item.type === 'group'"
					:time-ago="item.timeAgo"
					:username="item.username"
					:groupName="item.groupName"
				></NotificationGroupType>
				<NotificationCommentType
					v-else-if="item.type === 'comment'"
					:username="item.username"
					:time-ago="item.timeAgo"
				></NotificationCommentType>
				<NotificationFriendType v-else-if="item.type === 'friend'"
					:time-ago="item.timeAgo"
					:username="item.username"
				></NotificationFriendType>
				<NotificationUploadType v-else-if="item.type === 'upload'"
					:username="item.username"
					:channel="item.channel"
					:time-ago="item.timeAgo"
					:attachments="item.attachments"></NotificationUploadType>
			</div>
		</div>
		<hr/>
	</div>
</template>

<style scoped>

</style>
