<script setup
	lang="ts">

import AppIntegrationBadge
	from '~/components/app-integrations/AppIntegrationBadge.vue'
import AppIntegrationCard
	from '~/components/app-integrations/AppIntegrationCard.vue'
import AppIntegrationSearchInput
	from '~/components/app-integrations/AppIntegrationSearchInput.vue'
import { useAppIntegrations } from '~/components/app-integrations/useAppIntegrations'

const filterSelected = ref<string>( 'All Apps' )
const store = useAppIntegrations()

const changeFilterCategory = ( text: string ) => {
	filterSelected.value = text
	store.filterByCategory(filterSelected.value)
}

const filterName = ( name: string ) => {
	store.filterByName( name )
}
</script>

<template>
	<div class="bg-gray-100 w-screen h-screen flex flex-col items-center justify-center">
		<div class="relative w-full min-w-[920px] max-w-[920px] bg-gray-100 shadow-lg border border-black/60 min-h-[450px] rounded-2xl flex flex-col p-4 gap-4">
			<div class="flex w-full justify-between items-center">
				<div class="flex flex-col gap-1">
					<span class="text-lg font-semibold">Integrations</span>
					<span class="text-black/60">Connect all your tools for best results</span>
				</div>
				<app-integration-search-input placeholder="Search"
					@search="filterName"
					class="max-w-52 max-h-10"></app-integration-search-input>
			</div>
			<div class="flex w-full gap-4">
				<app-integration-badge
					v-for="(f, i) in store.filters"
					:data-selected="f === filterSelected"
					:key="f"
					@click="changeFilterCategory( f )"
					:label="f"
				></app-integration-badge>
			</div>
			<div class="flex w-full h-full flex-wrap gap-4">
				<app-integration-card
					v-for="[key,integration] in store.apps"
					:key
					:integration
				></app-integration-card>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>