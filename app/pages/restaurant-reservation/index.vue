<script setup
	lang="ts">
import RestaurantCard from '~/components/RestaurantCard.vue'
</script>

<template>
	<div class="w-screen h-screen bg-orange-200 flex items-center justify-center">
		<RestaurantCard name="Gramercy Tavern"
			direction="20th St New York"
			description="A quintessential New York City gem among the city's iconic establishments, Gramercy Tavern serves as an extraordinary destination for special occasions and an elevated version of an everyday retreat. It's the unique kind of place you choose for a celebration after a joyful engagement, or casually wander into to seek refuge from an unexpected downpour."
			:reviews="231"
			:stars="4"></RestaurantCard>
	</div>
</template>

<style scoped>

</style>
