<script setup
	lang="ts">
import ImageCard from '~/components/image-collections/ImageCard.vue'
import { useImageCollections } from '~/components/image-collections/useImageCollections'

const store          = useImageCollections()
</script>

<template>
	<template
		v-for="(user, i) in store.userPhotos"
		:key="user.name +i">
		<image-card
			v-for="(item, i) in user.images"
			:key="item.categoryTitle +i"
			:item></image-card>
	</template>
</template>

<style scoped>

</style>