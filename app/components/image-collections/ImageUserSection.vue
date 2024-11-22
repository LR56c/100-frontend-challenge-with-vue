<script setup
	lang="ts">

import { useImageCollections } from '~/components/image-collections/useImageCollections'
import UserImageCard from '~/components/image-collections/UserImageCard.vue'

const store          = useImageCollections()
</script>

<template>
	<template
		v-for="(user, i) in store.userPhotos"
		:key="user.name +i">
		<user-image-card
			:item="user.collections[0]"></user-image-card>
		<hr v-if="i < store.userPhotos.length -1" class="w-full border border-gray-300 "/>
	</template>
</template>

<style scoped>

</style>