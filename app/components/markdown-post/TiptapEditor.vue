<script lang="ts"
	setup>
import { Mention } from '@tiptap/extension-mention'
import { Underline } from '@tiptap/extension-underline'
import Fuse from 'fuse.js'
import { useMarkdownPost } from '~/components/markdown-post/useMarkdownPost'
import suggestion from '~/lib/suggestion'
import {
	useEditor,
	EditorContent
} from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger
} from '@/components/ui/tooltip'

const store = useMarkdownPost()

const fuse = computed( () => {
	return new Fuse( store.users, {
		keys        : [ 'name' ],
		threshold   : 0.3,
		includeScore: true
	} )
} )

const editor = useEditor( {
	content   : `
        <p>👋 Hey</p>
      `,
	extensions: [
		StarterKit,
		Underline,
		Mention.configure( {
			HTMLAttributes: {
				class: 'bg-blue-200 text-cyan-600 px-1.5 rounded-2xl'
			},
			suggestion    : {
				...suggestion,
				items: ( { query } ) => {
					return fuse.value.search( query )
					           .slice( 0, 5 )
					           .map( result => result.item )
				}
			}
		} )
	]
} )

onBeforeUnmount( () => {
	unref( editor )
		?.destroy()
} )

const extraDataEditor = reactive( {
	'data-focus': false
} )

onMounted( () => {
	editor.value.on( 'focus', () => {
		extraDataEditor['data-focus'] = true
	} )
	editor.value.on( 'blur', () => {
		extraDataEditor['data-focus'] = false
	} )
} )
</script>

<template>
	<div v-if="editor"
		class="flex flex-col px-4 py-2 bg-white rounded-2xl">
		<div class="font-bold text-xl mb-2">Comment a post</div>
		<div class="flex overflow-hidden flex-col rounded-2xl ring-2 ring-gray-200 data-[focus=true]:ring-blue-500"
			v-bind="extraDataEditor">
			<editor-content :editor="editor"
				class="max-w-lg min-w-[512px] p-1 min-h-32 max-h-32 overflow-y-scroll bg-white rounded-t-2xl focus:outline-none border-none"/>
			<hr/>
			<div class="flex w-full justify-between items-center py-1 px-2 bg-white rounded-b-2xl">
				<div class="flex gap-1">
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger>
								<button
									@click="editor.chain().focus().toggleBold().run()"
									:disabled="!editor.can().chain().focus().toggleBold().run()"
									class="w-6 h-6 flex items-center justify-center"
									:class="{ 'is-active bg-blue-200 rounded': editor.isActive('bold') }"
								>
									<Icon size="20"
										name="material-symbols-light-format-bold"/>
								</button>
							</TooltipTrigger>
							<TooltipContent side="bottom"
								class="rounded bg-black p-1 text-white">
								<p>Bold Text</p>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger>
								<button
									@click="editor.chain().focus().toggleItalic().run()"
									:disabled="!editor.can().chain().focus().toggleItalic().run()"
									class="w-6 h-6 flex items-center justify-center"
									:class="{ 'is-active bg-blue-200 rounded': editor.isActive('italic') }"
								>
									<Icon size="20"
										name="material-symbols-light-format-italic"/>
								</button>
							</TooltipTrigger>
							<TooltipContent side="bottom"
								class="rounded bg-black p-1 text-white">
								<p>Italic Text</p>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger>
								<button @click="editor.chain().focus().toggleUnderline().run()"
									class="w-6 h-6 flex items-center justify-center"
									:class="{ 'is-active bg-blue-200 rounded': editor.isActive('underline') }">
									<Icon size="20"
										name="material-symbols-light-format-underlined"/>
								</button>
							</TooltipTrigger>
							<TooltipContent side="bottom"
								class="rounded bg-black p-1 text-white">
								<p>Underline Text</p>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				</div>
				<button class="cursor-not-allowed bg-black py-1 px-2 text-white rounded-2xl">
					Post a message
				</button>
			</div>
		</div>
	</div>
</template>

<style>
.ProseMirror:focus {
	outline: none;
}
</style>
