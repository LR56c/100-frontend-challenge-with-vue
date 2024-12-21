<script setup
	lang="ts">
import {
	type Collection,
	useImageCollections
} from '~/components/image-collections/useImageCollections'

const router     = useRouter()
const route      = useRoute()
const id         = route.params.id
const name       = route.params.name
const collection = ref<Collection | undefined>( undefined )
const back       = () => router.back()
const store      = useImageCollections()

watch( router.params, () => {
	if ( !id || !name ) {
		router.push( '/image-collections' )
		return
	}
	const coll = store.getCollection( name, id )

	if ( !coll ) {
		router.push( '/image-collections' )
		return
	}
	collection.value = coll
}, {
	immediate: true
} )

</script>

<template>
	<div class="w-screen h-screen flex items-center justify-center bg-gray-200">
		<div v-if="collection"
			class="bg-gray-100 w-[600px] h-full max-h-[750px] rounded-2xl flex flex-col p-4 shadow-lg gap-2">
			<button @click="back"
				class="py-1 px-2 w-fit flex gap-2 items-center bg-gray-200 rounded-2xl text-black/70">
				<Icon class="h-6"
					name="material-symbols-arrow-back-rounded"/>
				<span>Back to Collections</span>
			</button>
			<div class="flex w-full justify-between">
				<div class="flex flex-col gap-1">
					<span class="font-semibold text-2xl">{{ collection.categoryTitle }}</span>
					<div class="flex gap-1">
						<img :src="collection.avatar" class="w-5 h-5 object-center object-cover rounded-full"/>
						<span class="font-light text-sm text-gray-500">created by </span>
						<span class="underline text-sm">{{ collection.createdBy }}</span>
					</div>
				</div>
				<div class="flex gap-1 items-center">
					<Icon class="h-4 text-blue-500"
						size="16"
						name="material-symbols-image-rounded"/>
					<span>{{ collection.images.length }}</span>
				</div>
			</div>
			<div class="flex flex-wrap gap-4 justify-center w-full">
				<img
					v-for="image in collection.images"
					:key="image"
					:src="image"
					class="w-44 h-44 object-center object-cover rounded-2xl"
				/>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>