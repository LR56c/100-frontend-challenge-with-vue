<script setup
	lang="ts">

import ArticleGridButton from '~/components/articles-grid/ArticleGridButton.vue'
import ArticleGridCard from '~/components/articles-grid/ArticleGridCard.vue'
</script>

<template>
	<div class="w-screen h-screen flex items-center justify-center bg-gray-100">
		<div class="w-[800px] h-[800px] gap-4 grid grid-rows-4 grid-cols-4">
			<article-grid-card image="https://images.unsplash.com/photo-1652650445101-3bb4f755b67c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXJ0JTIwM2R8ZW58MHx8MHx8fDI%3D"></article-grid-card>
			<article-grid-card image="https://images.unsplash.com/photo-1608206250930-93071d3a02d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFydCUyMHBob3RvfGVufDB8fDB8fHwy"></article-grid-card>
			<article-grid-card image="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9iaWxlfGVufDB8fDB8fHwy"
				class="row-span-3 col-span-2"></article-grid-card>
			<article-grid-card image="https://images.unsplash.com/photo-1617321248535-bcfdd5253295?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNpdHklMjBidWlsZGluZ3xlbnwwfHwwfHx8Mg%3D%3D"
				class="row-span-3 col-span-2">
				<template #background>
					<div class="w-full h-full bg-blue-900 opacity-60"></div>
				</template>
				<template #default>
					<div class="flex flex-col items-center text-center text-white p-8 gap-4">
						<span class="text-gray-300">4 May 2024</span>
						<span class="font-semibold text-2xl">This is a post title</span>
						<span class="text-gray-300">Apolloniates de lotus guttus, amor stella!Resistentia, guttus, et domina.Ubi est magnum olla?</span>
						<article-grid-button class="bg-indigo-700 rounded-2xl"
							label="Read more"></article-grid-button>
					</div>
				</template>
			</article-grid-card>
			<article-grid-card image="https://images.unsplash.com/photo-1701803525616-311db929a2cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdhdGVyJTIwcGhvdG98ZW58MHx8MHx8fDI%3D"></article-grid-card>
			<article-grid-card image="https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHN0b2Nrc3xlbnwwfHwwfHx8Mg%3D%3D">
				<template #background>
					<div class="w-full h-full bg-blue-900 opacity-60"></div>
				</template>
				<template #default>
					<div class="flex flex-col text-white p-4 gap-2">
						<span class="text-gray-300">30 April 2024</span>
						<span class="font-semibold text-lg">This is a post title</span>
						<span class="text-gray-300 text-sm">Apolloniates de lotus guttus, amor stella!</span>
						<article-grid-button class="bg-indigo-700 rounded-2xl"
							label="Read more"></article-grid-button>
					</div>
				</template>
			</article-grid-card>
		</div>
	</div>
</template>

<style scoped>

</style>