<script setup
	lang="ts">

import { useDashboardUser } from '~/components/dashboard/useDashboardUser'

const store      = useDashboardUser()
const isExpanded = ref( false )
</script>

<template>
	<div class="w-full min-w-[596px] flex justify-between gap-4 bg-gray-800 rounded-2xl p-4 text-white">
		<div class="text-lg font-medium">Dashboard</div>
		<div class="flex gap-4 items-center">
			<button class="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200/20">
				<Icon size="20"
					name="material-symbols-notifications-outline"/>
			</button>
			<img
				v-if="store.user"
				class="rounded-full w-8 h-8"
				:src="store.user.avatar"/>
			<button @click="isExpanded = !isExpanded">
				<Icon
					size="20"
					:name="isExpanded ? 'ic-baseline-keyboard-arrow-up' : 'ic-baseline-keyboard-arrow-down'"
					class="ml-auto"
				/>
			</button>
		</div>
	</div>
</template>

<style scoped>

</style>
