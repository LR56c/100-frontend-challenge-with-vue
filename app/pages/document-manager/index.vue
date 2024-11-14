<script setup
	lang="ts">
import { toast } from 'vue-sonner'
import {
	type DocumentNode,
	useDocumentManager
} from '~/components/document-manager/useDocumentManager'

const store          = useDocumentManager()
const selectedDoc    = computed( () => store.currentDocument )
const isEdit         = ref( false )
const lastNoteDoc    = ref<DocumentNode | undefined>( undefined )
const lastFolderDoc  = ref<string>( 'Select a note' )
const lastContentDoc = ref<string>( '' )
watch( selectedDoc, () => {
	if ( selectedDoc.value && selectedDoc.value.type === 'note' ) {
		lastNoteDoc.value    = selectedDoc.value
		lastContentDoc.value = selectedDoc.value.content
	}
} )
watch( lastNoteDoc, ( newValue, oldValue ) => {
	if ( oldValue && oldValue.parentId === newValue?.parentId ) {
		return
	}
	if ( lastNoteDoc.value && lastNoteDoc.value.parentId ) {
		lastFolderDoc.value = store.getNode( lastNoteDoc.value.parentId ).name
	}
} )

const addFolder = () => {
	if ( !selectedDoc.value || selectedDoc.value.type !== 'folder' ) {
		toast( 'Select a folder first', {} )
		return
	}
	store.addNode( 'New Folder', 'folder', selectedDoc.value.id )
		toast( 'New Folder created!', {} )
}

const addNote = () => {
	if ( !selectedDoc.value || selectedDoc.value.type !== 'folder' ) {
		toast( 'Select a folder first', {} )
		return
	}
	store.addNode( 'New Note', 'note', selectedDoc.value.id )
		toast( 'New Note created!', {} )
}

const deleteNode = () => {
	if ( !selectedDoc.value || selectedDoc.value.type !== 'note' ) {
		toast( 'Select a note first', {} )
		return
	}
	store.removeNode( selectedDoc.value.id )
}

const onEdit = () => {
	isEdit.value = true
}
const onSave = (title: string, content: string) => {
	isEdit.value = false
	store.updateNote( lastNoteDoc.value!.id, title, content )
}
</script>

<template>
	<div class="w-screen h-screen bg-[#cd97f7] flex flex-col items-center justify-center">
		<div class="bg-gray-100 w-[700px] h-[500px] rounded-2xl flex flex-col shadow-lg">
			<div class="w-full flex items-center justify-between p-2">
				<span class="w-full font-bold text-xl">{{ lastFolderDoc }}
				</span>
				<div class="w-full justify-end flex gap-2">
					<document-manager-button
						:class="[!selectedDoc ? 'opacity-50' : '']"
						:disabled="!selectedDoc"
						icon="material-symbols-add-2-rounded"
						label="New Chapter"
						@click="addNote"
						class="bg-purple-700"
					></document-manager-button>
					<document-manager-button
						:class="[!selectedDoc ? 'opacity-50' : '']"
						:disabled="!selectedDoc"
						icon="material-symbols-delete-rounded"
						label="Delete"
						@click="deleteNode"
						class="bg-red-700"
					></document-manager-button>
				</div>
			</div>
			<hr class="w-full border border-black/75"/>
			<div class="w-full h-full flex">
				<div class="h-full w-44 py-4 flex flex-col justify-between">
					<div class="h-[360px] overflow-y-scroll no-scrollbar">
						<document-manager-tree></document-manager-tree>
					</div>
					<div class="px-2">
						<document-manager-button
							:class="[!selectedDoc ? 'opacity-50' : '']"
							:disabled="!selectedDoc"
							@click="addFolder"
							icon="material-symbols-add-2-rounded"
							label="New Document"
							class="h-10 bg-purple-700"
						></document-manager-button>
					</div>
				</div>
				<hr class="h-full border border-black/75"/>
				<div class="w-full h-full p-4">
					<div class="w-full h-full"
						v-if="selectedDoc">
						<document-manager-content-preview
							v-if="!isEdit"
							@edit="onEdit"
							:content="selectedDoc.content"
							:title="selectedDoc.name"
						></document-manager-content-preview>
						<document-manager-content-edit
							v-else
							@save="onSave"
							:content="selectedDoc.content"
							:title="selectedDoc.name"
						></document-manager-content-edit>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
</style>