<script setup
	lang="ts">

import {
	PinInputInput,
	PinInputRoot
} from 'radix-vue'

const value  = ref<string[]>( [] )
const length = 4

const addNumber = ( num: string ) => {
	if ( value.value.length < length ) {
		value.value = [ ...value.value, num ]
	}
}

const removeNumber = () => {
	value.value = value.value.slice( 0, -1 )
}
</script>

<template>
	<div class="flex flex-col items-center p-4 gap-4">
		<span class="text-black font-semibold text-xl">Log in via PIN</span>
		<PinInputRoot
			id="pin-input"
			v-model="value"
			placeholder=""
			type="number"
			class="w-full flex gap-2 items-center mt-1 justify-center"
		>
			<PinInputInput
				v-for="(id, index) in length"
				:key="id"
				:index="index"
				class="w-12 h-12  border border-black/50 rounded text-center text-black focus:outline focus:outline-2 focus:outline-offset-0 focus:outline-[#57933c]"
			/>
		</PinInputRoot>
		<button class="text-gray-400 underline text-sm">Cant login</button>
		<div class="h-56 w-full flex">
			<fingerprint-number-pad
				@add="addNumber"
				@remove="removeNumber"
			></fingerprint-number-pad>
		</div>
	</div>
</template>

<style scoped>

</style>