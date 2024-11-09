<script setup
	lang="ts">
interface CalculateTipSelectorsProps {
	values: number[]
	label?: string
}

defineProps<CalculateTipSelectorsProps>()
const valueSelected = defineModel<number>( {
	default:  0
} )
const select        = ( value: number ) => {
	valueSelected.value = value
}
</script>

<template>
	<div class="flex flex-col w-full gap-2">
		<label v-if="label"
			class="font-bold text-lg">{{ label }}</label>
		<div class="flex w-full gap-4">
			<button
				v-for="(value,i) in values"
				:key="value"
				:class="[value === valueSelected ? 'bg-[#2a8b56] text-white focus:border focus:border-gray-400 outline-none' : 'bg-gray-100 border border-gray-400 text-gray-400 focus:border-green-600 outline-none']"
				class="flex text-sm items-center justify-center py-1 px-2 h-fit rounded-2xl"
				@click="select(value)">
				{{ value }}%
			</button>
		</div>
	</div>
</template>

<style scoped>

</style>