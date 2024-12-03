<script setup
	lang="ts">

import SocialSharePopup from '~/components/socials-share/SocialSharePopup.vue'
</script>

<template>
	<div class="bg-slate-200 w-screen h-screen flex items-center justify-center gap-8">
		<social-share-popup side="right" icon="material-symbols-share"></social-share-popup>
		<social-share-popup side="bottom" icon="material-symbols-share"></social-share-popup>
		<social-share-popup compact side="bottom" icon="material-symbols-share"></social-share-popup>
	</div>
</template>

<style scoped>

</style>