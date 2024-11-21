<script setup
	lang="ts">
import { useVirtualizer } from '@tanstack/vue-virtual'
import { useEmailClient } from '~/components/email-client/useEmailClient'

const store            = useEmailClient()
const selectedCategory = defineModel<string>( {
	default: 'inbox'
} )

const page = ref( 1 )

const allRows = computed( () => {
		return store.getEmailsByCategory( selectedCategory.value, page.value )
	}
)

const parentRef = ref<HTMLElement | null>( null )

const rowVirtualizerOptions = computed( () => {
	return {
		count           : allRows.value.length,
		getScrollElement: () => parentRef.value,
		estimateSize    : () => 10,
		overscan        : 5
	}
} )
const rowVirtualizer        = useVirtualizer( rowVirtualizerOptions )

const virtualRows = computed( () => rowVirtualizer.value.getVirtualItems() )

// const totalSize = computed( () => rowVirtualizer.value.getTotalSize() )
const onSearch = ( search: string ) => {
	store.searchEmails( search )
}
</script>

<template>
	<div class="flex flex-col h-full w-full bg-[#161616] rounded-tl-2xl rounded-br-2xl px-4 pt-4 gap-4">
		<div class="flex flex-col">
		<span class="font-bold text-lg capitalize">{{ selectedCategory }}</span>
		<span class="text-zinc-400 font-semibold text-sm">{{ allRows.length }} messages</span>
		</div>
		<email-client-search-input @search="onSearch"
			placeholder="Search"></email-client-search-input>
		<div
			ref="parentRef"
			class="w-full h-full overflow-y-scroll no-scrollbar space-y-4 pb-4">
			<div
				v-for="virtualRow in virtualRows"
				:key="virtualRow.key">
				<email-client-card
					:email="allRows[virtualRow.index]"
				></email-client-card>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>