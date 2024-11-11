<script setup
	lang="ts">

interface FlightTicketInfoTitleProps {
	label: string
	content: string
}

defineProps<FlightTicketInfoTitleProps>()
</script>

<template>
	<div class="flex flex-col items-center">
		<span class="text-cyan-700 font-bold">
			{{ label }}
		</span>
		<span class="text-xs text-black/75 font-bold">
			{{ content }}
		</span>
	</div>
</template>

<style scoped>

</style>