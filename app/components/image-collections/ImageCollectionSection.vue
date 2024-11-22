<script setup
	lang="ts">

import { useImageCollections } from '~/components/image-collections/useImageCollections'

const store          = useImageCollections()
</script>

<template>
	<template
		v-for="(user, i) in store.userPhotos"
		:key="user.name +i">
		<image-collections-card
			v-for="(item, i) in user.collections"
			:key="item.categoryTitle +i"
			:item></image-collections-card>
	</template>
</template>

<style scoped>

</style>