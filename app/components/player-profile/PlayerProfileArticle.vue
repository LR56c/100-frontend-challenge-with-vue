<script setup
	lang="ts">
import type { PlayerProfileArticles } from '~/components/player-profile/usePlayerProfile'

interface PlayerProfileArticleProps {
	article: PlayerProfileArticles
}

defineProps<PlayerProfileArticleProps>()
</script>

<template>
	<div class="flex items-center justify-between gap-4">
		<div class="flex flex-col gap-1">
			<div class="text-xs font-semibold text-gray-400">{{ useDateFormat(article.createdAt, 'MMMM D, YYYY') }}</div>
			<NuxtLink :to="article.link" external>
				<span class="font-semibold text-sm cursor-pointer">{{ article.title }}</span>
			</NuxtLink>
		</div>
		<img class="w-10 h-10 object-cover object-center rounded" :src="article.thumbnail"/>
	</div>
</template>

<style scoped>

</style>
