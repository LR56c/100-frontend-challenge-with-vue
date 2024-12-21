<script setup
	lang="ts">
interface ProfileSettingsTextAreaProps {
	label: string
	placeholder: string
	max: number
}

const modelValue = defineModel<string | undefined>( {
	default: undefined
} )

const props = defineProps<ProfileSettingsTextAreaProps>()

const handleInput = ( event: Event ) => {
	const target     = event.target as HTMLInputElement
	if ( target.value.length > props.max ) {
		target.value = target.value.slice( 0, props.max )
	}
	modelValue.value = target.value
}

const charactersRemaining = computed(
	() => props.max - ( modelValue.value?.length ?? 0 ) )
</script>

<template>
	<div class="flex flex-col w-full h-full gap-2">
		<div class="relative h-20 w-full">
			<textarea
				v-model="modelValue"
				@input="handleInput"
				id="floating_outlined"
				:placeholder
				class="resize-none h-20 ps-3 pt-2 w-full text-sm dark:text-gray-100 text-gray-900 border border-gray-400 rounded-2xl bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-[#0600fe] dark:focus:border-indigo-400 peer"
			></textarea>
			<label for="floating_outlined"
				class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-1 z-10 origin-[0] bg-gray-100 dark:bg-gray-950 px-2 peer-focus:px-2 peer-focus:text-[#0600fe] dark:peer-focus:text-indigo-400 peer-focus:top-1 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-2">
				{{ label }}
			</label>
		</div>
		<div class="flex items-center justify-between">
			<div></div>
			<div class="text-xs font-semibold text-gray-400">
				Characters remaining:
				<span class="font-bold text-gray-500">{{ charactersRemaining }}</span>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>