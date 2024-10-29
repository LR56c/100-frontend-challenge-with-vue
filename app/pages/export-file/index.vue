<script setup
	lang="ts">

import type { ExportFileOutput } from '~/components/export-file/ExportFilePanel.vue'
import ExportFileUploaderCard
	from '~/components/export-file/ExportFileUploaderCard.vue'

const selectedImage = ref<File | undefined>( undefined )
const selectedData = ref<ExportFileOutput | undefined>( undefined )

const selectedImageBoolean = computed( () => Boolean( selectedImage.value ) )

const imageUrl = ref<string | undefined>( undefined )

const canvasRef = templateRef<HTMLCanvasElement | null>( 'imageCanvas' )

const progressValue = ref(0)

const imageDropZoneRef = ref<HTMLElement>()

const { files, open, reset, onChange } = useFileDialog( {
	accept: 'image/*',
	multiple: false
} )

onChange( ( files ) => {
	selectedImage.value = files?.[0]
} )

const { isOverDropZone } = useDropZone( imageDropZoneRef,
	{ onDrop: onImageDrop } )

function onImageDrop( files: File[] | null ) {
	selectedImage.value = files?.[0]
}

const processImage = ( file: File, format: string, quality: number,
	size: number ): Promise<string> => {
	return new Promise( ( resolve ) => {
		const img  = new Image()
		img.onload = () => {
			if ( !canvasRef.value ) {
				return
			}
			const canvas  = canvasRef.value
			const width   = img.width * size
			const height  = img.height * size
			canvas.width  = width
			canvas.height = height
			const ctx     = canvas.getContext( '2d' )!
			ctx.drawImage( img, 0, 0, width, height )
			resolve( canvas.toDataURL( `image/${ format }`, quality / 100 ) )
		}
		img.src    = URL.createObjectURL( file )
	} )
}

const processExportClient = async ( data: ExportFileOutput ) => {
	progressValue.value = 10
	selectedData.value = data
	imageUrl.value =
		await processImage( selectedImage.value!, data.format, data.quality,
			data.size )
	progressValue.value = 100
}
const processExportServer = async ( data: ExportFileOutput ) => {
	console.log( 'data', data )
	const formData = new FormData()
	formData.append( 'image', selectedImage.value as Blob )
	formData.append( 'format', data.format )
	formData.append( 'quality', data.quality.toString() )
	formData.append( 'size', data.size.toString() )

	const response = await $fetch<ReadableStream>( '/api/process-image', {
		method      : 'POST',
		body        : formData,
		responseType: 'stream'
	} )

	const reader = response.pipeThrough( new TextDecoderStream() )
	                       .getReader()

	while ( true ) {
		const { value, done } = await reader.read()

		if ( done ) {
			break
		}

		console.log( 'Received:', value )
	}
	console.log( 'finish' )
}

const cancelExport = () => {
	selectedImage.value = undefined
	imageUrl.value = undefined
	selectedData.value = undefined
	progressValue.value = 0
	reset()
}

const pauseExport = () => {
	progressValue.value = 0
	imageUrl.value = undefined
}

const playExport = async () => {
	await processExportClient( selectedData.value! )
}
</script>

<template>
	<div class="bg-zinc-600 w-screen h-screen flex gap-4 items-center justify-center p-20">
		<div
			ref="imageDropZoneRef"
				@click="open"
			:class="[selectedImage ? '' : 'cursor-pointer' ,selectedImage ? 'border-0' : isOverDropZone ? 'border-2 border-blue-400 border-dotted' : 'border-white/50 border-2 animate-pulse' ]"
			class="h-96 w-96 rounded-2xl bg-black/50 shadow-lg flex items-center justify-center">
			<div v-if="!selectedImage" class="text-white">
				<span class="font-semibold">Click to upload</span> or drag and drop
			</div>
			<div v-if="selectedImage && !imageUrl" class="text-white">
				Click 'Export file' to process image
			</div>
			<img v-if="imageUrl"
				:src="imageUrl"
				alt="image"
				class="w-full h-full object-cover object-center rounded-2xl"/>
			<canvas style="display: none"
				ref="imageCanvas"></canvas>
		</div>
		<div class="flex flex-col gap-4">
			<export-file-panel
				v-model:enable-button="selectedImageBoolean"
				@onExportFile="processExportClient"
				class="shadow-lg"></export-file-panel>
			<export-file-uploader-card
				@onCanceled="cancelExport"
				v-model="progressValue"
				@onPause="pauseExport"
				@onPlay="playExport"
				class="shadow-lg"></export-file-uploader-card>
		</div>
	</div>
</template>

<style scoped>

</style>
