<script setup
	lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '~/lib/utils'

export type AddShotButtonType = 'normal' | 'outline'

interface AddShotButtonProps {
	type: AddShotButtonType
	label : string
	class?: HTMLAttributes['class']
}

const props = defineProps<AddShotButtonProps>()

const typeParser = computed( () => {
	switch ( props.type ) {
		case 'normal':
			return 'text-white'
		case 'outline':
			return 'font-semibold border border-gray-400'
	}
} )
</script>

<template>
	<button :class="cn('flex items-center justify-center rounded-2xl py-1 px-4', typeParser,props.class)">
{{ label }}
	</button>
</template>

<style scoped>

</style>