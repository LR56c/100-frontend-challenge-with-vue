<script setup
	lang="ts">
type NumPadType = 'add' | 'remove' | 'finger'
type NumPad = {
	num: string
	icon ?: string
	type: NumPadType
}
const nums: NumPad[] = [
	{ num: '1', type: 'add' },
	{ num: '2', type: 'add' },
	{ num: '3', type: 'add' },
	{ num: '4', type: 'add' },
	{ num: '5', type: 'add' },
	{ num: '6', type: 'add' },
	{ num: '7', type: 'add' },
	{ num: '8', type: 'add' },
	{ num: '9', type: 'add' },
	{ num: 'D', type: 'finger', icon: 'material-symbols-fingerprint' },
	{ num: '0', type: 'add' },
	{ num: 'B', type: 'remove', icon: 'material-symbols-cancel-presentation-sharp' },
]
const emit = defineEmits<{
	add: [string]
	remove: [void]
}>()

const handleClick = ( num: NumPad ) => {
	if ( num.type === 'add' ) {
		emit('add', num.num)
	} else if ( num.type === 'remove' ) {
		emit('remove')
	}
}
</script>

<template>
	<div class="grid grid-cols-3 w-full justify-items-center">
		<div v-for="num in nums"
			:key="num.num"
			class="p-2">
			<button @click="handleClick(num)"
				class="w-10 h-10 hover:rounded-full hover:bg-gray-300 text-lg text-[#57933c] rounded-2xl flex items-center justify-center">
				<Icon size="40" v-if="num.icon" :name="num.icon"/>
				<span v-else>{{ num.num }}</span>
			</button>
		</div>
	</div>
</template>

<style scoped>

</style>