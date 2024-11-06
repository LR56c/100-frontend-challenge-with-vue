<script setup
	lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '~/lib/utils'

interface ProgressBarDiagonalStripedProps {
	class?: HTMLAttributes['class']
	progressBarClass?: string
}

const props = defineProps<ProgressBarDiagonalStripedProps>()

const progressValue = defineModel( {
	default: 0
} )

const progressString = computed( () => {
	return progressValue.value + '%'
} )
</script>

<template>
	<div class="progress-bar"
		:class="cn('w-full h-3 bg-gray-200 rounded-2xl overflow-hidden',props.class)">
		<div
			:class="cn('transition-all duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]',props.progressBarClass)"
			class="progress"></div>
	</div>
</template>

<style scoped>
.progress {
	width: v-bind(progressString);
	height: 100%;
	background-image: linear-gradient(135deg, #3937fb 25%, transparent 25%, transparent 50%, #3937fb 50%, #3937fb 75%, transparent 75%, transparent);
	background-size: 20px 20px;
	animation: progress-animation 1s linear infinite;
}

@keyframes progress-animation {
	from {
		background-position: 0 0;
	}
	to {
		background-position: 20px 0;
	}
}
</style>