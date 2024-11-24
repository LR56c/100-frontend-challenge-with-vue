<script setup
	lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '~/lib/utils'

interface MyIconButtonColoredProps {
	class?: HTMLAttributes['class']
	disabled ?: boolean
}

const props = defineProps<MyIconButtonColoredProps>()
</script>

<template>
	<button :disabled :class="cn('relative rounded-full h-[52px] w-fit flex items-center', props.class)">
		<div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-indigo-400 rounded-full"></div>
		<Icon size="40"
			class="text-gray-200"
			name="material-symbols-add-circle-rounded"/>
	</button>
</template>

<style scoped>

</style>