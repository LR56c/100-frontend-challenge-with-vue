<script setup
	lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '~/lib/utils'

export type ManageAccountsButtonType = 'normal' | 'outline'

interface ManageAccountsButtonProps {
	label: string
	icon?: string
	class?: HTMLAttributes['class']
	textClass ?: string
	type: ManageAccountsButtonType
}

const props = defineProps<ManageAccountsButtonProps>()

const typeParser = computed( () => {
	switch ( props.type ) {
		case 'normal':
			return 'bg-gray-100'
		case 'outline':
			return 'text-black/60 border justify-center border-black'
	}
} )
</script>

<template>
	<button :class="cn('h-[52px] hover:bg-gray-300 font-semibold flex rounded-2xl items-center gap-4 px-4 py-1.5', typeParser,props.class)">
		<slot class="basis-[10%]">
			<Icon v-if="icon"
				size="25"
				:name="icon"/>
		</slot>
		<span :class="cn('text-start basis-[90%]', props.textClass)">{{ label }}</span>
	</button>
</template>

<style scoped>

</style>