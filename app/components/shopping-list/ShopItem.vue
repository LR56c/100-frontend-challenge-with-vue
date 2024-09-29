<script setup
	lang="ts">

import ShopItemCounter from '~/components/shopping-list/ShopItemCounter.vue'

const formatter = new Intl.NumberFormat( 'es-US', {
	style                : 'currency',
	currency             : 'USD',
	minimumFractionDigits: 2
} )

export interface ShopItemProps {
	name: string
	price: number
	quantity: number
	img: string
}

const {
	      img   = '/land2.jpg',
	      price = 99.99,
	      name  = 'Germanus exemplars'
      } = defineProps<ShopItemProps>()

const emit  = defineEmits<{
	removeItem: [ string ]
}>()
const model = defineModel<number>( 'quantity', {
	default: 1
} )
</script>

<template>
	<div class="flex gap-4">
		<img class="aspect-square object-cover object-center w-24 h-24 min-w-24 max-w-24 rounded-2xl"
			:src="img"/>
		<div class="flex flex-col justify-center gap-4 w-64">
			<div class="flex justify-between items-center">
				<div class="font-medium">{{ name }}</div>
				<Icon class="opacity-70"
					@click="emit('removeItem', name)"
					size="20"
					name="ic-round-close"/>
			</div>
			<div class="flex justify-between">
				<shop-item-counter
					v-model="model"
				></shop-item-counter>
				<div class="font-bold">{{ formatter.format(price) }}</div>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>
