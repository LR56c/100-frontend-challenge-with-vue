<script setup
	lang="ts">
import {
	RadioGroup,
	RadioGroupItem
} from '@/components/ui/radio-group'
import type { HTMLAttributes } from 'vue'
import { cn } from '~/lib/utils'

export type SettingsAppearanceColorsType = 'orange' | 'green' | 'blue' | 'pink'

interface SettingsAppearanceColorsProps {
	class?: HTMLAttributes['class']
	colors: SettingsAppearanceColorsType[]
}

const props = defineProps<SettingsAppearanceColorsProps>()

const colorSelected = defineModel<string>( {
	default: ''
} )

const colorClass = ref<string[]>( [] )

const parseColor = ( color: MyColors ): string => {
	switch ( color ) {
		case 'orange':
			return 'bg-orange-600'
		case 'green':
			return 'bg-green-600'
		case 'blue':
			return 'bg-blue-600'
		case 'pink':
			return 'bg-pink-600'
	}
}

for ( const color of props.colors ) {
	colorClass.value.push( parseColor( color ) )
}
</script>

<template>
	<RadioGroup v-model="colorSelected"
		:class="cn(props.class)"
		class="flex w-full items-center justify-center"
		orientation="horizontal">
		<RadioGroupItem v-for="color in colorClass"
			:key="color"
			:id="color"
			:value="color"
			:class="[color]"
			class="text-white dark:text-black border-0 data-[state=checked]:outline data-[state=checked]:outline-1 data-[state=checked]:outline-gray-500 outline-none focus:outline-none"/>
	</RadioGroup>
</template>

<style scoped>

</style>
