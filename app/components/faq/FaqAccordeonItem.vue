<script setup
	lang="ts">

import {
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from '~/components/ui/accordion'

interface FaqAccordeonProps {
	title: string
	content: string
}

defineProps<FaqAccordeonProps>()
const el = useTemplateRef( 'item' )
useMutationObserver( el, ( mutations ) => {
	if ( mutations[0]) {
		const element = mutations[0].target as HTMLElement
		open.value = element.dataset.state === 'open'
	}
}, {
	attributes     : true,
	attributeFilter: [ 'data-state' ]
} )
const open = ref( false )
</script>

<template>
	<AccordionItem
		ref="item"
		:value="title"
		:class="[open ? 'bg-[#32aaaf] text-white' : 'bg-white text-black']"
		class="custom-shadow max-h-36 overflow-y-auto transition-all rounded-2xl px-4">
		<AccordionTrigger class="font-bold text-sm">
			{{ title }}
			<template #icon>
				<Icon size="20" v-if="!open" name="material-symbols-add-circle-outline-rounded"/>
				<Icon size="20" v-else name="material-symbols-do-not-disturb-on-outline-rounded"/>
			</template>
		</AccordionTrigger>
		<AccordionContent class="">{{ content }}</AccordionContent>
	</AccordionItem>
</template>

<style scoped>
.custom-shadow {
	box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}

</style>
