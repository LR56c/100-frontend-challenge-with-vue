<script setup
	lang="ts">
import ColorInput from 'vue-color-input'

const colorInput = templateRef( 'color' )
const modelValue = defineModel<string>( {
	default: ''
} )

const openColorPicker = () => {
	if ( colorInput.value ) {
		colorInput.value.pickStart()
	}
}
</script>

<template>
	<button
		@click="openColorPicker"
		class="w-28 h-8 flex items-center justify-center rounded-2xl text-sm text-white"
		:class="[modelValue ? 'button-sync':'bg-gray-500']">
		<ColorInput
			ref="color"
			format="hex string"
			position="bottom"
			class="absolute -z-10"
			v-model="modelValue"/>
		<span :class="[modelValue?'uppercase':'']">{{
				modelValue
					? modelValue
					: 'Select Color'
			}}</span>
	</button>
</template>

<style scoped>
.button-sync {
	background-color: v-bind(modelValue);
}
</style>