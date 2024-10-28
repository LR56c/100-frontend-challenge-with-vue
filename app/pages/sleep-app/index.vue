<script setup
	lang="ts">

</script>

<template>
	<div class="bg-yellow-100 w-screen h-screen flex items-center justify-center">
	<div class="bg-indigo-950 min-h-[500px] max-h-[500px] w-full max-w-xs rounded-2xl text-white flex flex-col justify-between">
		<div class="relative basis-[60%] bg-white w-full h-full overflow-clip rounded-t-2xl" style="clip-path: url(#smoothPodiumClip);">
			<img class="h-full w-full object-center object-cover" src="/moon-sunset.jpg"/>
		</div>
		<div class="basis-[40%] flex p-4 flex-col gap-4 items-center">
			<div class="text-lg font-bold">Track your sleep</div>
			<div class="text-center text-xs">Upgrade your sleep quality with our cutting-edge tracking app. Experience deeper rest and wake up revitalized. Sleep better, live better.</div>
			<NuxtLink class="w-full" to="sleep-app/dashboard">
			<button class="bg-gradient-to-r from-orange-600 via-orange-400 to-orange-600 w-full py-2 rounded-2xl">Get Started</button>
			</NuxtLink>
		</div>
	</div>
		<svg width="0"
			height="0">
			<defs>
				<clipPath id="smoothPodiumClip"
					clipPathUnits="userSpaceOnUse">
					<path d="m 0 0 l 320 0 l 0 160 a 6 5 0 0 1 -320 0"></path>
				</clipPath>
			</defs>
		</svg>
	</div>
</template>

<style scoped>

</style>
