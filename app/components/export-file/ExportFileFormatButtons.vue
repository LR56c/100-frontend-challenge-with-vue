<script setup
	lang="ts">
import type { HTMLAttributes } from 'vue'
import { Badge } from '~/components/ui/badge'
import {
	RadioGroup,
	RadioGroupItem
} from '~/components/ui/radio-group'
import { cn } from '~/lib/utils'

export type ExportFileFormatButtonsType = 'jpeg' | 'png' | 'tiff' | 'gif'

interface ExportFileFormatButtonsProps {
	class?: HTMLAttributes['class']
	values: ExportFileFormatButtonsType[]
	defaultValue ?: ExportFileFormatButtonsType
}

const props = defineProps<ExportFileFormatButtonsProps>()

const formatSelected = defineModel<ExportFileFormatButtonsType | undefined>( {
	default: undefined
} )
</script>

<template>
	<RadioGroup
		v-model="formatSelected"
		:class="cn(props.class)"
		:default-value="defaultValue"
		class="flex flex-col w-full gap-4">
		<div v-for="type in values" :key="type"
		class="flex justify-between items-center w-full">
			<Badge class="hover:bg-gray-500 uppercase text-white bg-gray-500">{{ type }}</Badge>
			<RadioGroupItem
				:id="type"
				:value="type"
				class="text-yellow-400 data-[state=unchecked]:border-zinc-600"/>
		</div>
	</RadioGroup>
</template>

<style scoped>

</style>
