<script setup
	lang="ts">
import SleepDataStatusIcon from '~/components/sleep-app/SleepDataStatusIcon.vue'
import type { SleepStatusType } from '~/components/sleep-app/useSleepApp'

interface SleepDataStatusProps {
	value : SleepStatusType
}
const props = defineProps<SleepDataStatusProps>()
const valueArray = props.value.value.split(' ')
</script>

<template>
<div class="w-full bg-gray-500/75 rounded-2xl p-2">
	<div class="flex items-center justify-between text-gray-400/75">
		<div>{{ value.name }}</div>
		<Icon name="material-symbols-info-outline-rounded"/>
	</div>
	<div class="flex gap-2">
		<div v-for="v in valueArray"
			:key="v">
			<span class="font-bold text-2xl">{{ v.slice(0,v.length - 1) }}</span>
			<span class="text-xs">{{ v.at(-1) }}</span>
		</div>
	</div>
	<sleep-data-status-icon :status="value.status"></sleep-data-status-icon>
</div>
</template>

<style scoped>

</style>
