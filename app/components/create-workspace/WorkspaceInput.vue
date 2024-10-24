<script setup
	lang="ts">

import { Label } from '~/components/ui/label'
import { Input } from '~/components/ui/input'

interface WorkspaceInputProps {
	label : string
}
defineProps<WorkspaceInputProps>()
const value = defineModel<string>( {
	default: ''
} )

</script>

<template>
	<div class="w-full flex flex-col gap-2">
		<label class="font-semibold" :for="label">{{ label }}</label>
		<input class="py-2 px-4 rounded-2xl border focus-within:border-none border-gray-400 focus-within:outline focus-within:outline-2 focus-within:outline-lime-600" :name="label" v-model="value" :placeholder="label"/>
	</div>
</template>

<style scoped>

</style>
