<script setup
	lang="ts">
import TiptapEditor from '~/components/markdown-post/TiptapEditor.vue'
</script>

<template>
	<div class="bg-zinc-100 w-screen h-screen flex flex-col items-center justify-center">
		<ClientOnly>
			<tiptap-editor></tiptap-editor>
			<template #fallback>
				<div>Loading...</div>
			</template>
		</ClientOnly>
	</div>
</template>

<style scoped>

</style>
