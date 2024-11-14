<script setup
	lang="ts">

import EasyMDE from 'easymde'
import 'easymde/dist/easymde.min.css'

const markdownContent = ref('# ¡Hola, EasyMDE!');
// const modelValue   = defineModel<string>()
const isEditing    = ref( false )
const editor       = ref<EasyMDE | null>( null )
const editorConfig : EasyMDE.Options = {
	element: document.getElementById( 'editor' )!,
	previewClass: 'markdown-preview',
	toolbar: ["bold", "italic", "heading", "|", "quote"],
	initialValue: markdownContent.value
}

const initEditor = () => {
	editor.value = new EasyMDE( editorConfig )
}

const toggleMode = () => {
	if ( isEditing.value && editor.value ) {
		// modelValue.value = editor.value.value()
		markdownContent.value = editor.value.value()
		editor.value.toTextArea()
		editor.value = null
	}
	else {
		initEditor()
	}
	isEditing.value = !isEditing.value
}

onMounted( () => {
	initEditor()
} )
</script>

<template>
	<div class="flex flex-col">
	<button @click="toggleMode">{{ isEditing ? 'Guardar' : 'Editar' }}</button>
	<div v-if="!isEditing"
		v-html="markdownContent"
		class="markdown-preview"></div>
	<textarea v-else
		id="editor"></textarea>
	</div>
</template>

<style scoped>

</style>