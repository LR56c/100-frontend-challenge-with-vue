<script setup
	lang="ts">
const emit = defineEmits<{
	accept : [void]
	customize : [void]
}>()
</script>

<template>
<div class="h-full gap-4 flex flex-col items-center justify-between">
	<span class="font-bold text-xl">Can we use cookies?</span>
	<span class="text-black/60 text-center text-sm font-semibold">We use cookies to enhance your browsing experience, analyze Site traffic, and personalize content. By clicking "Accept All", you consent to the use of all cookies. You can manage your preferences or opt out by clicking "Customize".</span>
	<div class="w-full flex gap-4">
		<cookies-banner-button @click="emit('customize')"
			label="Customize" type="outline"></cookies-banner-button>
		<cookies-banner-button @click="emit('accept')"
			label="Accept all" type="normal"></cookies-banner-button>
	</div>
</div>
</template>

<style scoped>

</style>