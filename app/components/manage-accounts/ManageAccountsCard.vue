<script setup
	lang="ts">
interface ManageAccountsCardProps {
	name: string
	email: string
}

defineProps<ManageAccountsCardProps>()

const emit = defineEmits<{
	selectAccount: [string]
}>()
</script>

<template>
	<div @click="emit('selectAccount', email)"
		class="cursor-pointer hover:bg-gray-300 w-full flex p-2 rounded-2xl bg-gray-100 items-center gap-2">
	<manage-accounts-avatar
		class="min-w-10 min-h-10 max-w-10 max-h-10"
		:name
	></manage-accounts-avatar>
		<div class="flex flex-col text-sm">
			<span class="font-semibold">{{ name }}</span>
			<span class="text-gray-500">{{ email }}</span>
		</div>
	</div>
</template>

<style scoped>

</style>