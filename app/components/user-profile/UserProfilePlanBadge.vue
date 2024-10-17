<script setup
	lang="ts">
import type { PlanType } from '~/components/user-profile/useUserProfile'

interface UserProfilePlanBadgeProps {
	plan: PlanType
}

defineProps<UserProfilePlanBadgeProps>()
</script>

<template>
	<div :class="[{
	'text-gray-950 bg-gray-300 border border-gray-950': plan === 'free',
	'text-purple-950 bg-purple-400 border border-purple-950': plan === 'pro'
}]"
		class="rounded-2xl text-xs flex justify-center items-center p-0.5 font-medium uppercase w-fit h-fit">
		{{ plan }}
	</div>
</template>

<style scoped>

</style>
