<script setup
	lang="ts">
import {
	PinInputInput,
	PinInputRoot
} from 'radix-vue'

interface CodeVerificationPinInputProps {
	length : number
}

defineProps<CodeVerificationPinInputProps>()

const value = defineModel<string[]>( {
	default: []
} )

</script>

<template>
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
			class="w-16 h-16 bg-gray-100 border border-gray-400 rounded text-center text-black focus:outline focus:outline-2 focus:outline-offset-0 focus:outline-gray-400"
		/>
	</PinInputRoot>
</template>