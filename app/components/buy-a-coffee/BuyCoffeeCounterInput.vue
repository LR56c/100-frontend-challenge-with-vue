<script setup
	lang="ts">
import { z } from 'zod'

interface BuyCoffeeCounterInputProps {
	value?: number
	name: string
}

const props = defineProps<BuyCoffeeCounterInputProps>()

const emit = defineEmits<{
	pay: [number]
}>()

const {
	      value: inputValue,
	      errorMessage,
	      handleBlur,
	      handleChange,
	      meta
      } = useField( props.name, toTypedSchema( z.number( {
		message: 'Please enter a valid number'
	} )
                                                .min( 0.25, {
	                                                message: 'The amount cannot be less than $0.25'
                                                } )
                                                .max( 100, {
	                                                message: 'The amount cannot exceed $100'
                                                } )
), {
	initialValue: props.value
} )

const m               = toRef( meta )
const helpTextVisible = ref( false )
const helpText        = computed(
	() => helpTextVisible.value && !errorMessage.value )

const handleFocus = () => {
	helpTextVisible.value = true
}
</script>

<template>
	<div class="flex flex-col gap-2">
		<span class="text-sm">Support for {{selected}}</span>
		<div
			:class="[errorMessage ? 'border-red-500': 'has-[:focus]:border-[#2b7b46] border-gray-200']"
			class="flex items-center text-zinc-400 gap-2 text-sm border rounded-2xl">
			<input type="number"
				required
				id="default-number"
				placeholder="Price"
				v-model="inputValue"
				@focus="handleFocus"
				@blur="handleBlur"
				@change="handleChange"
				class="w-24 rounded-2xl text-black placeholder-text-zinc-400 ps-4 outline-none"/>
			<span>$</span>
			<button
				:disabled="!inputValue || Boolean(errorMessage)"
				@click="emit('pay', inputValue)"
				class="bg-[#2b7b46] text-white py-1 px-8 rounded-2xl disabled:bg-gray-300">
				Pay
			</button>
		</div>
		<span v-if="helpText"
			class="text-xs">form 0.25 to 100$</span>
		<span class="text-xs text-red-500">{{ errorMessage }}</span>
	</div>
</template>

<style scoped>

</style>
