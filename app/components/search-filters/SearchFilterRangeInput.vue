<script setup
	lang="ts">

import MyRangeSlider from '~/components/shared/MyRangeSlider.vue'

const formatter = new Intl.NumberFormat( 'es-US', {
	style                : 'currency',
	currency             : 'USD',
	minimumFractionDigits: 0
} )

interface SearchFilterRangeInputProps {
	label: string
	type: 'price' | 'surface'
	max : number
}

const props = defineProps<SearchFilterRangeInputProps>()
const noMax = 'No. Max'

const model = defineModel( {
	default: [ 0, 100 ]
} )

const maxText = computed( () => {
	const max =model.value[1]
	if( max === props.max ){
		return noMax
	}

	if(props.type === 'price'){
		return formatter.format( max )
	}
	return `${max}m`
} )
</script>

<template>
	<div class="flex flex-col w-full gap-2">
		<div class="flex justify-between">
			<span class="font-semibold">{{ label }}</span>
			<span v-if="type === 'price'">{{
					formatter.format( model[0] )
				}} - {{ formatter.format( model[1] ) }}</span>
			<span v-else>{{ model[0] }}m - {{ maxText }}</span>
		</div>
		<my-range-slider class="w-full" :max
			v-model="model"
			class-range="bg-[#40c045]"
			class-thumb="bg-[#40c045] w-3 h-3"
			class-track="bg-white h-1.5"></my-range-slider>
		<div class="flex justify-between text-sm">
			<span v-if="type === 'price'">$0</span>
			<span v-else>0m</span>
			<span>{{ maxText }}</span>
		</div>
	</div>
</template>

<style scoped>

</style>