<script setup
	lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '~/lib/utils'

interface MyNumberCounterProps {
	placeholder: string
	suffix?: string
	class?: HTMLAttributes['class']
	min?: number
	max?: number
}

const {
	      min = 0,
	      max = Infinity,
	      ...props
      }     = defineProps<MyNumberCounterProps>()
const value = defineModel( {
	default: 0
} )

const reachedMax = computed( () => value.value >= max )
const reachedMin = computed( () => value.value <= min )

const increment = () => {
	if ( reachedMax.value ) {
		return
	}
	value.value++
}
const decrement = () => {
	if ( reachedMin.value ) {
		return
	}
	value.value--
}
</script>

<template>
	<div class="w-full flex bg-white items-center rounded-2xl px-4 gap-2">
		<Icon name="mdi-minus"
			class="basis-[10%]"
			:class="[ reachedMin ? 'cursor-not-allowed text-gray-400' : 'cursor-pointer text-black' ]"
			@click="decrement"/>
		<div class="w-full h-9 flex items-center">
			<input
				v-show="value !== 0"
				v-model="value"
				type="text"
				:class="['w-full inline-flex border-input bg-background text-sm text-center ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50', suffix ? 'basis-1/2' : '']"
			/>
			<span
				v-show="value === 0"
				class="text-gray-400 text-sm w-full text-center"
			>{{ placeholder }}</span>
			<span
				v-if="suffix && value !== 0"
				class="basis-1/2 text-gray-400 text-sm w-full"
			>{{ suffix }}</span>
		</div>
		<Icon name="material-symbols-add"
			class="basis-[10%]"
			:class="[ reachedMax ? 'cursor-not-allowed text-gray-400' : 'cursor-pointer text-black' ]"
			@click="increment"/>
	</div>
</template>

<style scoped>

</style>
