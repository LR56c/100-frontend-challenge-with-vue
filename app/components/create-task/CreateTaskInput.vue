<script setup
	lang="ts">
interface CreateTaskInputProps {
	limit: number
	placeholder: string
	label?: string
}

const props = defineProps<CreateTaskInputProps>()

const inputValue = defineModel( {
	default: '',
	set( value ) {
		if ( value.length >= props.limit ) {
			return value.slice( 0, props.limit )
		}
		return value
	}
} )

const limit = computed( () => {
	const result = props.limit - inputValue.value.length
	return result < 0 ? 0 : result
} )
</script>

<template>
	<div class="w-full h-full relative text-[#727272] flex flex-col gap-1">
		<label v-if="label">{{ label }}</label>
		<div class="relative flex gap-2 items-center">
			<input type="text"
				required
				v-model="inputValue"
				class="block h-10 w-full p-2 placeholder:text-[#727272] text-sm text-white rounded-2xl focus:ring-white focus:border-white bg-[#2c2c2c] outline-none"
				:placeholder/>
			<div class="text-[#727272] flex items-center text-xs justify-center w-8 h-8 bg-[#3e3e3e] rounded">
				{{ limit }}
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>