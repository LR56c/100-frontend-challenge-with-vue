<script setup
	lang="ts">
import type { CardInfo } from '~/pages/article-summary/index.vue'

const formatNumberPrefix = (value: number , prefix : string = 'k'): string => {
	if (value >= 1_000) {
		return `${Math.floor(value / 1_000)}${prefix}+`;
	} else {
		return `${value}+`;
	}
}

const formatNumber= (value: number, ranges: number[] = [1_000]): string => {
	const rangeValue = ranges.find( r => value >= r );
	if (rangeValue) {
		return `${rangeValue}+`;
	} else {
		return `${value}+`;
	}
}

interface ArticleSummaryCardProps {
	info : CardInfo
	prefix ?: boolean
}

const props = defineProps<ArticleSummaryCardProps>()

const valueFormat = props.prefix ? formatNumberPrefix(props.info.value) : formatNumber(props.info.value)
</script>

<template>
	<div class="flex flex-col justify-between items-center">
		<Icon class="text-white" size="40" :name="info.icon"/>
		<span class="text-lg text-white font-bold">{{ valueFormat }}</span>
		<span class="text-xs text-gray-400">{{ info.label }}</span>
	</div>
</template>

<style scoped>

</style>