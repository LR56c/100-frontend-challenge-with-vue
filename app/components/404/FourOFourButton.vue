<script setup
	lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '~/lib/utils'

interface FourOFourButtonProps {
	class?: HTMLAttributes['class']
	label: string
	type : 'ghost' | 'outline'
}

const props = defineProps<FourOFourButtonProps>()

const typeClass = computed( () => {
	switch ( props.type ) {
		case 'ghost':
			return 'bg-transparent text-black hover:underline'
		case 'outline':
			return ''
	}
} )
</script>

<template>
	<button
		:class="cn('flex items-center justify-center font-semibold w-fit py-3 px-6 rounded-2xl', typeClass, props.class)">
		{{ label }}
	</button>
</template>

<style scoped>

</style>