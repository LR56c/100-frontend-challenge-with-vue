<script setup
	lang="ts">

import {
	Alert,
	AlertDescription
} from '~/components/ui/alert'

const files    = ref( new Map<string, File>() )
const onDelete = ( name: string ) => {
	files.value.delete(name)
}

const onCancel = (name : string) => {
	files.value.delete(name)
}

const onAddFile = (file : File) => {
	files.value.set(file.name, file)
}


</script>

<template>
	<div class="bg-gray-200 w-screen h-screen flex flex-col justify-center items-center gap-4">
		<Alert class="max-w-md border-2 border-blue-400 rounded-2xl bg-blue-200">
			<AlertDescription class="flex items-center gap-2">
				<Icon class="text-blue-500"
					size="20"
					name="material-symbols-info"/>
				<span>No image will be uploaded to a server</span>
			</AlertDescription>
		</Alert>
		<div class="max-w-lg w-full flex flex-col bg-white rounded-2xl shadow-lg px-4 py-8 gap-4">
			<div class="font-bold text-2xl">Upload Photo</div>
			<upload-images-upload-image-drop-zone
				@on-file="onAddFile"
			></upload-images-upload-image-drop-zone>
			<upload-images-upload-image-file-progress
				@on-delete="onDelete"
				@on-cancel="onCancel"
				v-for="[key, file] in files"
				:key="file.name"
				:file="file"
			></upload-images-upload-image-file-progress>
		</div>
	</div>
</template>

<style scoped>

</style>
