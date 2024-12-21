<script setup
	lang="ts">
import type { GameProfileInfo } from '~/components/game-profile/useGameProfile'

interface GameProfileInfoCardProps {
	info: GameProfileInfo
}

defineProps<GameProfileInfoCardProps>()
</script>

<template>
	<div class="rounded w-full h-16 flex flex-col border border-gray-800 justify-center items-center">
		<div class="flex gap-1 items-center">
			<Icon :name="info.avatar"/>
			<span class="text-sm text-gray-500">{{ info.name }}</span>
		</div>
		<span class="font-bold">{{ info.value }}</span>
	</div>
</template>

<style scoped>

</style>