<script setup
	lang="ts">
import type { PlayerProfileTeam } from '~/components/player-profile/usePlayerProfile'

interface PlayerProfileCareerHistoryItemProps {
	team : PlayerProfileTeam
}
const props = defineProps<PlayerProfileCareerHistoryItemProps>()
const sinceYear = props.team.since.getFullYear() +1
const untilYear = props.team.until ? props.team.until.getFullYear() +1 : undefined
</script>

<template>
<div class="flex items-center gap-2">
	<img class="h-6 w-6" :src="team.avatar"/>
	<div class="flex flex-col">
		<div class="font-semibold">{{ team.team }}</div>
		<div class="font-semibold text-sm text-gray-400">{{ sinceYear }} - {{ untilYear ? untilYear : 'current' }}</div>
	</div>
</div>
</template>

<style scoped>

</style>
