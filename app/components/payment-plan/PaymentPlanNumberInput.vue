<script setup
	lang="ts">
const inputValue = defineModel( {
	default: '1'
} )

const validateNumber = () => {
	const regex = /^[0-9]*$/

	if ( !( regex.test( inputValue.value ) &&
		( inputValue.value === '' || parseInt( inputValue.value ) > 0 ) ) )
	{
		inputValue.value = inputValue.value.slice( 0, -1 )
	}
}
</script>

<template>
	<input
		type="text"
		id="numberInput"
		v-model="inputValue"
		@input="validateNumber"
		class="w-8 h-9 border-b-2 border-b-black bg-gray-200 text-center"
	/>
</template>

<style scoped>

</style>