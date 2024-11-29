<script setup
	lang="ts">

const payments = [
	{
		title: 'Suite Team',
		price: 20,
	},
	{
		title: 'Suite Growth',
		price: 32,
	},
	{
		title: 'Suite Professional',
		price: 40,
	}
]
</script>

<template>
	<div class="bg-[#4e6b57] w-screen h-screen flex items-center justify-center">
		<div class="relative rounded-2xl bg-gray-200 p-4 flex flex-col gap-4 h-fit max-w-2xl w-full">
			<payment-plan-subcription-term></payment-plan-subcription-term>
			<div class="w-full flex gap-4">
				<payment-plan-card
					v-for="payment in payments"
					:key="payment.title"
					:title="payment.title"
					:price="payment.price"
				></payment-plan-card>
			</div>
			<payment-plan-info-talk></payment-plan-info-talk>
		</div>
	</div>
</template>

<style scoped>

</style>