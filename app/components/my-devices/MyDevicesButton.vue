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
	<button :class="cn('w-full rounded-2xl py-1 flex items-center justify-center', props.class)">
		<Icon v-if="icon"
			:name="icon"/>
		<span>
	{{ label }}
	</span>
	</button>
</template>

<style scoped>

</style>