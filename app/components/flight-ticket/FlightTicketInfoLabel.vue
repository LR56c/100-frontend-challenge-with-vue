<script setup
	lang="ts">
import { cn } from '~/lib/utils'

interface FlightTicketUserInfoLabelProps {
	label: string
	content: string
	labelClass ?: string
	contentClass ?: string
}

const props = defineProps<FlightTicketUserInfoLabelProps>()
</script>

<template>
	<div class="w-full flex flex-col items-center text-center">
		<span :class="cn('text-black/70 text-[10px] font-bold', props.labelClass )">
			{{ label }}
		</span>
		<span :class="cn('text-sm font-bold', props.contentClass)">
			{{ content }}
		</span>
	</div>
</template>

<style scoped>

</style>