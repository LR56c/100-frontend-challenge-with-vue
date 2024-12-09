<script setup
	lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '~/lib/utils'

interface MyDevicesButtonProps {
	label: string
	icon?: string
	class?: HTMLAttributes['class']
}

const props = defineProps<MyDevicesButtonProps>()
</script>

<template>
	<button :class="cn('w-full gap-2 hover:bg-purple-100 rounded px-2 py-1 flex items-center', props.class)">
		<Icon v-if="icon"
			:name="icon"/>
		<span>
	{{ label }}
	</span>
	</button>
</template>

<style scoped>

</style>