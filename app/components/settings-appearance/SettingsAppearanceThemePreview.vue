<script setup
	lang="ts">
import { Label } from '~/components/ui/label'

interface SettingsAppearanceThemePreviewProps {
	themeColor: string
	backgroundColor: string
	label: string
}

const props = defineProps<SettingsAppearanceThemePreviewProps>()
const selected = ref(false)

const el = useTemplateRef( 'item' )
useMutationObserver( el, ( mutations ) => {
	if ( mutations[0]) {
		const element = mutations[0].target as HTMLElement
		selected.value = element.dataset.select === 'true'
	}
}, {
	attributes     : true,
	attributeFilter: [ 'data-select' ]
} )

const selectedClass = 'before:inset-0 before:rounded before:absolute before:border-2 before:border-[#00fd0d]'
</script>

<template>
	<div ref="item" class="cursor-pointer relative flex flex-col gap-2">
		<div v-if="selected" class="absolute z-20 -top-[6%] -right-[6%] w-6 h-6 bg-[#00fd0d] rounded-full flex items-center justify-center">
			<Icon class="h-5 text-white" name="material-symbols-check-rounded"/>
		</div>
	<div :class="[backgroundColor, selected ? selectedClass : '']" class="w-36 flex flex-col gap-2 rounded p-2 relative">
		<div class="flex gap-2">
			<div :class="[themeColor]" class="h-4 w-5 rounded-full"></div>
			<div :class="[themeColor]" class="h-4 w-full rounded"></div>
		</div>
			<div :class="[themeColor]" class="h-8 w-full rounded"></div>
		<div class="flex gap-2">
			<div :class="[themeColor]" class="h-8 w-full rounded"></div>
			<div :class="[themeColor]" class="h-8 w-full rounded"></div>
		</div>
	</div>
		<Label class="dark:text-white font-semibold text-xs">{{ label }}</Label>
	</div>
</template>

<style scoped>

</style>
