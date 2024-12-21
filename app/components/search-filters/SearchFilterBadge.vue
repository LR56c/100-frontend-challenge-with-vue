<script setup
	lang="ts">

import type { PropertySelect } from '~/components/search-filters/SearchFilterSaleTab.vue'

interface SearchFilterBadgeProps {
	property : PropertySelect
}

defineProps<SearchFilterBadgeProps>()
</script>

<template>
<button
	:class="[property.enabled ? 'bg-[#40c045] text-white' : 'bg-white text-gray-500']"
	class="bg-white text-gray-500 font-semibold rounded p-2 capitalize">
{{ property.value }}
</button>
</template>

<style scoped>

</style>