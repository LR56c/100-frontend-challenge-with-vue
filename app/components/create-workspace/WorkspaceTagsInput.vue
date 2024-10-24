<script setup
	lang="ts">
import {
	TagsInput,
	TagsInputInput,
	TagsInputItem,
	TagsInputItemDelete,
	TagsInputItemText
} from '@/components/ui/tags-input'

interface WorkspaceTagsInputProps {
	placeholder: string
}

defineProps<WorkspaceTagsInputProps>()

const value = defineModel<string[]>( {
	default: []
} )
</script>

<template>
		<TagsInput class="w-full rounded-2xl border-gray-200"
			v-model="value">
			<TagsInputItem class="border border-black rounded-2xl"
				v-for="item in modelValue"
				:key="item"
				:value="item">
				<TagsInputItemText/>
				<TagsInputItemDelete/>
			</TagsInputItem>
			<TagsInputInput :placeholder/>
		</TagsInput>
</template>

<style scoped>

</style>
