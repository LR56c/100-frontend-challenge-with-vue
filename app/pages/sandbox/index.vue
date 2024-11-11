<script setup
	lang="ts">

</script>

<template>
	<div class="w-screen h-screen bg-blue-400">
		<div class="ticket h-60 w-60 bg-white">Contenido</div>
	</div>
</template>

<style scoped>
.my-mask {
	mask-image:
		radial-gradient(circle at top left, transparent 15px, black 16px),
		radial-gradient(circle at top right, transparent 15px, black 16px),
		radial-gradient(circle at bottom left, transparent 15px, black 16px),
		radial-gradient(circle at bottom right, transparent 15px, black 16px);
	mask-composite: intersect;
	-webkit-mask-composite: destination-in;
}
</style>