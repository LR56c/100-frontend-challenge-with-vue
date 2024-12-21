<script setup lang="ts">
import { cn } from '@/lib/utils'
import {
	ProgressIndicator,
	ProgressRoot,
	type ProgressRootProps,
} from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

interface MyProgressProps {
	class?: HTMLAttributes['class']
	classIndicator ?: string
}

const props = withDefaults(
	defineProps<ProgressRootProps & MyProgressProps>(),
	{
		modelValue: 0,
	},
)

const delegatedProps = computed(() => {
	const { class: _, ...delegated } = props

	return delegated
})
</script>
<template>
	<ProgressRoot
		v-bind="delegatedProps"
		:class="
      cn(
        'relative overflow-hidden bg-black/90 rounded-full w-full h-4',
        props.class,
      )
    "
	>
		<ProgressIndicator
			:class="cn('bg-white rounded-full w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]',props.classIndicator)"
			:style="`transform: translateX(-${100 - (props.modelValue ?? 0)}%); z-index: 5;`"
		/>
	</ProgressRoot>
</template>
