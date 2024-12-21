<script setup
	lang="ts">
import {
	CheckboxIndicator,
	CheckboxRoot
} from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import { cn } from '~/lib/utils'

interface EmailClientCheckboxProps {
	class?: HTMLAttributes['class']
}

const props       = defineProps<EmailClientCheckboxProps>()
const checkboxOne = defineModel( {
	default: false
} )
</script>

<template>
	<CheckboxRoot
		v-model:checked="checkboxOne"
		:class="cn(checkboxOne ? '' : 'border border-zinc-600', props.class)"
		class="flex h-5 w-5 appearance-none items-center justify-center rounded-[4px] outline-none"
	>
		<CheckboxIndicator class="bg-purple-600 h-full w-full rounded flex items-center justify-center">
			<Icon
				size="20"
				name="radix-icons:check"
				class="h-3.5 w-3.5 text-black"
			/>
		</CheckboxIndicator>
	</CheckboxRoot>
</template>