<script setup
	lang="ts">
import type { SearchResult } from '~/components/search-filters/useSearchFilters'

const formatter = new Intl.NumberFormat( 'es-US', {
	style                : 'currency',
	currency             : 'USD',
	minimumFractionDigits: 0
} )

interface SearchFilterCardProps {
	result : SearchResult
}

defineProps<SearchFilterCardProps>()
</script>

<template>
<div class="flex flex-col rounded-2xl gap-2 p-2 bg-white">
	<nuxt-img class="object-cover object-center w-full h-32 rounded-2xl" :src="result.image"/>
	<span class="text-lg font-semibold">{{ formatter.format( result.price ) }}</span>
	<div class="flex items-center w-full gap-4">
		<div class="flex items-center gap-1">
			<Icon name="material-symbols-bed"/>
			<span>{{ result.rooms }} Beds</span>
		</div>
		<div class="flex items-center gap-1">
			<Icon name="bx-bxs-bath"/>
			<span>{{ result.bathrooms }} Bath</span>
		</div>
		<div class="flex items-center gap-1">
			<Icon name="fluent-slide-size-20-filled"/>
			<span>{{ result.surface }}m</span>
		</div>
	</div>
		<span class="text-sm text-gray-500 line-clamp-2">{{ result.address }}</span>
</div>
</template>

<style scoped>

</style>