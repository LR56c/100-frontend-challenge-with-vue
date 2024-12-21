<script setup
	lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '~/lib/utils'

interface ChartsButtonProps {
	class?: HTMLAttributes['class']
	label :string
}

const props = defineProps<ChartsButtonProps>()
</script>

<template>
<button :class="cn('rounded flex items-center text-white bg-blue-600 uppercase py-1 px-2', props.class)">
	{{ label }}
</button>
</template>

<style scoped>

</style>