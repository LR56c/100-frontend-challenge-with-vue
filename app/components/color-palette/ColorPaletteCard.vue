<script setup
	lang="ts">
import { toast } from 'vue-sonner'

interface ColorPalleteCardProps {
	color: string
}

const props = defineProps<ColorPalleteCardProps>()

const { copy } = useClipboard()

const CustomDiv = defineComponent({
	props:{
		color: String
	},
	setup(props) {
		return () =>
			h('div', [
				h('span', 'Color '),
				h('span', `"${props.color}"`),
				h('span', ' copied to your clipboard')
			])
	}
})

const copyClip = () => {
	copy( props.color )
	toast(markRaw(CustomDiv),{
		componentProps:{
			color: props.color
		},
		position: 'top-center',
		class: 'p-2 rounded-2xl bg-gray-900 text-gray-400 border-0'
	})
}
</script>

<template>
	<div class="flex flex-col w-32 h-48 p-2 bg-white rounded-2xl shadow-lg">
		<div class="button-sync w-full h-40 rounded-2xl"></div>
		<button @click="copyClip"
			class="font-semibold uppercase text-center">{{ color }}</button>
	</div>
</template>

<style scoped>
.button-sync {
	background-color: v-bind(color);
}
</style>