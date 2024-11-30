<script setup
	lang="ts">
interface ArticleGridCardProps {
	image : string
}

defineProps<ArticleGridCardProps>()
</script>

<template>
<div class="relative w-full h-full rounded-2xl flex">
	<div class="absolute w-full h-full">
		<slot name="background"/>
	</div>
	<div class="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-full h-full">
		<slot name="default"/>
	</div>
	<NuxtImg class="w-full h-full rounded-2xl object-center object-cover" :src="image"/>
</div>
</template>

<style scoped>

</style>