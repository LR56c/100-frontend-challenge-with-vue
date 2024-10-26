<script setup
	lang="ts">
import type { PlayerProfileInfo } from '~/components/player-profile/usePlayerProfile'
import { Badge } from '~/components/ui/badge'

interface PlayerProfileInfoProps {
	info: PlayerProfileInfo
}

defineProps<PlayerProfileInfoProps>()

const getColorStatus = (status: string) => {
	switch (status) {
		case 'active':
			return 'bg-green-300 text-green-800'
		case 'injured':
			return 'bg-red-300 text-red-800'
		case 'retired':
			return 'bg-yellow-300 text-yellow-800'
		default:
			return 'bg-gray-300 text-gray-800'
	}
}

</script>

<template>
	<div class="flex flex-col gap-4">
		<div class="flex justify-between">
			<span class="font-semibold text-gray-500">College</span>
			<span class="font-semibold">{{ info.college }}</span>
		</div>
		<div class="flex justify-between">
			<span class="font-semibold text-gray-500">Position</span>
			<span class="font-semibold">{{ info.position }}</span>
		</div>
		<div class="flex justify-between">
			<span class="font-semibold text-gray-500">HT / WT</span>
			<span class="font-semibold">{{ info.height / 100 }}m / {{ info.weight }} kg</span>
		</div>
		<div class="flex justify-between">
			<span class="font-semibold text-gray-500">Birthplace</span>
			<span class="font-semibold">{{ info.birthPlace }}</span>
		</div>
		<div class="flex justify-between">
			<span class="font-semibold text-gray-500">Status</span>
			<Badge class="uppercase" :class="getColorStatus(info.status)">• {{ info.status }}</Badge>
		</div>
	</div>
</template>

<style scoped>

</style>
