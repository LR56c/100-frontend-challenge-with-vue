<script setup lang="ts">
import { cn } from '@/lib/utils'
import type { HTMLAttributes } from 'vue'

export interface MessageAvatarProps {
	image 				 : string
	connectionStatus: boolean,
	class?: HTMLAttributes['class']
	classDot?: string
}
const props = defineProps<MessageAvatarProps>()
</script>

<template>
	<div :class="cn('w-10 h-10', props.class)"
		class="relative ">
		<div v-if="connectionStatus"
			:class="cn('w-3 h-3 border-2', props.classDot)"
			class="absolute z-20 rounded-full bg-green-500 border-white bottom-0 right-0"></div>
		<img
			:class="cn('w-10 h-10', props.class)"
			class="rounded-full object-center object-cover"
			:src="image"/>
	</div>
</template>

<style scoped>

</style>
