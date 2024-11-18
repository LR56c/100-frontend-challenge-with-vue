<script setup
	lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '~/lib/utils'

interface UserSatisfactionButtonProps {
	class?: HTMLAttributes['class']
	label: string
}

const props = defineProps<UserSatisfactionButtonProps>()
</script>

<template>
<button :class="cn('flex rounded text-white font-semibold disabled:cursor-not-allowed disabled:opacity-50 w-full items-center justify-center py-2', props.class)">
	{{ label }}
</button>
</template>

<style scoped>

</style>