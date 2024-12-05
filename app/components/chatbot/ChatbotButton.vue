<script setup
	lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '~/lib/utils'

interface ChatbotButtonProps {
	class?: HTMLAttributes['class']
	label: string
}

const props = defineProps<ChatbotButtonProps>()
</script>

<template>
	<button :class="cn('py-1 px-2 bg-gray-400 flex items-center justify-center rounded-2xl',props.class)">
		{{ label }}
	</button>
</template>

<style scoped>

</style>