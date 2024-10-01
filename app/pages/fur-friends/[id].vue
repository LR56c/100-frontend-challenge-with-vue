<script setup
	lang="ts">

import {
	type Pet,
	usePetFriends
} from '~/components/fur-friends/usePetFriends'

const route  = useRoute()
const router = useRouter()

const { petsRef, toggleLikePet } = usePetFriends()

const pet = ref<Pet | null>()
watch( () => route.params.id, ( id ) => {
	if ( !petsRef.has( id as unknown as string ) ) {
		router.replace( '/' )
	}
	else {
		pet.value = petsRef.get( id as unknown as string )!
	}
}, {
	immediate: true
} )

</script>

<template>
	<div class="w-screen h-screen flex justify-center items-center bg-gray-200">
		<div v-if="pet"
			class="min-w-72 w-max-72 w-72 flex flex-col bg-white rounded-2xl shadow-lg">
			<div class="relative rounded-2xl w-72">
				<img class="rounded-2xl w-72 h-96 object-center object-cover"
					:src="pet.img"/>
				<div class="absolute top-2 right-2">
					<template v-if="pet.like">
						<Icon size="20"
							@click="toggleLikePet(pet.slug)"
							class="text-red-500"
							name="ic-baseline-favorite"/>
					</template>
					<template v-else>
						<Icon size="20"
							@click="toggleLikePet(pet.slug)"
							name="ic-baseline-favorite-border"/>
					</template>
				</div>
			</div>
			<div class="flex flex-col gap-2 p-4">
				<div class="flex justify-between">
					<div class="basis-[70%] flex flex-col gap-2 w-full">
						<div class="font-bold capitalize">{{ pet.name }}</div>
						<div class="text-gray-500 capitalize text-sm">{{ pet.breed }}</div>
					</div>
					<div class="basis-[30%] flex items-center justify-end">
						<Icon class="text-red-500"
							name="mdi-map-marker"/>
						<div class="text-sm">{{ pet.distance }} miles</div>
					</div>
				</div>
				<div class="flex justify-between">
					<div class="rounded-2xl w-14 h-14 p-2 flex flex-col justify-center items-center bg-gray-200">
						<div class="text-xs font-bold">Age</div>
						<div class="text-xs">{{ pet.age }} yr</div>
					</div>
					<div class="rounded-2xl w-14 h-14 p-2 flex flex-col justify-center items-center bg-gray-200">
						<div class="text-xs font-bold">Height</div>
						<div class="text-xs">{{ pet.height}} inch</div>
					</div>
					<div class="rounded-2xl w-14 h-14 p-2 flex flex-col justify-center items-center bg-gray-200">
						<div class="text-xs font-bold">Weight</div>
						<div class="text-xs">{{ pet.weight }} lb</div>
					</div>
				</div>
				<div class="relative">
					<p class="line-clamp-2">{{ pet.description }}</p>
					<span class="text-pink-500 font-bold cursor-pointer">SEE MORE</span>
				</div>
				<div class="flex gap-2">
					<button class="rounded-2xl p-2 bg-gray-200 font-bold flex items-center justify-center gap-1 basis-[40%]">
						<span>Donate</span>
						<Icon size="20" name="ri-money-dollar-circle-fill"/>
					</button>
					<button class="rounded-2xl p-2 bg-pink-500 text-white flex items-center justify-center gap-1 basis-[60%]">
						<span>Adopt</span>
						<Icon size="20" name="ion-paw-sharp"/>
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>
