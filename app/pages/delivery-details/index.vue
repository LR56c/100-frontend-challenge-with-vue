<script setup
	lang="ts">
import { useDeliveryDetails } from '~/components/delivery-details/useDeliveryDetails'
import { StepperDescription, StepperIndicator, StepperItem, StepperRoot, StepperSeparator, StepperTitle, StepperTrigger } from 'radix-vue'
const store               = useDeliveryDetails()
const { deliveryDetails } = storeToRefs( store )

</script>

<template>
	<div class="bg-yellow-100 w-screen h-screen flex flex-col items-center justify-center">
		<div v-if="deliveryDetails"
			class="w-full max-w-lg bg-white p-4 min-h-[500px] rounded-2xl flex flex-col gap-4">
			<div class="flex gap-2 items-center">
				<Icon name="material-symbols-arrow-back-rounded"/>
				<span class="text-lg font-semibold">Delivery Details</span>
			</div>
			<div class="bg-gray-100 rounded-2xl w-full h-fit flex flex-col p-4 gap-4">
				<div class="flex justify-between w-full">

					<div class="flex basis-[50%]">
						<span class="font-semibold w-8">Track number</span>
					</div>
					<div class="flex flex-col gap-1 basis-[50%]">
						<div class="flex items-center gap-1">
							<span class="text-cyan-700 font-semibold">{{
									deliveryDetails.trackNumber
								}}</span>
							<button>
							<Icon name="tabler-external-link"/>
							</button>
						</div>
						<span class="text-sm text-gray-500 font-semibold">Shipping date start: {{
								useDateFormat( deliveryDetails.date, 'MMM DD, YYYY' )
							}}</span>
					</div>
				</div>
				<div class="flex justify-between w-full items-center">
					<div class="flex basis-[50%]">
						<span class="font-semibold w-8">Seller Name</span>
					</div>
					<span class="text-lg font-semibold basis-[50%]">{{
							deliveryDetails.companyName
						}}</span>
				</div>
			</div>
			<span class="text-lg font-semibold">Tracking History</span>
			<div class="bg-gray-100 rounded-2xl w-full h-fit flex p-4 gap-4 justify-between">
				<div class="flex flex-col gap-4">
					<div v-for="delivery in deliveryDetails.entries"
						class="flex flex-col gap-1"
						:key="delivery.id">
						<span class="font-semibold">{{
								useDateFormat( delivery.date, 'Do MMMM YYYY' )
							}}</span>
						<span class="text-gray-500">At {{
								useDateFormat( delivery.date, 'HH:mm A' )
							}}</span>
					</div>
				</div>
				<div class="flex flex-col gap-4">
					<StepperRoot
						:default-value="0"
						class="flex flex-col justify-between h-full w-full max-w-[32rem]">
						<StepperItem
							v-for="(item,i) in deliveryDetails.entries"
							:key="item.id"
							class="w-full flex justify-center cursor-pointer group data-[disabled]:pointer-events-none relative px-4"
							disabled
							:step="i">
							<StepperTrigger class="inline-flex items-center group-data-[disabled]:text-gray-400 group-data-[state=active]:bg-yellow-100 group justify-center rounded-full text-gray-400 w-7 h-7 shrink-0 bg-gray-300 focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none shadow-lg">
								<div class="flex items-center justify-center w-4 h-4 bg-black rounded-full group-data-[state=active]:bg-yellow-400"></div>
							</StepperTrigger>
							<StepperSeparator
								v-if="i > 0"
								class="absolute h-[calc(50%+20px)] block left-[50%] bottom-8 right-[calc(-50%+20px)] w-0.5 rounded-full bg-black shrink-0"
							/>
						</StepperItem>
					</StepperRoot>
				</div>
				<div class="flex flex-col justify-between gap-4">
					<div v-for="delivery in deliveryDetails.entries"
						class="flex flex-col gap-1"
						:key="delivery.id">
						<span class="font-semibold">{{ delivery.status }}</span>
						<span class="text-xs text-gray-500 font-semibold">{{ delivery.address }}</span>
					</div>
				</div>
			</div>
		</div>
		<div v-else>
			Loading...
		</div>
	</div>
</template>

<style scoped>

</style>