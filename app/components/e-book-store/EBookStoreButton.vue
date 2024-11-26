<script setup
	lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '~/lib/utils'

interface EBookStoreButtonProps {
	class?: HTMLAttributes['class']
	label : string
}

const props = defineProps<EBookStoreButtonProps>()
</script>

<template>
<button :class="cn('flex items-center justify-center py-1 px-4 bg-gray-300 rounded-2xl', props.class)">
	{{ label }}
</button>
</template>

<style scoped>

</style>