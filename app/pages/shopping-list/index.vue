<script setup
	lang="ts">

import ShopItem, { type ShopItemProps } from '~/components/shopping-list/ShopItem.vue'

const formatter = new Intl.NumberFormat('es-US', {
	style: 'currency',
	currency: 'USD',
	minimumFractionDigits: 2
});

const listRef = ref( new Map<string, ShopItemProps>(
	[
		[
			'Germanus exemplars',
			{
				name    : 'Germanus exemplars',
				price   : 12.99,
				quantity: 1,
				img     : '/land2.jpg'
			}
		],
		[
			'Xiphiass resistere',
			{
				name    : 'Xiphiass resistere',
				price   : 9.99,
				quantity: 2,
				img     : '/land3.jpg'
			}
		],
		[
			'Pol, bassus olla!',
			{
				name    : 'Pol, bassus olla!',
				price   : 29.99,
				quantity: 1,
				img     : '/land4.jpg'
			}
		],
		[
			'Cur, aonides!',
			{
				name    : 'Cur, aonides!',
				price   : 32.99,
				quantity: 1,
				img     : '/land5.jpg'
			}
		],
	]
) )


const shippingRef = ref(0.0)
const taxRate = 0.1

const subtotal = computed( () => {
	return Array.from( listRef.value.values() ).reduce( ( acc, item ) => {
		return acc + item.price * item.quantity
	}, 0 )
} )

const tax = computed( () => {
	return subtotal.value * taxRate
} )

const total = computed( () => {
	return subtotal.value + tax.value + shippingRef.value
} )

const removeItem = ( name: string ) => {
	listRef.value.delete( name )
}
</script>

<template>
	<div class="relative h-screen w-screen bg-[url('/land1.jpg')] bg-cover bg-center flex justify-center items-center">
		<div class="absolute inset-0 bg-black/30 backdrop-blur-lg"></div>
		<div class="relative w-full z-10 flex inset-0 justify-center gap-4">
			<div class="h-full shadow-lg rounded-2xl flex flex-col p-4 bg-white gap-6 py-6">
				<div class="flex justify-between items-center">
					<div class="font-bold text-lg">Your product list</div>
					<div>{{ listRef.size }} Items</div>
				</div>
				<div class="flex flex-col h-full gap-4">
				<shop-item
					@remove-item="removeItem"
					v-for="[key,item] in listRef"
					:key
					v-model:quantity="item.quantity"
					:name="item.name"
					:price="item.price"
					:img="item.img"
				></shop-item>
				</div>
			</div>
			<div class="flex flex-col gap-4">
				<div class="shadow-lg rounded-2xl flex flex-col bg-white">
					<div class="p-4 flex flex-col gap-6">
						<div class="font-bold text-lg w-56">Order Summary</div>
						<div class="flex flex-col gap-2">
							<div class="flex justify-between">
								<div>Subtotal</div>
								<div class="font-medium">{{ formatter.format(subtotal) }}</div>
							</div>
							<div class="flex justify-between">
								<div>Tax</div>
								<div class="font-medium">{{ formatter.format(tax) }}</div>
							</div>
							<div class="flex justify-between">
								<div>Shipping</div>
								<div class="font-medium">{{ formatter.format(shippingRef) }}</div>
							</div>
						</div>
					</div>
					<hr/>
					<div class="p-4 flex flex-col gap-4">
						<div class="flex justify-between font-medium">
							<div>Total</div>
							<div>{{ formatter.format(total) }}</div>
						</div>
						<button class="my-4 bg-black text-white py-2 w-full rounded-2xl">Pay now</button>
					</div>
				</div>
				<div class="shadow-lg rounded-2xl flex flex-col p-4 bg-white">
						<label for="code" class="text-lg block mb-2 font-medium text-gray-900">Promo Code</label>
						<input type="text" id="code" class="rounded-2xl bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter promo code" required />
				</div>
			</div>
		</div>
	</div>

</template>

<style scoped>

</style>
