<script setup
	lang="ts">
import ColorInput from 'vue-color-input'

const colorRef = ref('#716BDB')

const colorFormatRef = computed( ()=>{
	return colorRef.value.slice(1)
} )

const { open, sRGBHex } = useEyeDropper()

watch( sRGBHex, ( value ) => {
	colorRef.value = value
} )

const changeInput = ( event: Event ) => {
	const target = event.target as HTMLInputElement
	colorRef.value = `#${target.value}`
}
</script>

<template>
	<div class="bg-gray-200 w-screen h-screen flex items-center justify-center ">
	<div class="w-full max-w-lg bg-white rounded-2xl shadow-lg flex flex-col">
		<div class="py-2 px-4 font-medium text-xl">Brand colors</div>
		<hr/>
		<div class="px-4 py-2">Set up your brand color to personalize the</div>
		<div class="p-4 flex gap-4 items-center">
			<ClientOnly>
			<ColorInput format="hex string" class="relative rounded-2xl overflow-clip" position="bottom"
				v-model="colorRef" />
			</ClientOnly>
			<div class="w-28 relative">
				<span class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">#</span>
				<input type="text"
					@input="changeInput"
					:value="colorFormatRef"
					id="default-search"
					class="uppercase block w-full p-2 ps-6 text-sm border border-gray-300 bg-gray-100 rounded-2xl"/>
			</div>
			<button @click="open"><Icon name="material-symbols-colorize"/></button>
		</div>
		<div class="rounded-b-2xl bg-gray-300 w-full h-full p-4 flex gap-4">
			<BrandVisualizerExample1 v-model="colorRef" class="basis-[50%]"></BrandVisualizerExample1>
			<BrandVisualizerExample2 v-model="colorRef" class="basis-[50%]"></BrandVisualizerExample2>
		</div>
	</div>
</div>
</template>

<style scoped>
</style>
