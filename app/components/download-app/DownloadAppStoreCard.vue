<script setup
	lang="ts">
interface DownloadAppStoreCardProps {
	img?: string
	icon?: string
	label: string
	link: string
}

defineProps<DownloadAppStoreCardProps>()
</script>

<template>
	<NuxtLink :to="link"
		class="w-44 h-12 rounded p-2 bg-black text-white flex items-center gap-1"
		external>
		<img v-if="img"
			class="basis-[30%] object-center object-contain w-8 h-8"
			:src="img"/>
		<div v-if="icon" class="basis-[30%] flex items-center justify-start">
			<Icon size="40" :name="icon"/>
		</div>
		<div class="basis-[70%] flex flex-col">
			<span class="text-xs">Get it on</span>
			<span class="font-bold text-sm">{{ label }}</span>
		</div>
	</NuxtLink>
</template>

<style scoped>

</style>