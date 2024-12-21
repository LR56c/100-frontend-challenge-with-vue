<script setup
	lang="ts">
import type { GameProfileAchievements } from '~/components/game-profile/useGameProfile'
import MyProgress from '~/components/shared/MyProgress.vue'

interface GameProfileAchievementCardProps {
	achievement: GameProfileAchievements
}

defineProps<GameProfileAchievementCardProps>()
</script>

<template>
	<div class="rounded w-full h-20 flex border border-gray-800 p-1 items-center gap-1">
		<Icon size="40"
			:name="achievement.icon"/>
		<div class="w-full flex flex-col gap-1">
			<span class="text-sm">{{ achievement.name }}</span>
			<span class="text-xs text-gray-500">{{ achievement.description }}</span>
			<div class="flex w-full items-center gap-1">
				<my-progress
					:min="0"
					:max="100"
					class="h-2 bg-gray-400 basis-[90%]"
					class-indicator="bg-green-300"
					:model-value="achievement.progress"></my-progress>
				<span class="text-right basis-[15%] text-xs text-gray-400">{{ achievement.progress }}/{{ achievement.total }}</span>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>