<script setup
	lang="ts">

</script>

<template>
	<div class="bg-yellow-100 w-screen h-screen flex items-center justify-center">
	<div class="bg-indigo-950 min-h-[500px] max-h-[500px] w-full max-w-xs rounded-2xl p-4 text-white flex flex-col justify-between">
		<div class="basis-[60%]">abc</div>
		<div class="basis-[40%] flex flex-col gap-4 items-center">
			<div class="text-lg font-bold">Track your sleep</div>
			<div class="text-center text-xs">Upgrade your sleep quality with our cutting-edge tracking app. Experience deeper rest and wake up revitalized. Sleep better, live better.</div>
			<NuxtLink class="w-full" to="sleep-app/dashboard">
			<button class="bg-gradient-to-r from-orange-600 via-orange-400 to-orange-600 w-full py-2 rounded-2xl">Get Started</button>
			</NuxtLink>
		</div>
	</div>
	</div>
</template>

<style scoped>

</style>
