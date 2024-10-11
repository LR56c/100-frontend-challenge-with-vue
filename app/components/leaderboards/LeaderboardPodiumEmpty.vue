<script setup
	lang="ts">

import LeaderboardScoreStatus
	from '~/components/leaderboards/LeaderboardScoreStatus.vue'
import { cn } from '~/lib/utils'
interface LeaderboardPodiumEmptyProps {
	top: number
	boxClass ?: string
}

const props = defineProps<LeaderboardPodiumEmptyProps>()
</script>

<template>
	<div class="flex z-10 flex-col gap-2">
		<div :class="cn('flex flex-col bg-gray-900 rounded-t-2xl h-24 w-16 items-center pt-2', props.boxClass)">
		</div>
	</div>
</template>

<style scoped>

</style>
