<script setup
	lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '~/lib/utils'

type MusicFestivalButtonType = 'normal' | 'ghost' | 'outline'

interface MusicFestivalButtonProps {
	label : string
	class?: HTMLAttributes['class']
	type : MusicFestivalButtonType
}

const props = defineProps<MusicFestivalButtonProps>()

const typeClass = computed( () => {
	switch ( props.type ) {
		case 'ghost':
			return 'bg-transparent text-white hover:text-black hover:bg-white'
		case 'outline':
			return 'bg-transparent text-white border-2 border-white'
		default:
			return 'bg-white'
	}
} )
</script>

<template>
<button
	:disabled="type === 'outline'"
	:class="cn('w-fit py-0.5 px-2 rounded-2xl', typeClass, props.class)">
	{{ label }}
</button>
</template>

<style scoped>

</style>
