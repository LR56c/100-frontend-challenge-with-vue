<script setup
	lang="ts">
import {
	TreeItem,
	TreeRoot
} from 'radix-vue'
import {
	type DocumentNode,
	useDocumentManager
} from '~/components/document-manager/useDocumentManager'

const store       = useDocumentManager()
const selectedDoc = computed( () => store.currentDocument )
// const initial     = store.documents[0].children[1]


const selectDoc = ( doc: DocumentNode ) => {
	store.selectCurrentNode( doc )
}

watch( store.documents, () => {
	console.log( 'store.documents', store.documents )
} )
</script>

<template>
	<TreeRoot
		v-slot="{ flattenItems }"
		class="w-full px-2 h-full list-none select-none rounded-lg text-sm font-medium"
		:items="store.documents"
		:get-key="(item) => item.id">
		<TreeItem
			v-for="item in flattenItems"
			v-slot="{ isExpanded }"
			:style="{ 'padding-left': `${item.level - 0.5}rem` }"
			:key="item.id"
			v-bind="item.bind"
			@click="selectDoc(item.value)"
			:class="[selectedDoc?.id === item.value.id ? 'bg-purple-600 text-white' : 'text-black']"
			class="w-full gap-1 flex items-center py-1 px-2 my-0.5 rounded outline-none focus:ring-grass8 focus:ring-2 data-[selected]:bg-grass4"
		>
			<div v-if="item.hasChildren">
				<Icon
					v-if="!isExpanded"
					name="lucide-folder"
					class="h-4 w-4"
				/>
				<Icon
					v-else
					name="lucide-folder-open"
					class="h-4 w-4"
				/>
			</div>
			<div v-else>
				<Icon
					v-if="!isExpanded"
					name="lucide-file"
					class="h-4 w-4"
				/>
			</div>
			<div class="w-[70%] flex flex-col">
				<span class="truncate w-full font-bold">{{ item.value.name }}</span>
				<span class="font-semibold text-xs text-gray-400">{{
						item.value.countContent
					}} words</span>
			</div>
			<div class="w-full flex justify-end"
				v-if="item.value.children">
				<Icon
					v-if="!isExpanded"
					name="material-symbols-keyboard-arrow-up-rounded"
					class="h-5 w-5"
				/>
				<Icon
					v-else
					name="material-symbols-keyboard-arrow-down-rounded"
					class="h-5 w-5"
				/>
			</div>
		</TreeItem>
	</TreeRoot>
</template>