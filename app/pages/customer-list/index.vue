<script setup
	lang="ts">
import { useCustomerList } from '~/components/customer-list/useCustomerList'

const store = useCustomerList()
</script>

<template>
	<div class="bg-purple-100 w-screen h-screen flex flex-col items-center justify-center gap-8 p-20">
		<div class="flex w-full justify-between items-center">
			<div class="font-bold text-xl">Customer List</div>
			<button class="cursor-not-allowed flex items-center text-white px-4 py-2 bg-indigo-400 rounded-full gap-2">
				<Icon size="16"
					class="h-5"
					name="material-symbols-add-2-rounded"/>
				<span>Add Customer</span>
			</button>
		</div>
		<customer-list-table
			:na="store.customers"
			:customers="store.customers"
		></customer-list-table>
	</div>
</template>

<style scoped>

</style>
