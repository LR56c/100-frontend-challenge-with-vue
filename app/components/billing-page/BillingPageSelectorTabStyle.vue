<script setup
	lang="ts">
import type { SelectorType } from '~/pages/billing-page/index.vue'

interface BillingPageSelectorTabStyleProps {
	items: Map<string, SelectorType>
	initial : string
}

defineProps<BillingPageSelectorTabStyleProps>()

const itemSelected = defineModel<string | undefined>()
</script>

<template>
<div class="flex">
	<button v-for="([key,item],i) in items" :key="item.label"
		class="bg-gray-100 font-semibold w-40 py-2"
		:class="[{
			'bg-indigo-700 text-white' : item.label === itemSelected,
			'hover:bg-gray-300' : item.label !== itemSelected,
			'rounded-tl-2xl' : i === 0,
			'rounded-tr-2xl' : i === items.size - 1
		}]"
	@click="itemSelected = item.label">
		{{ item.label }}
	</button>
</div>
</template>

<style scoped>

</style>