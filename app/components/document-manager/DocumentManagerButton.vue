<script setup
	lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '~/lib/utils'

interface DocumentManagerButtonProps {
	icon : string
	label : string
	class?: HTMLAttributes['class']
}

const props = defineProps<DocumentManagerButtonProps>()
</script>

<template>
<button :class="cn('w-fit h-fit text-sm font-semibold flex text-white gap-2 rounded-2xl items-center py-2 px-4 bg-gray-200', props.class)">
	<Icon size="16" :name="icon"/>
	<span>{{ label }}</span>
</button>
</template>

<style scoped>

</style>