<script setup
	lang="ts">


import PricingPlanCard, { type PricingPlanCardProps } from '~/components/pricing-plans/PricingPlanCard.vue'
import { Switch } from '~/components/ui/switch'

const colorButtonMap = new Map<number, string>( [
	[ 0, 'bg-white' ],
	[ 1, 'bg-amber-300' ],
	[ 2, 'bg-special-purple text-white' ]
] )

const cardMap = new Map<number, PricingPlanCardProps>( [
	[ 0, {
		tier    : 'All in one',
		title   : 'Professional',
		price   : 39.99,
		best    : true,
		features: [
			'All core features',
			'Priority support',
			'Quarterly reviews',
			'Custom branding',
			'10GB storage'
		]
	} ],
	[ 1, {
		tier    : 'Basic',
		title   : 'Standard',
		price   : 29.99,
		best    : false,
		features: [
			'Most core features',
			'Email support',
			'Annual reviews',
			'Limited branding',
			'5GB storage'
		]
	} ],
	[ 2, {
		tier    : 'Better results',
		title   : 'Ultimate',
		price   : 49.99,
		best    : false,
		features: [
			'All features, including premium',
			'24/7 priority support',
			'Dedicated account manager',
			'Fully customizable branding',
			'Unlimited storage'
		]
	} ]

] )

const toggleRef = ref(false)
</script>

<template>
	<div
		:style="{
'backgroundSize': '100% 100%',
'backgroundPosition': '0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px',
'backgroundImage': 'radial-gradient(50% 50% at 50% -10%, #FFFFFFFF 0%, #00000000 100%),radial-gradient(50% 50% at 107% 52%, #FFFFFFFF 0%, #00000000 100%),radial-gradient(50% 50% at -10% 40%, #FFFFFFFF 0%, #00000000 100%),radial-gradient(50% 50% at 53% 103%, #FFFFFFFF 0%, #00000000 100%),radial-gradient(75% 75% at 2% 5%, #FFA700FF 0%, #073AFF00 100%),radial-gradient(75% 75% at 97% 94%, #FFA700FF 0%, #073AFF00 100%),radial-gradient(75% 75% at 98% 1%, #7B11E3FF 0%, #073AFF00 100%),radial-gradient(75% 75% at 0% 97%, #7B11E3FF 0%, #073AFF00 100%),radial-gradient(75% 75% at 50% 50%, #FFFFFFFF 0%, #7B11E3FF 100%)',
		}"
		class="w-screen h-screen flex pt-8 px-8">
		<div class="h-full w-full bg-white gap-4 rounded-t-2xl shadow-lg flex flex-col p-8 items-center justify-between">
			<div class="flex flex-col gap-8 items-center">
				<div class="font-medium text-lg">Find ideal plan</div>
				<div class="text-5xl font-bold">Unlock
					<span class="underline text-special-purple">You Best-Fit</span> Plan
					Today
				</div>
				<div class="flex items-center gap-2">
					<span :class="[toggleRef ? 'text-gray-400' : 'text-black']">Billed annually</span>
				<label class="toggle-switch">
					<input v-model="toggleRef" type="checkbox">
					<div class="toggle-switch-background">
						<div class="toggle-switch-handle"></div>
					</div>
				</label>
					<span :class="[toggleRef ? 'text-black' : 'text-gray-400']">Billed monthly</span>
				</div>
			</div>
			<div class="flex items-center justify-around w-full h-full gap-8">
				<pricing-plan-card
					v-for="([key, value], index) in cardMap"
					:key="index"
					:title="value.title"
					:tier="value.tier"
					:price="value.price"
					:features="value.features"
					:best="value.best"
					:buttonColor="colorButtonMap.get(index % colorButtonMap.size)"
				></pricing-plan-card>
			</div>
		</div>
	</div>
</template>

<style scoped >
/* From Uiverse.io by ErzenXz */
.toggle-switch {
	position: relative;
	display: inline-block;
	width: 56px;
	height: 28px;
	cursor: pointer;
}

.toggle-switch input[type="checkbox"] {
	display: none;
}

.toggle-switch-background {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: #ddd;
	border-radius: 20px;
	box-shadow: inset 0 0 0 2px #ccc;
	transition: background-color 0.3s ease-in-out;
}

.toggle-switch-handle {
	position: absolute;
	top: 3px;
	left: 3px;
	width: 22px;
	height: 22px;
	background-color: #fff;
	border-radius: 50%;
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
	transition: transform 0.3s ease-in-out;
}

.toggle-switch::before {
	content: "";
	position: absolute;
	top: -25px;
	right: -35px;
	font-size: 12px;
	font-weight: bold;
	color: #aaa;
	text-shadow: 1px 1px #fff;
	transition: color 0.3s ease-in-out;
}

.toggle-switch input[type="checkbox"]:checked + .toggle-switch-handle {
	transform: translateX(45px);
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 0 0 3px #5541e3;
}

.toggle-switch input[type="checkbox"]:checked + .toggle-switch-background {
	background-color: #5541e3;
	box-shadow: inset 0 0 0 2px #4126ea;
}

.toggle-switch input[type="checkbox"]:checked + .toggle-switch:before {
	content: "On";
	color: #5541e3;
	right: -15px;
}

.toggle-switch input[type="checkbox"]:checked + .toggle-switch-background .toggle-switch-handle {
	transform: translateX(28px);
}
</style>
