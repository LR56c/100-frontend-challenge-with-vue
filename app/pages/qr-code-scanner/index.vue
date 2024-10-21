<script setup
	lang="ts">
import type {
	Level,
	RenderAs
} from 'qrcode.vue'
import QrcodeVue from 'qrcode.vue'

const value      = ref( 'qrcode' )
const level      = ref<Level>( 'M' )
const renderAs   = ref<RenderAs>( 'svg' )
const background = ref( '#ffffff' )
const foreground = ref( '#000000' )
</script>

<template>
	<div class="bg-green-500 w-screen h-screen flex items-center justify-center">
		<div class="bg-black w-72 rounded-2xl text-white flex flex-col justify-between">
			<div class="flex flex-col p-4 h-40 items-center gap-4">
				<div class="w-full grid grid-cols-5 grid-rows-1">
					<div class="col-start-1 flex items-center">
						<Icon class="h-5"
							size="20"
							name="material-symbols-light-arrow-back-ios-new-rounded"/>
					</div>
					<div class="col-start-2 col-span-3 text-lg font-bold text-center">Scan
						QR Code
					</div>
				</div>
				<div class="text-sm font-bold text-center">Position the QR code within
					the frame for fast
					Minimize shaking expedite results.
				</div>
			</div>
			<div class="flex flex-col gap-12 h-[384px] bg-white rounded-2xl items-center justify-center">
				<div class="relative">
					<Icon class="absolute top-0 left-0 -m-[17.5%] text-green-500 w-12 h-12" size="60" name="tabler-border-corner-ios"/>
					<Icon class="absolute top-0 right-0 -m-[17.5%] text-green-500 w-12 h-12 rotate-90" size="60" name="tabler-border-corner-ios"/>
					<Icon class="absolute bottom-0 right-0 -m-[17.5%] text-green-500 w-12 h-12 rotate-180" size="60" name="tabler-border-corner-ios"/>
					<Icon class="absolute bottom-0 left-0 -m-[17.5%] text-green-500 w-12 h-12 rotate-[270deg]" size="60" name="tabler-border-corner-ios"/>
					<qrcode-vue
						class="w-44 h-44"
						:value="value"
						:level="level"
						:render-as="renderAs"
						:background="background"
						:foreground='foreground'
					/>
				</div>
				<button class="text-black bg-green-500 font-bold rounded-2xl py-3 w-[80%] ">
					Scan QR Code
				</button>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>
