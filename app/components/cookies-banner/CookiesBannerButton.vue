<script setup
	lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '~/lib/utils'

export type CookiesBannerButtonType = 'normal' | 'outline'

interface CookiesBannerButtonProps {
	label: string
	type: CookiesBannerButtonType
	class?: HTMLAttributes['class']
}

const props = defineProps<CookiesBannerButtonProps>()

const typeParser = computed( () => {
	switch ( props.type ) {
		case 'normal':
			return 'bg-gradient-to-r from-orange-400 to-orange-600 text-white'
		case 'outline':
			return 'text-gray-400 font-semibold border border-gray-400'
	}
} )
</script>

<template>
	<button :class="cn('w-full flex rounded-2xl justify-center items-center py-2 text-sm', typeParser, props.class)">
		{{ label }}
	</button>
</template>

<style scoped>

</style>