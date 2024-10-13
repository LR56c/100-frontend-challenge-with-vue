<script setup
	lang="ts">

import InvoiceButton from '~/components/invoices/InvoiceButton.vue'
import InvoiceTable from '~/components/invoices/InvoiceTable.vue'
import { useInvoices } from '~/components/invoices/useInvoices'

const store = useInvoices()

const balanceDer = computed( () => {
	return Math.floor( store.personalData.balance )
	           .toLocaleString()
} )

const balanceIzq = computed( () => {
	return store.personalData.balance.toFixed( 2 )
	            .split( '.' )[1]
} )

const pendingDer = computed( () => {
	return Math.floor( store.personalData.pending )
	           .toLocaleString()
} )

const pendingIzq = computed( () => {
	return store.personalData.pending.toFixed( 2 )
	            .split( '.' )[1]
} )
</script>

<template>
	<div class="bg-gray-200 w-screen h-screen flex justify-center items-center">
		<div class="w-full max-w-2xl flex flex-col items-start gap-4">
			<div class="flex w-full gap-4">
				<div class="basis-[50%] bg-white rounded-2xl font-medium capitalize p-4 flex flex-col shadow-lg">
					<div>balance</div>
					<div class="text-xl">$ {{
							balanceDer
						}}<span class="text-gray-500">.{{ balanceIzq }}</span></div>
				</div>
				<div class="basis-[50%] bg-gray-950 rounded-2xl font-medium capitalize p-4 flex justify-between shadow-lg text-white items-center">
					<div class="flex flex-col">
						<div>pending</div>
						<div class="text-xl">$ {{ pendingDer }}<span class="text-gray-500">.{{
								pendingIzq
							}}</span></div>
					</div>
					<button class="flex items-center justify-center rounded-2xl bg-gray-700 w-7 h-7">
						<Icon name="material-symbols-arrow-forward-ios-rounded"/>
					</button>
				</div>
			</div>
			<div class="bg-white rounded-2xl flex flex-col shadow-lg p-4 w-full max-h-[412px] gap-4">
				<div class="flex items-center justify-between" >
					<div class="font-medium">Invoices</div>
					<div class="flex gap-4">
						<invoice-button class="border-gray-400"
							label="View all Invoices"
							type="outline"></invoice-button>
						<invoice-button class="bg-blue-700 text-white"
							label="New Invoice"
							icon="material-symbols-add"
							type="normal"></invoice-button>
					</div>
				</div>
				<invoice-table :invoices="store.personalData.invoices"></invoice-table>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>
