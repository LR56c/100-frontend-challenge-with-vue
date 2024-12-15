<script setup
	lang="ts">

import SubscribeCardInput
	from '~/components/subscribe-card/SubscribeCardInput.vue'
</script>

<template>
	<div class="w-screen h-screen flex items-center justify-center bg-[#1d1918]">
		<div class="max-w-xl w-full bg-[#2f2929] rounded-2xl p-4 flex gap-4 items-center box-shadow">
			<nuxt-img class="object-center object-cover w-64 h-56 rounded-2xl" src="https://images.unsplash.com/photo-1591025207163-942350e47db2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
			<div class="flex flex-col text-white gap-6">
				<span class="font-bold text-2xl">Unlock the World: Your Passport to Endless Adventure!</span>
				<span>Join now for exclusive travel perks, insider tips, and unforgettable experiences. Let your wanderlust lead the way!</span>
				<subscribe-card-input></subscribe-card-input>
			</div>
		</div>
	</div>
</template>

<style scoped>
.box-shadow {
	box-shadow: 20px 20px 0 rgb(242, 171, 66);
	box-sizing: border-box;
}
</style>