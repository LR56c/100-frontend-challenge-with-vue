<script setup
	lang="ts">
</script>

<template>
	<div class="w-screen h-screen flex items-center justify-center">
		<div class="relative w-full max-w-sm flex bg-black flex-col shadow-lg rounded-2xl">
				<NuxtLink class="absolute bottom-[2%] flex items-center justify-center w-full z-30" to="movie-ticket/choose">
				<button class="bg-orange-600 rounded-2xl w-[90%]  py-3 text-white">Buy
					Tickets
				</button>
				</NuxtLink>
			<img class="rounded-t-2xl -mb-8"
				src="/madame-web.jpg"/>
			<div class="relative overflow-y-scroll overflow-x-hidden bg-white flex flex-col rounded-2xl shadow-lg h-80 gap-4 p-4 pb-16">
				<div class="text-2xl font-bold">Madame Webb</div>
				<div class="flex text-sm w-full items-center justify-between">
					<div>Action/ Adventure/ Sci-Fi</div>
					<div>2h 13m</div>
				</div>
				<div>Cassandra Webb develops the power to see
					the future. Forced to confront revelations
					about her past, she forges a relationship with..
				</div>
				<div class="font-bold">Cast</div>
				<div class="flex gap-4">
					<img class="object-center object-cover w-16 h-16 rounded-2xl"
						src="/pj1.png"/>
					<img class="object-center object-cover w-16 h-16 rounded-2xl"
						src="/pj2.png"/>
					<img class="object-center object-cover w-16 h-16 rounded-2xl"
						src="/pj3.png"/>
				</div>
				<div class="h-96"></div>
			</div>
		</div>
	</div>
</template>
<style scoped>
</style>
