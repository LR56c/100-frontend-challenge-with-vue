<script setup
	lang="ts">
interface CustomerTableBasicInfoCellProps {
	name: string
	email: string
	avatar?: string
}

defineProps<CustomerTableBasicInfoCellProps>()
</script>

<template>
	<div class="w-full h-full flex items-center gap-2">
		<img v-if="avatar" :src="avatar"
			class="w-6 h-6 rounded-full object-center object-cover"/>
		<Icon v-else class="h-5" name="material-symbols-account-circle-full"/>
		<div class="flex flex-col">
			<span class="font-semibold text-sm">{{ name }}</span>
			<span class="text-sm text-gray-500">{{ email }}</span>
		</div>
	</div>
</template>

<style scoped>

</style>
