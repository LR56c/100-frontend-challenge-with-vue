<script setup
	lang="ts">
import { toast } from 'vue-sonner'
import ColorPaletteCard from '~/components/color-palette/ColorPaletteCard.vue'
import ColorPaletteSelector
	from '~/components/color-palette/ColorPaletteSelector.vue'
import { generatePalette } from '~/lib/colorPalette'

const mainColor    = ref<string>( '' )
const colorPalette = ref<string[]>( [] )

const generate = () => {
	if ( mainColor.value.length === 0 ) {
		toast( 'Select a color, please!')
	}
	else {
		const values       = generatePalette( mainColor.value )
		colorPalette.value = [ mainColor.value, ...values ]
	}
}
</script>

<template>
	<div class="bg-gray-100 w-screen h-screen flex flex-col items-center justify-center gap-12">
		<span class="text-4xl font-semibold">Generate Color Palette</span>
		<div class="flex gap-4 items-center">
			<client-only>
				<color-palette-selector v-model="mainColor"></color-palette-selector>
			</client-only>
			<button @click="generate"
				class="w-40 h-8 flex items-center justify-center rounded-2xl text-sm text-white bg-gray-900 gap-2">
				<Icon name="solar-pallete-2-bold"/>
				<span>Generate Palette</span>
			</button>
		</div>
		<div v-if="colorPalette.length"
			class="flex gap-2 h-fit items-end">
			<color-palette-card
				v-for="(color, index) in colorPalette"
				:class="[ index === 2 ? 'mb-8' : '' ]"
				:key="index"
				:color
			></color-palette-card>
		</div>
	</div>
</template>

<style scoped>

</style>