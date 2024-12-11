<script setup
	lang="ts">
import {
	computed,
	type HTMLAttributes,
} from 'vue'
import {
	SliderRange,
	SliderRoot,
	type SliderRootEmits,
	type SliderRootProps,
	SliderThumb,
	SliderTrack,
	useForwardPropsEmits
} from 'radix-vue'
import { cn } from '~/lib/utils'

interface MySliderProps {
	class?: HTMLAttributes['class']
	classThumb?: string
	classRange?: string
	classTrack?: string
}

const props = defineProps<SliderRootProps & MySliderProps>()
const emits = defineEmits<SliderRootEmits>()

const delegatedProps = computed(() => {
	const { class: _, ...delegated } = props

	return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)

</script>

<template>
	<SliderRoot
		:default-value="[25, 75]"
		:class="cn('relative flex items-center select-none touch-none w-[200px] h-5', props.class)"
		v-bind="forwarded"
	>
		<SliderTrack
			:class="cn('relative bg-black grow rounded-full h-[3px]', props.classTrack)">
			<SliderRange
				:class="cn('absolute bg-white rounded-full h-full', props.classRange)"/>
		</SliderTrack>
		<SliderThumb
			:class="cn('block w-5 h-5 bg-white rounded-[10px] focus:outline-none', props.classThumb)"
			aria-label="Volume1"
		/>
		<SliderThumb
			:class="cn('block w-5 h-5 bg-white rounded-[10px] focus:outline-none', props.classThumb)"
			aria-label="Volume2"
		/>

	</SliderRoot>
</template>
