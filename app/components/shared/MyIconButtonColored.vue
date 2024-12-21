<script setup
	lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '~/lib/utils'

interface MyIconButtonColoredProps {
	class?: HTMLAttributes['class']
	disabled?: boolean
	icon: string
	backgroundClass?: string
	iconClass?: string
}

const {
	      icon = 'material-symbols-add-circle-rounded',
	      ...props
      } = defineProps<MyIconButtonColoredProps>()
</script>

<template>
	<button :disabled
		:class="cn('relative rounded-full h-[52px] w-fit flex items-center', props.class)">
		<div :class="cn('absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-indigo-400 rounded-full', props.backgroundClass)"></div>
		<Icon size="40"
			:class="cn('text-gray-200', props.iconClass)"
			:name="icon"/>
	</button>
</template>

<style scoped>

</style>