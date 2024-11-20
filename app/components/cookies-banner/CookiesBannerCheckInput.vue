<script setup
	lang="ts">
import { SwitchRoot, SwitchThumb } from 'radix-vue'
interface CookiesBannerCheckInputProps {
	label: string
	blocked : boolean
}

defineProps<CookiesBannerCheckInputProps>()
const switchState = defineModel({
	default: false
})
</script>

<template>
	<div class="w-full flex justify-between gap-2 items-center">
		<label
			class="text-black text-sm font-semibold leading-none pr-[15px] select-none"
			for="airplane-mode"
		>
			{{ label }}
		</label>
		<SwitchRoot
			id="airplane-mode"
			:disabled="blocked"
			v-model:checked="switchState"
			@input.stop=""
			class="w-[42px] h-[25px] focus-within:outline-none flex bg-black/30 shadow-sm rounded-full relative data-[state=checked]:from-orange-400 data-[state=checked]:bg-gradient-to-r data-[state=checked]:to-orange-600 cursor-default"
		>
			<SwitchThumb
				class="block w-[21px] h-[21px] my-auto bg-white shadow-sm rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]"
			/>
		</SwitchRoot>
	</div>
</template>

<style scoped>

</style>