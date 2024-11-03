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
	<div :class="cn('cursor-pointer w-full flex flex-col bg-white rounded-2xl p-2 gap-2', props.class)">
		<div class="flex w-full items-center gap-2">
			<Icon class="drop-shadow-2xl"
				size="20"
				v-if="icon"
				:name="icon"/>
			<img class="drop-shadow-2xl"
				v-if="image"
				:src="image"/>
			<span class="text-sm font-semibold">{{ label }}</span>
		</div>
		<span class="text-xs font-semibold">{{ progressValue }}% Completed</span>
		<MyProgress
			:max="100"
			class="bg-gray-300 h-1.5"
			class-indicator="bg-purple-600"
			v-model="progressValue"/>
	</div>
</template>

<style scoped>

</style>