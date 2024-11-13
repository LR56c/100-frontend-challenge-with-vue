<script setup
	lang="ts">
interface WeatherAppInfoLabelProps {
	label :string
	value:string
}

defineProps<WeatherAppInfoLabelProps>()
</script>

<template>
	<div class="flex flex-col items-center">
		<span class="text-black/50 font-semibold text-sm">{{ label }}</span>
		<span class="text-sm font-semibold">{{ value }}</span>
	</div>
</template>

<style scoped>

</style>