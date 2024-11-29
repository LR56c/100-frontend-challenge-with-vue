<script setup
	lang="ts">

import type { HTMLAttributes } from 'vue'
import { cn } from '~/lib/utils'

interface Props {
	class?: HTMLAttributes['class']
	label?: string
	inputClass?: string
}

const { label, ...props } = defineProps<Props>()
const model               = defineModel<boolean>( {
	default: false
} )

</script>

<template>
	<label :class="cn('inline-flex cursor-pointer bg-transparent p-2 justify-between rounded-2xl',props.class)">
		<span v-if="label" class="ms-3 text-sm font-medium text-white">{{ label }}</span>
		<input type="checkbox"
			v-model="model"
			class="sr-only peer">
		<div :class="cn('relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[\'\'] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all peer-checked:bg-gray-500', props.inputClass)"></div>
	</label>
</template>

<style scoped>

</style>
