<script setup
	lang="ts">

import type { RateStatus } from '~/components/leaderboards/useLeaderboards'

interface LeaderboardScoreStatusProps {
	status: RateStatus
}

defineProps<LeaderboardScoreStatusProps>()
</script>

<template>
	<Icon
		v-if="status !== 'none'"
		:class="{
	'bg-[#32ff00]': status === 'up',
	'rotate-180 bg-red-600': status === 'down',
	'rotate-180 bg-gray-300': status === 'neutral'
}"
		size="20"
		name="material-symbols-arrow-drop-up-rounded"/>
</template>

<style scoped>

</style>
