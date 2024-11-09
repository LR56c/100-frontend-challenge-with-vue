<script setup
	lang="ts">
interface CalculateTipInputProps {
	label: string
}

defineProps<CalculateTipInputProps>()
const modelValue = defineModel<number>()

const handleInput = ( event: Event ) => {
	const target         = event.target as HTMLInputElement
	const sanitizedValue = target.value.replace( /\D/g, '' )
	modelValue.value     = sanitizedValue ? parseInt( sanitizedValue, 10 ) : 0
}

const handleKeydown = ( event: KeyboardEvent ) => {
	const allowedKeys = [ 'Backspace', 'Tab', 'ArrowLeft', 'ArrowRight',
		'Delete' ]
	const isNumber    = /^[0-9]$/.test( event.key )
	if ( !isNumber && !allowedKeys.includes( event.key ) ) {
		event.preventDefault()
	}
}
</script>

<template>
	<div class="relative">
		<input
			id="floating_outlined"
			:value="modelValue"
			@input="handleInput"
			@keydown="handleKeydown"
			class="h-10 ps-3 w-full text-sm text-gray-900 border border-gray-400 rounded-2xl bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"/>
		<label for="floating_outlined"
			class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-1 z-10 origin-[0] bg-gray-100 px-2 peer-focus:px-2 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-2">
			{{ label }}</label>
	</div>
</template>

<style scoped>

</style>