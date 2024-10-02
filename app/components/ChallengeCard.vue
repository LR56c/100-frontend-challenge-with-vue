<script setup
	lang="ts">
export interface ChallengeCardProps {
	link: string
	img: string
	day: number
}

defineProps<ChallengeCardProps>()
</script>

<template>
	<NuxtLink :to="link">
		<div class="bg-gray-600 rounded-2xl p-2 flex flex-col items-center justify-center text-white gap-2">
			<div>Day {{ day }}</div>
			<div>{{ link.substring(1) }}</div>
			<div class="w-64 h-64 rounded-2xl overflow-hidden">
			<img class="transition-all hover:scale-125 object-cover w-64 h-64"
				:src="img"/>
			</div>
		</div>
	</NuxtLink>
</template>

<style scoped>

</style>
