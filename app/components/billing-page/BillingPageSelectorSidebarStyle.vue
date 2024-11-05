<script setup
	lang="ts">
import type { SelectorType } from '~/pages/billing-page/index.vue'

interface BillingPageSelectorSidebarStyleProps {
	items: Map<string, SelectorType>
	initial : string
}

defineProps<BillingPageSelectorSidebarStyleProps>()

const itemSelected = defineModel<string | undefined>( undefined )
</script>

<template>
<div class="h-96 bg-gray-50 w-40 rounded-l-2xl flex flex-col">
	<button v-for="([key,item],i) in items" :key="item.label"
		class="bg-gray-50 font-semibold py-2"
		:class="[{
			'bg-indigo-700 text-white' : item.label === itemSelected,
			'hover:bg-gray-300' : item.label !== itemSelected,
			'rounded-tl-2xl' : i === 0,
		}]"
		@click="itemSelected = item.label">
		{{ item.label }}
	</button>
</div>
</template>

<style scoped>

</style>