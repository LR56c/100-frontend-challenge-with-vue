<script setup
	lang="ts">

import type { HTMLAttributes } from 'vue'
import LeaderboardScoreStatus
	from '~/components/leaderboards/LeaderboardScoreStatus.vue'
import type { RateUser } from '~/components/leaderboards/useLeaderboards'
import { cn } from '~/lib/utils'

interface LeaderboardRateRowProps {
	index: number
	rate: RateUser
	class?: HTMLAttributes['class']
}

const props = defineProps<LeaderboardRateRowProps>()
</script>

<template>
	<div :class="cn('flex items-center py-1 gap-2 px-8', props.class)">
		<div class="flex flex-col items-center justify-center">
			<div class="text-xs">{{ index }}</div>
			<leaderboard-score-status :status="rate.status"></leaderboard-score-status>
		</div>
		<img class="w-8 h-8 rounded-full"
			:src="rate.avatar"/>
		<div class="text-sm">{{ rate.name }}</div>
		<div class="w-full text-end text-[#32ff00] font-medium">
			{{ rate.score }}
		</div>
	</div>
</template>

<style scoped>

</style>
