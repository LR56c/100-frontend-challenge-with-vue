<script setup
	lang="ts">

import ArticleSummaryBadge
	from '~/components/article-summary/ArticleSummaryBadge.vue'

export type CardInfo = {
	icon: string
	value: number
	label: string
}

type ArticleInfo = {
	image: string
	avatar: string
	name: string
	date: Date
	title: string
	badges: string[]
	likes: CardInfo
	comments: CardInfo
	awards: CardInfo
	// link: string
}

const articlesBadgeLabels = [
	'#technology',
	'#future',
	'#evolution',
	'#innovation'
]

const article: ArticleInfo = {
	image   : '/flower.jpg',
	avatar  : 'https://i.pravatar.cc/60?img=3',
	name    : 'Paul J. Yarnell',
	date    : new Date( 2024, 1, 24 ),
	title   : 'The rise of quantum computing: A paradigm shift in technology',
	badges  : articlesBadgeLabels,
	likes   : {
		icon : 'twemoji-sparkling-heart',
		value: 25_000,
		label: 'Love impressions'
	},
	comments: {
		icon : 'material-symbols-comment',
		value: 1_000,
		label: 'Comments'
	},
	awards  : {
		icon : 'fluent-emoji-trophy',
		value: 40,
		label: 'Internation Award'
	}
}
</script>

<template>
	<div class="bg-gray-100 w-screen h-screen flex flex-col items-center justify-center">
		<div class="w-full max-w-xs bg-black rounded-2xl min-h-[500px] max-h-[500px]">
			<img class="h-40 w-full object-cover object-center rounded-t-2xl"
				:src="article.image"/>
			<div class="flex flex-col p-4 gap-2">
				<div class="flex gap-2 items-center">
					<img class="border border-white object-center object-cover rounded-full w-8 h-8"
						:src="article.avatar"/>
					<div class="flex flex-col">
						<span class="text-white font-semibold">{{ article.name }}</span>
						<span class="text-xs text-gray-400">{{
								useDateFormat( article.date, 'D MMM. YYYY' )
							}}</span>
					</div>
				</div>
				<span class="text-white font-bold text-lg">{{ article.title }}</span>
				<div class="flex gap-1">
					<article-summary-badge v-for="badge in article.badges"
						:key="badge"
						:label="badge"></article-summary-badge>
				</div>
			</div>
			<div class="bg-blue-900/30 flex justify-between p-4">
			<article-summary-card-info prefix :info="article.likes"></article-summary-card-info>
			<article-summary-card-info :info="article.comments"></article-summary-card-info>
			<article-summary-card-info :info="article.awards"></article-summary-card-info>
			</div>
			<div class="flex items-center justify-center p-4">
			<button class="w-full text-white bg-[#5d01e0] rounded-2xl py-1">Read Article</button>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>