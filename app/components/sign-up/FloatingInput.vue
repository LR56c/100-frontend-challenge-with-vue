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
	<div class="relative w-full px-4 py-2 rounded-2xl flex items-center focus-within:outline focus-within:outline-2 focus-within:outline-blue-600 ring-2 ring-gray-400">
		<input v-model="value"
			:type="typeRef"
			id="floating_outlined"
			class=" w-full text-sm text-gray-900 bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
			placeholder=""/>
		<label for="floating_outlined"
			class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-1 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-2">{{
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
