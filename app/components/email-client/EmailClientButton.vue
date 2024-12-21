<script setup
	lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '~/lib/utils'

interface EmailClientButtonProps {
	class?: HTMLAttributes['class']
	label: string
	icon: string
}

const props = defineProps<EmailClientButtonProps>()
</script>

<template>
	<button :class="cn('flex items-center justify-center gap-2 py-2 w-full rounded-2xl bg-purple-600',props.class)">
		<Icon :name="icon"/>
		<span>{{ label }}</span>
	</button>
</template>

<style scoped>

</style>