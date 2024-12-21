<script setup
	lang="ts">
interface AddShotSearchProps {
	placeholder: string
}

defineProps<AddShotSearchProps>()

const emit = defineEmits<{
	search: [ string ]
}>()

const search = ref( '' )

watchDebounced( search, () => {
		emit( 'search', search.value )
	},
	{
		debounce: 400
	}
)
</script>

<template>
	<div class="relative w-full flex">
		<div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
			<Icon class="text-zinc-400"
				name="material-symbols-search"/>
		</div>
		<input type="search"
			required
			id="default-search"
			v-model="search"
			class="block w-full p-2 ps-8 text-sm bg-gray-100 border-2 border-purple-600 placeholder:text-zinc-400 rounded-2xl"
			:placeholder/>
	</div>
</template>

<style scoped>

</style>
