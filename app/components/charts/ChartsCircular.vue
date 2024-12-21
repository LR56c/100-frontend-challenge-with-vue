<script setup
	lang="ts">
import 'vue3-circle-progress/dist/circle-progress.css'
import CircleProgress from 'vue3-circle-progress'
</script>

<template>
	<div class="flex flex-col gap-4 items-center">
		<div class="flex w-full justify-between items-center">
			<Icon size="20"
				name="material-symbols-arrow-back-rounded"/>
			<charts-icon-button icon="mi-options-vertical"></charts-icon-button>
		</div>
		<circle-progress
			:size="140"
			:transition="100"
			:border-width="20"
			:border-bg-width="20"
			:percent="70"
			is-gradient
			class="text-xl font-semibold"
			show-percent
			:gradient="{
        angle: 0,
        startColor: '#2646f9',
        stopColor: '#b937fb'
    }"/>
		<span class="text-2xl font-bold">My storage</span>
		<div class="flex gap-8 justify-between items-center">
			<div class="flex flex-col">
				<charts-label-badge color="bg-blue-600"
					label="Used"></charts-label-badge>
				<charts-label-badge color="bg-gray-400"
					label="Total Space"></charts-label-badge>
			</div>
			<charts-button class="text-xs px-4 py-2" label="buy more"></charts-button>
		</div>
	</div>
</template>

<style lang="scss">
.current-counter {
	&::after {
		content: "%";
	}
}
</style>