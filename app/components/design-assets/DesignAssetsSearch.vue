<script setup
	lang="ts">
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/components/ui/select'

export interface DesignAssetsSearchProps {
	values: string[]
}

const props = defineProps<DesignAssetsSearchProps>()

const search   = ref( '' )
const selector = ref( props.values[0] )

const emit = defineEmits<{
	search: [ string, string ]
}>()

watchDebounced( [ search, selector ], () => {
	emit( 'search', search.value, selector.value )
}, {
	debounce: 500
} )

</script>

<template>
	<div class="flex items-center">
		<Select v-model="selector">
			<SelectTrigger class="bg-white border-0 rounded-l-2xl border-r border-black/30 pl-6 w-40 font-semibold">
				<SelectValue placeholder="Category"/>
			</SelectTrigger>
			<SelectContent class="rounded-2xl bg-white shadow-lg border-0">
				<SelectGroup>
					<SelectItem v-for="(option, i) in values"
						:value="option">
						{{ option }}
					</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
		<label for="default-search"
			class="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
		<div class="w-96 w-full relative">
			<div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
				<Icon class="text-gray-400"
					name="material-symbols-search"/>
			</div>
			<input type="search"
				required
				id="default-search"
				v-model="search"
				class="block w-full p-2.5 ps-8 text-sm text-gray-900 rounded-r-2xl focus:ring-blue-500 focus:border-blue-500"
				placeholder="Search"/>
		</div>
	</div>
</template>

<style scoped>

</style>
