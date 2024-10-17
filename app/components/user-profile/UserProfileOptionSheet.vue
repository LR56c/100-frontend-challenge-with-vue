<script setup
	lang="ts">

import UserProfilePlanBadge
	from '~/components/user-profile/UserProfilePlanBadge.vue'
import { useUserProfile } from '~/components/user-profile/useUserProfile'

const store = useUserProfile()
</script>

<template>
	<div class="w-full h-full rounded-2xl shadow-lg bg-white">
		<template v-if="store.user">
		<div class="flex gap-2 items-center p-3">
			<img class="rounded-full w-8 h-8"
				:src="store.user.avatar"/>
			<div class="flex flex-col justify-center">
				<div class="flex gap-1">
				<div class="font-medium">{{ store.user.username }}</div>
			<user-profile-plan-badge :plan="store.user.plan"></user-profile-plan-badge>
				</div>
				<div class="font-light text-xs">{{ store.user.email }}</div>
			</div>
		</div>
		<hr/>
			<div class="flex flex-col gap-1 p-3">
			<user-profile-button label="Profile Settings" icon="hugeicons-profile"></user-profile-button>
			<user-profile-button label="Help Center" icon="medical-icon-i-information-us"></user-profile-button>
			<user-profile-button label="Billings" icon="streamline-money-wallet-money-payment-finance-wallet"></user-profile-button>
			<user-profile-button label="Upgrade Plan" icon="carbon-intent-request-upgrade"></user-profile-button>
			</div>
		<hr/>
			<div class="flex p-3">
			<user-profile-button label="Sign Out" icon="ooui-log-out-rtl"></user-profile-button>
			</div>
		</template>
		<template v-else>
			<div>No Data</div>
		</template>
	</div>
</template>

<style scoped>

</style>
