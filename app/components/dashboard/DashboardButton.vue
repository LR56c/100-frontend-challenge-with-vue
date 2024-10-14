<script setup
	lang="ts">

import type { HTMLAttributes } from 'vue'
import { cn } from '~/lib/utils'

export interface DashboardButtonProps {
	icon ?: string
	label : string
	class?: HTMLAttributes['class']
}
const props = defineProps<DashboardButtonProps>()
</script>

<template>
<button :class="cn('text-sm bg-gray-700 rounded-2xl w-fit flex items-center justify-center py-1 px-3 gap-2 hover:bg-gray-600', props.class)">
	<Icon v-if="icon" :name="icon"/>
	<span>{{ label }}</span>
</button>
</template>

<style scoped>

</style>
