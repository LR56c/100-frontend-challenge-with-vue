<script setup
	lang="ts">

import type { HTMLAttributes } from 'vue'
import { cn } from '~/lib/utils'

export type InvoiceButtonType = 'normal' | 'outline'

interface InvoiceButtonProps {
	icon ?: string
	label : string
	type  : InvoiceButtonType
	class?: HTMLAttributes['class']
}

const props = defineProps<InvoiceButtonProps>()
</script>

<template>
<button
	:class="cn('flex items-center gap-1 rounded-2xl py-1 w-fit text-sm px-3',{'bg-white border-2': type === 'outline'}, props.class)">
<Icon v-if="icon" :name="icon"/>
{{ label }}
</button>
</template>

<style scoped>

</style>
