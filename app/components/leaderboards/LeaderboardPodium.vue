<script setup
	lang="ts">
import LeaderboardScoreStatus
	from '~/components/leaderboards/LeaderboardScoreStatus.vue'
import type { RateStatus } from '~/components/leaderboards/useLeaderboards'
import { cn } from '~/lib/utils'

interface LeaderboardPodiumProps {
	top: number
	name: string
	score: number
	avatar: string
	status: RateStatus
	imgClass ?: string
	boxClass ?: string
}

const props = defineProps<LeaderboardPodiumProps>()
</script>

<template>
	<div class="flex z-10 flex-col items-center gap-2">
		<div class="flex flex-col items-center">
			<Icon v-if="top === 1" name="twemoji-crown"></Icon>
			<div v-else>{{ top }}</div>
			<leaderboard-score-status :status></leaderboard-score-status>
		</div>
		<img :class="cn('w-10 h-10 rounded-full', top < 4 ?'border-2 border-[#32ff00]' :'', props.imgClass)"
			:src="avatar"/>
		<div :class="cn('flex flex-col bg-[#32ff00] rounded-t-2xl text-black font-medium h-24 w-16 items-center pt-2', props.boxClass)">
			<div>{{ name }}</div>
			<div>{{ score }}</div>
		</div>
	</div>
</template>

<style scoped>

</style>
