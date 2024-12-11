<script setup
	lang="ts">

import type { Tab } from '~/pages/search-filters/index.vue'

interface SearchFilterTabProps {
	tabs: Tab[]
}

const props = defineProps<SearchFilterTabProps>()

const selectedTab = defineModel<Tab | undefined>( {
	default: undefined
} )
</script>

<template>
	<div class="bg-white w-full rounded-2xl flex items-center p-2">
		<template v-for="t in tabs"
			:key="t.label">
			<button
				:data-selected="selectedTab.label === t.label"
				class="data-[selected=true]:bg-[#40c045] data-[selected=true]:text-white text-black bg-white w-full font-semibold rounded-2xl p-2 capitalize flex items-center justify-center disabled:cursor-not-allowed"
				:disabled="typeof t.component === 'boolean'">
				{{ t.label }}
			</button>
		</template>
	</div>
</template>

<style scoped>

</style>