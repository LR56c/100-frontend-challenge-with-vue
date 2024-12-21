<script setup
	lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '~/lib/utils'

interface DesignAssetsButtonProps {
	class?: HTMLAttributes['class']
	label: string
	type : 'ghost' | 'normal'
}

const props = defineProps<DesignAssetsButtonProps>()

const typeClass = computed( () => {
	switch ( props.type ) {
		case 'ghost':
			return 'bg-transparent text-black/40 hover:bg-[#dddcfb] hover:text-black'
		case 'normal':
			return 'bg-black text-white'
	}
} )

</script>

<template>
<button :class="cn('flex font-semibold rounded-2xl items-center justify-center py-2 px-4',typeClass, props.class)">
	{{ label }}
</button>
</template>

<style scoped>

</style>