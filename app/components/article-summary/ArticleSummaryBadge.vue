<script setup
	lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '~/lib/utils'

interface ArticleSummaryBadgeProps {
	label: string
	class?: HTMLAttributes['class']
}

const props = defineProps<ArticleSummaryBadgeProps>()
</script>

<template>
<div :class="cn('bg-gray-700 rounded-2xl text-gray-200 px-1 py-0.5 text-xs', props.class)">
	{{ label }}
</div>
</template>

<style scoped>

</style>