<script setup
	lang="ts">
import type { NotificationUploadInfo } from '~/components/notifications/useNotification'

interface NotificationUploadTypeProps {
	username: string
	channel: string
	timeAgo: string
	attachments: NotificationUploadInfo[]
}

defineProps<NotificationUploadTypeProps>()
</script>

<template>
	<div class="flex flex-col gap-2">
		<div>

			<div class="inline-block space-x-1">
				<span class="font-semibold">{{ username }}</span>
				<span>upload {{ attachments.length }} attachment to</span>
				<span class="font-semibold">"{{ channel }}"</span>
				<span>Channel</span>
			</div>
			<div class="text-gray-500 text-sm">{{ timeAgo }}</div>
		</div>
		<div class="flex flex-col gap-2">
			<div class="border-2 border-gray-200 bg-gray-100 rounded-2xl"
				v-for="a in attachments">
				<div class="flex flex-col p-2 gap-2"
					v-if="a.type === 'blog'">
					<div class="flex gap-2">
						<img class="w-14 h-14 rounded-2xl"
							:src="a.uploadImage"/>
						<div class="flex flex-col">
							<div class="text-xs text-gray-400">{{ a.url }}</div>
							<div class="font-semibold text-sm text-purple-800">{{ a.title }}
							</div>
						</div>
					</div>
					<div class="line-clamp-2 text-xs text-gray-400">{{
						a.description
						}}
					</div>
				</div>
				<div v-if="a.type === 'image'"
					class="flex p-2 gap-2 w-full items-center">
					<img class="w-14 h-14 rounded-2xl"
						:src="a.uploadImage"/>
					<div class="flex flex-col justify-center w-full">
						<div class="font-semibold text-sm text-purple-800">{{ a.title }}
						</div>
						<div class="line-clamp-2 text-xs text-gray-400 space-x-1">
							<span>{{a.fileExtension }}</span>
							<span>-</span>
							<span>{{a.fileSize }}</span>
						</div>
					</div>
					<Icon size="20"
						name="ic-baseline-file-download"
						class="basis-[10%]"/>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>
