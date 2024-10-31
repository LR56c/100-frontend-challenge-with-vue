<script setup
	lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '~/lib/utils'

interface NotificationBellProps {
	class?: HTMLAttributes['class']
	dotClass? :string
	icon ?: string
}

const props = defineProps<NotificationBellProps>()
</script>

<template>
	<div :class="cn('cursor-pointer relative flex items-center justify-center', props.class)">
		<div :class="cn('absolute bg-rose-500 bottom-0 z-10 right-0.5 w-1.5 h-1.5 rounded-full', props.dotClass)"></div>
		<Icon size="20"
			:name="icon ? icon : 'material-symbols-notifications-outline-rounded'"/>
	</div>
</template>

<style scoped>

</style>