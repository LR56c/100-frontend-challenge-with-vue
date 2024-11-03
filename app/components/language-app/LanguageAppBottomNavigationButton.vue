<script setup
	lang="ts">
interface LanguageAppBottomNavigationButtonProps {
	icon: string
}

defineProps<LanguageAppBottomNavigationButtonProps>()
</script>

<template>
	<div class="w-full flex items-center justify-center cursor-pointer hover:bg-purple-100 data-[selected=true]:bg-purple-200 group">
		<Icon size="25" class="h-12 group-data-[disabled=true]:text-purple-700/50 text-purple-700" :name="icon"/>
	</div>
</template>

<style scoped>

</style>