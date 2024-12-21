<script setup
	lang="ts">
import { cn } from '~/lib/utils'

interface ChartsLabelBadgeProps {
	color : string
	label : string
}

const props = defineProps<ChartsLabelBadgeProps>()
</script>

<template>
<div class="flex gap-2 items-center text-sm font-semibold">
	<div :class="cn('h-3 w-3 rounded', props.color)"></div>
	<span>{{ label }}</span>
</div>
</template>

<style scoped>

</style>