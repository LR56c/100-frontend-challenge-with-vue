<script setup
	lang="ts">
import type { HTMLAttributes } from 'vue'

interface MyNumberSlider {
	placeholder: string
	suffix?: string
	class?: HTMLAttributes['class']
	min: number
	max: number
}

const props          = defineProps<MyNumberSlider>()

const value      = defineModel()

const firstTime = ref(false)
</script>

<template>
	<div class="h-10 PB-range-slider-div w-full bg-white p-2 rounded-2xl">
		<input
			class="w-20"
			:type="!firstTime ? 'text':'number'" :min :max
			:placeholder
			v-model="value"
			@click="firstTime = true"
		/>
		<span v-if="suffix && firstTime" class="text-gray-400 text-sm">{{ suffix }}</span>
		<input type="range" :min :max v-model="value" class="PB-range-slider"
			@click="firstTime = true"
		/>
	</div>
</template>

<style scoped>
/* From Uiverse.io by satisshTechie */
.PB-range-slider {
	-webkit-appearance: none;
	width: 100%;
	height: 4px;
	border-radius: 1rem;
	background: #D5DBE1;
	outline: none;
	opacity: 0.7;
	-webkit-transition: .2s;
	transition: opacity .2s;
}

.PB-range-slider::-webkit-slider-thumb {
	-webkit-appearance: none;
	appearance: none;
	width: 15px;
	height: 15px;
	border-radius: 50%;
	background-color: #000000;
	cursor: pointer;
	transition: 0.3s ease-in-out;
}

.PB-range-slider::-webkit-slider-thumb:hover {
	box-shadow: 0px 0px 0px 8px rgba(0, 0, 0, 0.16);
	transition: 0.3s ease-in-out;
}

.PB-range-slider::-moz-range-thumb {
	width: 15px;
	height: 15px;
	border-radius: 50%;
	background-color: #000000;
	cursor: pointer;
}

.PB-range-slider-div {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	padding: 1rem;
	border-radius: 1rem;
}

.PB-range-slidervalue {
	font-weight: 400;
}
</style>
