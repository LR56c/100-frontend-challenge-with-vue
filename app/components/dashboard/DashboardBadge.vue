<script setup
	lang="ts">

import type { HTMLAttributes } from 'vue'
import { cn } from '~/lib/utils'

interface DashboardBadgeProps {
	class?: HTMLAttributes['class']
}
const props = defineProps<DashboardBadgeProps>()
</script>

<template>
<div :class="cn('rounded-full text-xs w-5 h-5 flex items-center justify-center px-2 py-1', props.class)">
	<slot/>
</div>
</template>

<style scoped>

</style>
