<script setup
	lang="ts">

export type Sizes = 'S' | 'M' | 'L' | 'XL' | 'XXL'

interface Props {
	title: string
	brand: string
	subTitle: string
	price: number
	discount: number
	total: number
	sizes: Set<Sizes>
	images: string[]
}

defineProps<Props>()
const sizeSelected = ref( 'S' )
</script>

<template>
	<div class="p-4 flex h-full gap-4">
		<div class="lg:flex hidden lg:flex-col gap-4">
			<img src="https://placehold.co/70x100"/>
			<img src="https://placehold.co/70x100"/>
			<img src="https://placehold.co/70x100"/>
		</div>
		<div class="flex flex-col gap-4">
			<img src="https://placehold.co/300x400"/>
			<div class="lg:hidden flex md:flex-row flex-wrap gap-4 justify-center">
				<img class="w-fit"
					src="https://placehold.co/70x100"/>
				<img class="w-fit"
					src="https://placehold.co/70x100"/>
				<img class="w-fit"
					src="https://placehold.co/70x100"/>
			</div>
		</div>
		<div class="flex flex-col gap-2">
			<div class="text-blue-500 font-bold">{{ brand }}</div>
			<div class="font-bold text-3xl">{{ title }}</div>
			<div class="text-gray-400 text-sm">{{ subTitle }}</div>
			<div class="flex items-center gap-4">
				<div class="text-2xl font-bold">${{ total }}.00</div>
				<div class=" text-blue-600 bg-blue-300 rounded-lg px-2">
					-{{discount }}%
				</div>
			</div>
			<div class="line-through text-gray-400">${{ price }}.00</div>
			<div class="uppercase font-bold">Choose Size</div>
			<div class="flex">
				<div v-for="size in sizes"
					:key="size">
					<button
						class="py-2 px-3"
						:class="{
					'bg-black text-white': size === sizeSelected,
					'text-black': size !== sizeSelected
				}"
						@click="sizeSelected = size">
						{{ size }}
					</button>
				</div>
			</div>
			<div class="h-full"></div>
			<button class="uppercase w-full bg-blue-500 text-white py-2">add to bag
			</button>
		</div>
	</div>
</template>

<style scoped>

</style>
