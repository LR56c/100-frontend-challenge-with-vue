<script setup
	lang="ts">
interface DocumentManagerContentPreviewProps {
	title : string
	content : string
}
const props = defineProps<DocumentManagerContentPreviewProps>()
const title = ref( props.title )
const content = ref( props.content )
const emit = defineEmits<{
	save : [string,string]
}>()

const saved = () => {
	emit('save', title.value, content.value)
}
</script>

<template>
	<div class="max-h-full h-full w-full relative">
		<button @click="saved" class="absolute top-0 right-0 w-5 h-5 flex items-center justify-center">
			<Icon size="32" name="material-symbols-light-save-rounded"/>
		</button>
		<div class="w-full h-full flex flex-col gap-2 pr-8">
		<input v-model="title" class="font-bold text-2xl"/>
		<textarea v-model="content" class="h-full resize-none font-semibold text-sm"/>
		</div>
	</div>
</template>

<style scoped>

</style>