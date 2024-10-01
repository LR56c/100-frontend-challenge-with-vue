<script setup
	lang="ts">

import PetCard from '~/components/fur-friends/PetCard.vue'
import PetSearchInput from '~/components/fur-friends/PetSearchInput.vue'
import { usePetFriends } from '~/components/fur-friends/usePetFriends'

const { petsRef } = usePetFriends()

</script>

<template>
	<div class="w-screen h-screen flex justify-center items-center bg-gray-200">
		<div class="h-[45%] min-w-72 w-max-72 flex flex-col bg-white rounded-2xl p-4 gap-4 shadow-lg">
			<div class="font-bold">FurEver Friends</div>
			<pet-search-input></pet-search-input>
			<div class="flex flex-col gap-4 overflow-y-scroll">
			<pet-card
				v-for="[key,pet] in petsRef"
				:key
				:slug="pet.slug"
				:img="pet.img"
				:name="pet.name"
				:breed="pet.breed"
				:genre="pet.genre"
				:distance="pet.distance"
				v-model:like="pet.like"
			></pet-card>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>
