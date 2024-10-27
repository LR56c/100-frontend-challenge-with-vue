<script setup
	lang="ts">

interface Props {
	label: string
	icon: string
	type: 'text' | 'password' | 'email'
}

const { type, icon = '' } = defineProps<Props>()
const value               = defineModel<string>()
const typeRef             = ref( type )

const togglePassword = () => {
	typeRef.value = typeRef.value === 'text' ? 'password' : 'text'
}
</script>

<template>
	<div class="relative px-4 py-2 bg-blue-50 rounded-2xl flex items-center focus-within:outline focus-within:outline-2 focus-within:outline-blue-600">
		<input
			id="floating_filled"
			ref="input"
			v-model="value"
			:type="typeRef"
			class="w-full pt-5 font-bold text-sm text-gray-900 bg-blue-50 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
			placeholder=""/>
		<label for="floating_filled"
			class="absolute text-sm text-gray-500 duration-300 transform -translate-y-2 scale-75 top-4 z-10 origin-[0] start-4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">{{
			label
			}}</label>
		<Icon v-if="icon !== '' && type !== 'password'"
			class="text-gray-400"
			:name="icon"/>
		<template v-if="type === 'password'">
			<Icon v-if="typeRef === 'password'"
				class="text-gray-400"
				@click="togglePassword"
				name="ic-round-remove-red-eye"/>
			<Icon v-else
				class="text-gray-400"
				@click="togglePassword"
				name="ic-round-disabled-visible"/>
		</template>
	</div>
</template>

<style scoped>

</style>
