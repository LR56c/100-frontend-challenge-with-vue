<script setup
	lang="ts">
</script>

<template>
	<div class="relative h-screen w-screen">
		<product-recipe
			totalTime="10 minutes"
			levelTime="10 minutes"
			badget="Under $2"
			description="Sweet Iced Coffee with coconut milk is easy to make and stores well in the fridge. Make a large batch and save yourselfa few trips to the coffee shop"
			:ingredients="[
				'3 tablespoon Espresso coffee powder',
				'1 cup off the boil water',
				'1 cup Coconut milk',
				'3 tablespoon Espresso coffee powder',
				]"
			:instructions="[
				'Boil some water and let sit for 1-2 minutes.',
				'Put the cofFee grounds into a cafetiêre and pour in the water.',
				'Let the coffee steep for 5 minutes then slowly press down the plunger on your Cafetiére.',
				'Pour the coffee into a jug, allow to cool then chill for several hours.',
				'Whisk in the coconut milk and condensed milk and serve over plenty of ice.',
				'This coffee can be stored in the fridge for up to 5 days. Shake or Stir again before serving.'
				]"
			:stars="4"
			:reviews="189"
			title="Sweet iced Coffee with Coconut Milk"
			image="coffe-coconut.jpg"
		></product-recipe>
	</div>
</template>

<style scoped>

</style>
