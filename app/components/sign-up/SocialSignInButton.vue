<script setup
	lang="ts">

interface Props {
	method: 'google' | 'email'
}

const { method } = defineProps<Props>()
const attrs      = useAttrs()

interface MethodType {
	label: string
	class: string
	icon: string
}

const methodType = new Map<string, MethodType>( [
	[ 'google', {
		label: 'Google',
		class: 'bg-white border border-gray-300',
		icon : 'i-dashicons-google'
	} ],
	[ 'email', {
		label: 'Email',
		class: 'bg-black text-white',
		icon : 'i-dashicons-email'
	} ]
] )

const selectedMethod = methodType.get( method ) ||
	methodType.get( 'email' )
</script>

<template>
	<button
		@click="$emit('onClick', $event)"
		class="flex gap-2 items-center w-full rounded-2xl p-2 justify-center"
		:class="[attrs, selectedMethod!.class]">
		<div class="basis-[25%] flex justify-end items-end">
			<Icon :name="selectedMethod!.icon"/>
		</div>
		<span class="basis-[60%] flex">
			Sign up with {{ selectedMethod!.label }}
		</span>
	</button>
</template>

<style scoped>

</style>
