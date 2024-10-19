<script setup
	lang="ts">
import MyNumberSlider from '~/components/explore-flights/MyNumberSlider.vue'
import SquareClearButton
	from '~/components/explore-flights/SquareClearButton.vue'
import {
	type ExploreCar,
	useExploreCars
} from '~/components/explore-flights/useExploreCars'
import MyComboBox, { type MyComboBoxType } from '~/components/job-board/MyComboBox.vue'

const brandOptions: MyComboBoxType[] = [
	{ value: 'Toyota' },
	{ value: 'Honda' },
	{ value: 'Ford' },
	{ value: 'Chevrolet' },
	{ value: 'Nissan' },
	{ value: 'Jeep' },
	{ value: 'Subaru' },
	{ value: 'Hyundai' },
	{ value: 'Kia' },
	{ value: 'Mazda' },
	{ value: 'Mercedes-Benz' },
	{ value: 'BMW' },
	{ value: 'Audi' },
	{ value: 'Volvo' },
	{ value: 'Porsche' }
]

const modelOptions: MyComboBoxType[] = [
	{ value: 'Sedan' },
	{ value: 'SUV' },
	{ value: 'Truck' },
	{ value: 'Van' }
]

const typeOptions: MyComboBoxType[] = [
	{ value: 'Compact' },
	{ value: 'Midsize' },
	{ value: 'Fullsize' },
	{ value: 'Luxury' },
	{ value: 'Electric' }
]

const store         = useExploreCars()
const results       = ref<ExploreCar[]>( [] )
const brandValue    = ref( '' )
const modelValue    = ref( '' )
const typeValue     = ref( '' )
const distanceValue = ref<number | undefined>( undefined )
const priceMin      = ref<number | undefined>( undefined )
const priceMax      = ref<number | undefined>( undefined )

const onSearch    = () => {
	const response = store.filterCar( brandValue.value, modelValue.value,
		typeValue.value, distanceValue.value, priceMin.value, priceMax.value )
	if ( response.length ) {
		results.value = [ response[0] ]
	}
}
const clearSearch = () => {
	brandValue.value    = ''
	modelValue.value    = ''
	typeValue.value     = ''
	distanceValue.value = undefined
	priceMin.value      = undefined
	priceMax.value      = undefined
}
</script>

<template>
	<div class="flex flex-col w-full h-full gap-4">
		<div class="flex gap-1 bg-gray-300 rounded-2xl p-2 items-center">
			<my-combo-box v-model="brandValue"
				class="basis-[32%] bg-white p-2 rounded-2xl w-full"
				:values="brandOptions"
				placeholder="Brand"></my-combo-box>
			<my-combo-box v-model="modelValue"
				class="basis-[32%] bg-white p-2 rounded-2xl w-full"
				:values="modelOptions"
				placeholder="Model"></my-combo-box>
			<my-combo-box v-model="typeValue"
				class="basis-[32%] bg-white p-2 rounded-2xl w-full"
				:values="typeOptions"
				placeholder="Type"></my-combo-box>
			<square-clear-button @clear="clearSearch"
			></square-clear-button>
		</div>
		<div class="flex flex-col gap-2">
			<div class="text-sm text-gray-400">Optionals</div>
			<div class="flex gap-1 bg-gray-300 rounded-2xl p-2 items-center">
				<my-number-slider v-model="distanceValue"
					suffix="miles"
					placeholder="Distance"
					:min="0"
					:max="500"></my-number-slider>
				<my-number-slider v-model="priceMin"
					placeholder="Min Price"
					:min="0"
					:max="2_000_000"></my-number-slider>
				<my-number-slider v-model="priceMax"
					placeholder="Max Price"
					:min="0"
					:max="2_000_000"></my-number-slider>
			</div>
		</div>
		<div class="flex justify-between">
			<div></div>
			<button @click="onSearch"
				class="text-white gap-1 flex bg-indigo-500 rounded-2xl items-center justify-center py-2 px-4 text-sm">
				<Icon class="h-5"
					name="material-symbols-directions-car-rounded"/>
				<span>Search</span>
			</button>
		</div>
	</div>
	<ClientOnly>
		<Teleport defer
			to="#tp">
			<div v-if="results.length"
				class="flex flex-col gap-4 min-w-[800px] max-w-xl h-full bg-white rounded-2xl mt-4 p-4">
				<div
					v-for="(car, i) in results"
					:key="car.id"
					class="flex gap-4 w-full h-full items-center justify-between"
				>
					<div>{{ i + 1 }}.</div>
					<div class="flex gap-1 text-sm">
						<div>Brand:</div>
						<div>{{ car.brand }}</div>
					</div>
					<div class="flex gap-1 text-sm">
						<div>Model:</div>
						<div>{{ car.model }}</div>
					</div>
					<div class="flex gap-1 text-sm">
						<div>Type:</div>
						<div>{{ car.type.join(', ') }}</div>
					</div>
					<div class="flex gap-1 text-sm">
						<div>Distance:</div>
						<div>{{ car.distance }}</div>
					</div>
					<div class="flex gap-1 text-sm">
						<div>Price:</div>
						<div>{{ car.price }}</div>
					</div>
				</div>
			</div>
		</Teleport>
	</ClientOnly>
</template>
<!--brand : string-->
<!--model : string-->
<!--type : string[]-->
<!--distance : number-->
<!--price : number-->
<style scoped>

</style>
