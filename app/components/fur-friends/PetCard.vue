<script setup
	lang="ts">


import { usePetFriends } from '~/components/fur-friends/usePetFriends'

export interface PetCardProps {
	name: string
	breed: string
	genre: string
	img: string
	slug: string
	distance: number
}

const { slug } = defineProps<PetCardProps>()

const { toggleLikePet } = usePetFriends()

const heartStatus = defineModel( 'like', {
	default: false
} )

</script>

<template>
	<NuxtLink :to="slug">
		<div class="flex gap-2 shadow-lg rounded-2xl items-center pr-2">
			<div class="flex w-full gap-2">
				<img class="w-20 h-20 object-cover object-center rounded-2xl"
					:src="img"/>
				<div class="flex flex-col justify-around gap-2">
					<div class="inline-flex items-center">
						<div class="font-bold">{{ name }}</div>
						<Icon v-if="genre === 'female'"
							name="mdi-gender-female"/>
						<Icon v-else
							name="mdi-gender-male"/>
					</div>
					<div class="text-sm text-gray-500">{{ breed }}</div>
					<div class="inline-flex items-center">
						<Icon class="text-red-500"
							name="mdi-map-marker"/>
						<div class="text-sm">{{ distance }} miles</div>
					</div>
				</div>
			</div>
			<template v-if="heartStatus">
				<Icon size="20"
					class="text-red-500"
					@click="toggleLikePet(slug)"
					name="ic-baseline-favorite"/>
			</template>
			<template v-else>
				<Icon size="20"
					@click="toggleLikePet(slug)"
					name="ic-baseline-favorite-border"/>
			</template>
		</div>
	</NuxtLink>

</template>

<style scoped>

</style>
