<script setup
	lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '~/lib/utils'

interface PushNotificationButtonProps {
	label : string
	class?: HTMLAttributes['class']
}

const props = defineProps<PushNotificationButtonProps>()
</script>

<template>
<button :class="cn('py-1 px-4 font-semibold capitalize border border-gray-400 text-gray-400 rounded-2xl', props.class)">
	{{ label }}
</button>
</template>

<style scoped>

</style>