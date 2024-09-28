<script setup
	lang="ts">

interface Props {
	totalTime: string
	levelTime: string
	badget: string
	description: string
	ingredients: string[]
	instructions: string[]
	stars: number
	reviews: number
	title: string
	image: string
}

defineProps<Props>()
</script>

<template>
	<div class="relative h-full w-full flex">
		<div class="absolute -translate-x-1/2 top-[10%] left-[50%] bg-white w-[50%] pl-12 py-4">
			<div class="flex items-center gap-2">
				<Icon name="i-fontisto-star"
					class="text-yellow-500"
					v-for="i in stars"></Icon>
				<span class="text-sm">({{ reviews }})</span>
			</div>
			<div class="text-4xl font-bold">{{ title }}</div>
		</div>
		<div class="absolute bottom-5 left-0 bg-black text-white text-2xl font-bold w-80 p-4">
			{{ title }}
		</div>
		<img alt=""
			class="basis-[40%] w-[40%] object-cover"
			:src="image"/>
		<div class="basis-[60%] pt-56 px-8 flex flex-col gap-4">
			<div class="flex items-center gap-6">
				<div class="flex items-center gap-2">
					<Icon size="20"
						name="i-fontisto-clock"></Icon>
					<div class="flex flex-col">
						<div class="text-sm">Total Time</div>
						<div class="text-sm font-bold text-yellow-500">{{ totalTime }}</div>
					</div>
				</div>
				<div class="flex items-center gap-2">
					<Icon size="20"
						name="i-fontisto-fire"></Icon>
					<div class="flex flex-col">
						<div class="text-sm">Level</div>
						<div class="text-sm font-bold text-yellow-500">{{ levelTime }}</div>
					</div>
				</div>
				<div class="flex items-center gap-2">
					<Icon size="20"
						name="i-fontisto-wallet"></Icon>
					<div class="flex flex-col">
						<div class="text-sm">Badget</div>
						<div class="text-sm font-bold text-yellow-500">{{ badget }}</div>
					</div>
				</div>
			</div>
			<div class="font-">{{ description }}</div>
			<div class="flex flex-col gap-2">
				<div class="font-bold text-lg uppercase">Ingredients</div>
				<div v-for="ing in ingredients"
					class="flex items-center gap-2">
					<input class="w-4 h-4 text-yellow-500 bg-gray-100 border-gray-300 rounded focus:ring-yellow-500" type="checkbox"/>
					<div>{{ ing }}</div>
				</div>
			</div>
			<div class="flex flex-col gap-2">
				<div class="uppercase font-bold text-lg">Instructions</div>
				<ul class="pl-4 list-decimal list-outside space-y-1">
					<li v-for="inst in instructions">{{ inst }}</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>
