<script setup
	lang="ts">
const myHoverableElement = templateRef( 'a' )
const isHovered          = useElementHover( myHoverableElement )
</script>

<template>
	<div class="relative bg-[#e77f80] w-screen h-screen flex flex-col items-end justify-end p-[15%]">
		<chatbot-popup></chatbot-popup>
	</div>
</template>

<style scoped>

</style>