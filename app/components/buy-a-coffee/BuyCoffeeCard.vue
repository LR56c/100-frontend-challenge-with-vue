<script setup
	lang="ts">

interface BuyCoffeeCardProps {
	image : string
	title : string
	price : number
}

defineProps<BuyCoffeeCardProps>()
</script>

<template>
<button class="w-40 flex pt-2 flex-col justify-evenly group items-center gap-2 data-[selected=true]:bg-[#2b7b46] rounded-2xl shadow-lg">
	<span class="text-sm text-gray-400 font-light">Support for ${{ price }}</span>
	<nuxt-img :src="image" class="h-20 w-20 object-center object-cover"/>
	<span class=" uppercase group-data-[selected=true]:text-white font-semibold">{{ title }}</span>
	<span class="w-full h-full py-2 bg-[#2b7b46] text-white font-semibold rounded-b-2xl">${{ price - 1 }}</span>
</button>
</template>

<style scoped>

</style>