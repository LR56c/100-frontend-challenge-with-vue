<script setup
	lang="ts">

const formatter = new Intl.NumberFormat( 'es-US', {
	style                : 'currency',
	currency             : 'USD',
	minimumFractionDigits: 2
} )

export interface PricingPlanCardProps {
	title: string
	tier: string
	price: number
	features: string[]
	best: boolean
	buttonColor?: string
}

defineProps<PricingPlanCardProps>()
</script>

<template>
	<div
		:class="[best ? 'text-white' : 'bg-white' ]"
		class="relative w-64 h-96 overflow-hidden p-4 bg-special-purple shadow-lg rounded-2xl flex flex-col justify-between">
		<div v-if="best"
			class="absolute justify-center text-sm top-6 -right-8 w-32 flex bg-amber-300 items-center rotate-45 text-black">
			Best Value
		</div>
		<div class="flex flex-col gap-2">
			<div class="font-medium text-sm">{{ tier }}</div>
			<div class="font-bold text-2xl">{{ title }}</div>
			<div class="font-medium">{{
					formatter.format( price )
				}}<span class="text-gray-400"> /month</span></div>
		</div>
		<ul
			:class="[best ? 'text-gray-300 marker:text-white' : 'marker:text-black text-gray-500' ]"
			class="list-inside list-disc space-y-1.5">
			<li v-for="feature in features"
				class="text-sm"
				:key="feature">
				<span class="-ml-1.5">
				{{ feature }}
				</span>
			</li>
		</ul>
		<button
			:class="buttonColor"
			class="w-full py-3 text-sm  text-black rounded-2xl font-medium">Try free
			for 30 days
		</button>
	</div>
</template>

<style scoped>
</style>
