<script setup
	lang="ts">
interface FlightTicketDestinationProps {
	fromDate: string
	toDate: string
	fromCode: string
	toCode: string
	estimatedTime: string
	strokeColor ?: string
}

defineProps<FlightTicketDestinationProps>()
</script>

<template>
	<div class="items-end justify-center flex gap-4 w-full">
		<flight-ticket-info-title
			:label="fromCode"
			:content="fromDate"
		></flight-ticket-info-title>
		<div class="relative flex flex-col items-center justify-center pb-4">
			<Icon size="20"
				class="absolute top-[10%] text-cyan-700 rotate-90"
				name="ic-twotone-airplanemode-active"/>
			<div class="absolute w-1.5 h-1.5 rounded-full bg-cyan-700 -left-0.5 top-[60%] -translate-y-1/2"></div>
			<div class="absolute w-1.5 h-1.5 rounded-full bg-cyan-700 -right-0.5 top-[60%] -translate-y-1/2"></div>
			<svg width="100"
				height="50">
				<path d="M 0 50 Q 50 20, 100 50"
					:stroke="strokeColor ?? '#000'"
					stroke-width="1"
					fill="none"
					stroke-dasharray="3,3"/>
			</svg>
			<span class="text-xs text-black/75">{{ estimatedTime }}</span>
		</div>
		<flight-ticket-info-title
			:label="toCode"
			:content="toDate"
		></flight-ticket-info-title>
	</div>
</template>

<style scoped>
</style>