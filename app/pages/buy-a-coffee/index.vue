<script setup
	lang="ts">

import { toast } from 'vue-sonner'
import BuyCoffeeCard from '~/components/buy-a-coffee/BuyCoffeeCard.vue'
import BuyCoffeeCounterInput
	from '~/components/buy-a-coffee/BuyCoffeeCounterInput.vue'
const cards = [
	{
		title: 'coffee',
		price: 3,
		image: '/latte.png'
	},
	{
		title: 'cappuccino',
		price: 5,
		image: '/capuccino.png'
	},
	{
		title: 'coffee latte',
		price: 7,
		image: '/espresso.png'
	}
]

const selectedIndex = ref(-1)
const handlePay = (price: number) => {
	if(selectedIndex.value === -1) {
		toast('Please select a coffee', {})
	}
	else {
		toast(`Paid $${price} for ${cards[selectedIndex.value].title}`, {})
	}
}
</script>

<template>
	<div class="bg-[#3c9b5b] w-screen h-screen flex flex-col items-center justify-center">
		<div class="w-full max-w-lg bg-white h-fit rounded-2xl flex flex-col gap-4 p-4 items-center">
			<div class="flex w-full justify-evenly gap-4">
				<buy-coffee-card
					v-for="(card,i) in cards"
					:key="card.title"
					:title="card.title"
					:price="card.price"
					:image="card.image"
					:data-selected="selectedIndex === i"
					@click="selectedIndex = i"
				></buy-coffee-card>
			</div>
			<div class="flex items-center justify-center w-fit h-40 shadow-lg rounded-2xl p-4 gap-4">
				<div class="basis-[30%]">
					<nuxt-img src="/americano.png"
						class="h-28 w-28 object-center object-cover "/>
				</div>
				<hr class="h-full border border-black"/>
				<div class="basis-[45%]">
					<buy-coffee-counter-input
						@pay="handlePay"
						name="price"></buy-coffee-counter-input>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>