<script setup
	lang="ts">

import MusicFestivalCard
	from '~/components/music-festival/MusicFestivalCard.vue'
</script>

<template>
	<div class="relative bg-[url('/electro-festival.png')] bg-center bg-cover w-screen h-screen flex flex-col">
		<div class="absolute bottom-[10%] left-[1%]">
			<div class="rotate-[-90deg] flex items-center gap-2 text-sm text-white">
				<Icon class="h-5"
					size="20"
					name="material-symbols-arrow-left-alt-rounded"/>
				<span class="font-bold">Scroll down</span>
			</div>
		</div>
		<div class="flex bg-black/50 backdrop-blur-lg h-16 justify-between px-12">
			<div class="flex items-center gap-4">
				<div class="text-2xl text-white font-bold">ELECTROFESTIVAL</div>
				<music-festival-button type="outline"
					label="3-6 JULY"></music-festival-button>
				<music-festival-button type="outline"
					label="ZAMARDI, HUNGARY"></music-festival-button>
			</div>
			<div class="flex items-center gap-4">
				<music-festival-button type="ghost"
					label="Tickets"></music-festival-button>
				<music-festival-button type="ghost"
					label="Lineup"></music-festival-button>
				<music-festival-button type="ghost"
					label="News"></music-festival-button>
				<music-festival-button type="ghost"
					label="Artists"></music-festival-button>
				<music-festival-button type="ghost"
					label="Explore"></music-festival-button>
			</div>
		</div>
		<div class="relative flex w-full h-full">
			<div class=" absolute bottom-[10%] left-[15%]">
				<music-festival-card></music-festival-card>
			</div>
			<pre class="p-12 text-white text-7xl font-bold text-end w-full h-full">
				2024
				ELECTRO
				MUSIC
				FESTIVAL
			</pre>
		</div>
	</div>
</template>

<style scoped>

</style>
