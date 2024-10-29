<script setup
	lang="ts">

import type { ExportFileFormatButtonsType } from '~/components/export-file/ExportFileFormatButtons.vue'
import MySelect from '~/components/shared/MySelect.vue'
import MySlider from '~/components/shared/MySlider.vue'
import { Badge } from '~/components/ui/badge'

const DEFAULT_FORMAT = 'jpeg'
const DEFAULT_QUALITY = 80
const DEFAULT_SIZE = 2

const formatButtons: ExportFileFormatButtonsType[] = [
	'jpeg',
	'png',
	'tiff',
	'gif'
]

const selectedFormatButton = ref<ExportFileFormatButtonsType | undefined>(
	undefined )

const modelValue = ref( [ DEFAULT_QUALITY ] )

const sizeLabels: string[] = [
	'1x',
	'2x',
	'3x',
	'4x'
]

const enableButton = defineModel<boolean>('enableButton', {
	default: false
} )

const sizeMap = new Map<string, number>(
	sizeLabels.map( ( label, index ) => [ label, index + 1 ] )
)

const sizeLabelSelected = ref<string>( `${DEFAULT_SIZE}x` )
const sizeSelected      = computed(
	() => sizeMap.get( sizeLabelSelected.value ) )

export type ExportFileOutput = {
	format: ExportFileFormatButtonsType
	quality: number
	size: number
}

const emit = defineEmits<{
	onExportFile: [ ExportFileOutput ]
}>()

const exportFile = () => {
	emit( 'onExportFile', {
		format: selectedFormatButton.value ?? DEFAULT_FORMAT,
		quality: modelValue.value[0] ?? DEFAULT_QUALITY,
		size   : sizeSelected.value ?? DEFAULT_SIZE
	} )
}
</script>

<template>
	<div class="w-64 flex flex-col rounded-2xl bg-black/50 p-4 text-white gap-6">
		<div>Export file</div>
		<hr class="border-zinc-600"/>
		<div>Format</div>
		<ExportFileFormatButtons
			:default-value="DEFAULT_FORMAT"
			:values="formatButtons"
			v-model="selectedFormatButton"
		></ExportFileFormatButtons>
		<hr class="border-zinc-600"/>
		<div class="flex justify-between">
			<div>Photo Quality</div>
			<Badge class="w-12 hover:bg-gray-500 uppercase text-white bg-gray-500">
				{{ modelValue[0] }}%
			</Badge>
		</div>
		<MySlider
			:min="0"
			:max="100"
			v-model="modelValue"
			class="w-full"
			class-range="bg-yellow-300"
			class-thumb="w-3.5 h-3.5"
			class-track="bg-gray-500"
		></MySlider>
		<div class="flex justify-between items-center">
			<div>Size</div>
			<MySelect label="size"
				placeholder="2x"
				v-model="sizeLabelSelected"
				button-class="bg-gray-500 border-0 h-6 w-16"
				:values="sizeLabels"></MySelect>
		</div>
		<button @click="exportFile"
			:disabled="!enableButton"
			class="flex items-center justify-center py-2 w-full bg-yellow-400 rounded-2xl text-black disabled:bg-gray-50 disabled:cursor-not-allowed">
			Export file
		</button>
	</div>
</template>

<style scoped>

</style>
