<script setup
	lang="ts">
import {
	Popover,
	PopoverContent,
	PopoverTrigger
} from '@/components/ui/popover'
import UserProfileOptionSheet
	from '~/components/user-profile/UserProfileOptionSheet.vue'
import UserProfilePlanBadge
	from '~/components/user-profile/UserProfilePlanBadge.vue'
import { useUserProfile } from '~/components/user-profile/useUserProfile'

const store = useUserProfile()
</script>

<template>
	<div class="bg-gray-200 w-screen h-screen flex items-center justify-center">
		<Popover>
			<PopoverTrigger as-child>
				<div v-if="store.user"
					class="cursor-pointer w-full max-w-64 p-3 bg-white rounded-2xl shadow-lg flex justify-between items-center">
					<div class="flex gap-2 items-center">
						<img class="rounded-full w-8 h-8"
							:src="store.user.avatar"/>
						<div class="font-medium">{{ store.user.username }}</div>
						<user-profile-plan-badge :plan="store.user.plan"></user-profile-plan-badge>
					</div>
					<Icon size="16" name="mi-options-horizontal"/>
				</div>
			</PopoverTrigger>
			<PopoverContent class="w-64 border-0 p-0 mt-4 rounded-2xl shadow-none">
				<UserProfileOptionSheet></UserProfileOptionSheet>
			</PopoverContent>
		</Popover>
	</div>
</template>

<style scoped>

</style>
