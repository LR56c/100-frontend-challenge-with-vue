<script setup
	lang="ts">
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { usePlayerProfile } from '~/components/player-profile/usePlayerProfile'

const store = usePlayerProfile()

const player = store.getPlayerProfile( 'Dennis Olivarria' )

const getSocialMediaIcon = ( platform: string ) => {
	switch ( platform ) {
		case 'twitter':
			return 'devicon-twitter'
		case 'instagram':
			return 'logos-instagram-icon'
		default:
			return 'radix-icons-external-link'
	}
}
</script>

<template>
	<div class="bg-purple-100 w-screen h-screen flex flex-col items-center justify-center">
		<div v-if="player"
			class="relative w-full max-w-xs bg-white min-h-[500px] rounded-2xl flex flex-col">
			<div class="relative w-full h-40">
				<button class="absolute w-6 h-6 bg-white rounded-full top-[5%] right-[5%] flex items-center justify-center">
					<Icon class="h-5 text-indigo-800"
						size="16"
						name="material-symbols-android-camera"/>
				</button>
				<img class="w-full h-40 rounded-t-2xl object-cover object-center"
					:src="player.banner"/>
			</div>
			<div class="relative flex w-full justify-between py-2 px-4">
				<div class="absolute bottom-4 border-2 border-white w-24 h-24 bg-white rounded-full left-[5%]">
					<div class="absolute -bottom-2 -right-2 rounded-full">
						<Icon size="35"
							class="text-white"
							name="pajamas-partner-verified"/>
						<div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-white rounded-full"></div>
						<div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full">
							<Icon size="25"
								class="text-indigo-800"
								name="pajamas-partner-verified"/>
						</div>
					</div>
					<img class="w-full h-full rounded-full object-cover object-center"
						src="https://i.pravatar.cc/60?img=3"/>
				</div>
				<div></div>
				<button class="flex items-center justify-center w-6 h-6 bg-gray-200 rounded-full">
					<Icon class="h-5 text-gray-500"
						size="16"
						name="material-symbols-edit-outline"/>
				</button>
			</div>
			<div class="flex flex-col px-4 pb-2">
				<div class="flex flex-col gap-1">
					<div class="flex justify-between">
						<div class="font-bold text-lg">{{ player.name }}</div>
						<div class="flex gap-2">
							<NuxtLink v-for="social in player.socialMedia"
								:key="social.platform"
								class="flex items-center"
								:to="social.link"
								external>
								<Icon class="h-5"
									:name="getSocialMediaIcon(social.platform)"/>
							</NuxtLink>
						</div>
					</div>
					<div class="flex gap-1">
						<Badge v-for="tag in player.tags"
							:key="tag"
							class="bg-indigo-200 text-indigo-800">{{ tag }}
						</Badge>
					</div>
				</div>
				<div class="flex items-center pt-4 gap-1">
					<img class="h-6 w-6"
						:src="player.currentTeam.avatar"/>
					<div class="text-sm font-semibold">{{ player.currentTeam.team }} •
						#{{ player.currentTeam.rank }}
					</div>
				</div>
				<Accordion type="single"
					class="w-full"
					collapsible
					default-value="liked-articles">
					<AccordionItem class="border-0"
						value="info">
						<AccordionTrigger class="uppercase">
							<span class="text-indigo-700 font-semibold">info</span>
						</AccordionTrigger>
						<AccordionContent>
							<PlayerProfileInfo
								:info="player.info"
							></PlayerProfileInfo>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem class="border-0"
						value="career-history">
						<AccordionTrigger class="uppercase">
							<span class="text-indigo-700 font-semibold">career history</span>
						</AccordionTrigger>
						<AccordionContent class="flex flex-col gap-2">
							<PlayerProfileCareerHistoryItem
								v-for="team in player.previousTeams"
								:key="team.team"
								:team="team"></PlayerProfileCareerHistoryItem>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem class="border-0"
						value="liked-articles">
						<AccordionTrigger class="uppercase">
							<span class="text-indigo-700 font-semibold">Liked Articles</span>
						</AccordionTrigger>
						<AccordionContent class="flex flex-col gap-2">
							<template v-for="(article,i) in player.likedArticles"
								:key="article.id">
								<PlayerProfileArticle
									:article="article"
								></PlayerProfileArticle>
								<hr v-if="i !== player.likedArticles.length - 1"/>
							</template>
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>
