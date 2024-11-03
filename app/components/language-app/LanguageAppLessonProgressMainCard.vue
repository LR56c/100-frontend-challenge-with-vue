<script setup
	lang="ts">
import type { HTMLAttributes } from 'vue'
import MyProgress from '~/components/shared/MyProgress.vue'
import { cn } from '~/lib/utils'

interface LanguageAppLessonProgressCardProps {
	class?: HTMLAttributes['class']
	icon?: string
	image?: string
	label: string
	progress: number
}

const props = defineProps<LanguageAppLessonProgressCardProps>()

const progressValue = ref( props.progress )
</script>

<template>
	<div :class="cn('w-full flex bg-white rounded-2xl items-center p-2 gap-2 text-white', props.class)">
		<Icon class="drop-shadow-2xl"
			size="40"
			v-if="icon"
			:name="icon"/>
		<img class="drop-shadow-2xl"
			v-if="image"
			:src="image"/>
		<div class="flex flex-col w-full">
			<span class="text-sm font-semibold">{{ label }}</span>
			<div class="w-full flex items-center gap-2">
				<MyProgress
					:max="100"
					class="bg-purple-400/50 h-1"
					class-indicator="bg-white"
					v-model="progressValue"/>
				<span class="text-xs font-semibold">{{ progressValue }}%</span>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>