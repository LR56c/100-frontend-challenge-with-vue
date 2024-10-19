<script setup
	lang="ts">

import type { HTMLAttributes } from 'vue'
import { cn } from '~/lib/utils'

interface MyInputSearchProps {
	icon ?: string
	placeholder : string
	class?: HTMLAttributes['class']
}
const { icon = 'material-symbols-search', ...props } = defineProps<MyInputSearchProps>()
const search = defineModel()
</script>

<template>
	<div :class="cn('w-full h-10 relative', props.class)">
		<div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
			<Icon v-if="icon" class="text-gray-400"
				:name="icon"/>
		</div>
		<input type="search"
			required
			id="default-search"
			v-model="search"
			class="block h-full w-full p-2 ps-8 text-sm text-gray-900 rounded-2xl focus:ring-blue-500 focus:border-blue-500"
			:placeholder/>
	</div>
</template>

<style scoped>

</style>
