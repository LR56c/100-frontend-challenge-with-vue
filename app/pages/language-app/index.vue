<script setup
	lang="ts">
import LanguageAppBottomNavigation
	from '~/components/language-app/LanguageAppBottomNavigation.vue'
import LanguageAppLessonProgressMainCard
	from '~/components/language-app/LanguageAppLessonProgressMainCard.vue'
import LanguageAppProfileBarInfo
	from '~/components/language-app/LanguageAppProfileBarInfo.vue'
import { useLanguageApp } from '~/components/language-app/useLanguageApp'

const store          = useLanguageApp()
const user           = store.userInfoLangSelected
const selectedLesson = store.userLangs.get( 'fr' ) || undefined
</script>

<template>
	<div class="bg-[#a953fe] w-screen h-screen flex flex-col items-center justify-center p-8">
		<div v-if="selectedLesson"
			class="relative w-full h-full min-h-[500px] max-h-[500px] max-w-xs bg-white rounded-t-2xl px-4 pt-4 flex flex-col">
			<language-app-profile-bar-info :avatar="user.avatar"
				class="mb-4"
				background-enabled
				:name="user.name"
				:label="String(selectedLesson.score)"></language-app-profile-bar-info>
			<div class="relative">
				<button class="cursor-pointer z-10 absolute bg-white shadow-lg -bottom-4 left-1/2 -translate-x-1/2 rounded-2xl flex items-center px-1 py-0.5 gap-1">
					<Icon class="text-purple-700"
						size="20"
						name="material-symbols-play-circle-rounded"/>
					<span class="text-sm text-purple-700 font-semibold">Continue</span>
				</button>
				<language-app-lesson-progress-main-card class="bg-purple-600"
					icon="twemoji-flag-france"
					:label="`${selectedLesson.lang} lesson`"
					:progress="store.totalProgress ?? 0"></language-app-lesson-progress-main-card>
			</div>
			<div class="relative w-full h-full flex flex-col gap-4 overflow-y-scroll no-scrollbar">
				<div class="text-sm font-bold mt-4">My lesson</div>
				<div class="grid grid-cols-2 gap-2">
					<language-app-lesson-progress-card v-for="lesson in selectedLesson.lessons"
						:key="lesson.name"
						class="shadow-lg"
						:icon="lesson.avatar"
						:label="lesson.name"
						:progress="lesson.progress"></language-app-lesson-progress-card>
				</div>
				<div class="text-sm font-bold">Leaderboards</div>
				<div class="flex flex-col gap-2 pb-4">
					<language-app-profile-bar-info v-for="user in selectedLesson.leaderboard"
						class="shadow-lg rounded-2xl p-1 cursor-pointer"
						:avatar="user.avatar"
						:name="user.name"
						:label="String(user.score)"></language-app-profile-bar-info>
				</div>
			</div>
		</div>
		<language-app-bottom-navigation class="z-30 bg-white w-full max-w-xs"></language-app-bottom-navigation>
	</div>
</template>

<style scoped>

</style>