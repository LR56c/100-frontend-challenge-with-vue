<script setup
	lang="ts">
interface UserSatisfactionInputAreaProps {
	label : string
	placeholder : string
}

const modelValue = defineModel<string>()

defineProps<UserSatisfactionInputAreaProps>()
</script>

<template>
<div class="flex flex-col w-full gap-2">
	<label class="font-bold text-white">{{ label }}</label>
	<textarea
		v-model="modelValue"
		:placeholder
		class="p-2 resize-none bg-transparent text-sm text-white rounded-2xl border placeholder-zinc-600 border-zinc-600 w-full h-24"
	></textarea>
</div>
</template>

<style scoped>

</style>