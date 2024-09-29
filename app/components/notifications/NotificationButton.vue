<script setup
	lang="ts">

import NotificationContent
	from '~/components/notifications/NotificationContent.vue'
import { useNotification } from '~/components/notifications/useNotification'
import {
	Popover,
	PopoverContent,
	PopoverTrigger
} from '~/components/ui/popover'

const store = useNotification()
</script>

<template>
	<Popover>
		<PopoverTrigger as-child>
			<button class="relative w-8 h-8 rounded-full shadow-lg flex justify-center items-center">
				<span v-if="store.seenCount > 0"
					class="absolute z-10 top-2 right-2 w-1.5 h-1.5 bg-rose-500 rounded-full"></span>
				<Icon
					:class="[store.seenCount > 0 ? 'opacity-70' : 'opacity-20']"
					size="20"
					name="ic-baseline-notifications-none"/>
			</button>
		</PopoverTrigger>
		<PopoverContent class="w-full p-0 border-0 rounded-2xl overflow-clip">
			<NotificationContent></NotificationContent>
		</PopoverContent>
	</Popover>
</template>

<style scoped>

</style>
