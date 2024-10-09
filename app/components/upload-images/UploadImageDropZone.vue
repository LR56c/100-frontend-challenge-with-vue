<script setup
	lang="ts">

const emit   = defineEmits<{
	onFile: [ File ]
}>()

const isDragging = ref(false);

const onFile = (event : Event) => {
	const target = event.target as HTMLInputElement
	if( !target.files ) return
	emit( 'onFile', target.files[0]! )
}

const onDrop = (event: DragEvent) => {
	isDragging.value = false;
	if (event.dataTransfer && event.dataTransfer.files) {
		const file = event.dataTransfer.files[0];
	emit( 'onFile', file! )
	}
}

const onDragLeave = () => {
	isDragging.value = true
}

const onDragOver = () => {
	isDragging.value = false
}

</script>

<template>

	<div class="flex items-center justify-center w-full">
		<label
			@dragover.prevent="onDragOver"
			@dragleave.prevent="onDragLeave"
			@drop.prevent="onDrop"
			for="dropzone-file" class="flex flex-col items-center justify-center w-full h-52 border-2 border-gray-300 border-dashed rounded-2xl cursor-pointer">
			<div class="flex flex-col items-center justify-center pt-5 pb-6">
				<svg class="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
					<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
				</svg>
				<p class="font-medium mb-2 text-sm text-gray-500">Drop your images here or <span class="font-medium text-indigo-700">browse</span></p>
				<p class="text-xs text-gray-500">PNG, JPG, JPEG</p>
			</div>
			<input @change="onFile" id="dropzone-file" type="file" class="hidden" />
		</label>
	</div>

</template>

<style scoped>

</style>
