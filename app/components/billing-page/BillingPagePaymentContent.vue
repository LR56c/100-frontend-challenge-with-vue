<script setup
	lang="ts">
import { useBillingPagePayment } from '~/components/billing-page/useBillingPagePayment'

const store = useBillingPagePayment()
const indexSelected = ref<number | undefined>( undefined )

const toggleSelect = ( i: number ) => {
	if( i === indexSelected.value ) {
		indexSelected.value = undefined
		return
	}
	indexSelected.value = i
}

const addCard= () => {
	store.addCard()
}
</script>

<template>
	<div class="flex flex-col gap-4">
		<div class="flex flex-col">
			<div class="font-semibold text-lg">Payment Method</div>
			<div class="text-gray-500 text-sm font-semibold">Update your billing</div>
		</div>
		<div class="flex py-4 gap-4 overflow-x-scroll">
			<billing-page-payment-card
				v-for="(card, i) in store.list"
				:data-selected="i === indexSelected"
				:key="card.visible"
				@click="toggleSelect(i)"
				:value="String(card.masked + ' ' + card.visible)"
			></billing-page-payment-card>
			<billing-page-new-payment-preview v-if="store.list.length < 3" @click="addCard"></billing-page-new-payment-preview>
		</div>
			<billing-page-new-payment-preview v-if="store.list.length >= 3" @click="addCard"></billing-page-new-payment-preview>
	</div>
</template>

<style scoped>

</style>