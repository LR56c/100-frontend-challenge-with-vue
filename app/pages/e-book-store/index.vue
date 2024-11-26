<script setup
	lang="ts">

import { useEBookStore } from '~/components/e-book-store/useEBookStore'

const store = useEBookStore()
</script>

<template>
	<div class="bg-gray-100 w-screen h-screen flex flex-col px-12 gap-8">
		<nav class="flex w-full justify-between py-4">
			<span class="text-lg font-bold">BookByte</span>
			<div class="flex gap-4 font-semibold">
				<span class="cursor-pointer">E-books</span>
				<span class="cursor-pointer">Audiobooks</span>
				<span class="cursor-pointer">App&Readers</span>
				<span class="cursor-pointer">Contact</span>
			</div>
			<div class="flex gap-4">
				<e-book-store-button class="bg-pink-200"
					label="Sign In"></e-book-store-button>
				<e-book-store-button class="text-white bg-pink-600"
					label="Try for Free"></e-book-store-button>
			</div>
		</nav>
		<div class="h-96 w-ful rounded bg-pink-200 p-12 flex gap-4 overflow-hidden">
			<div class="basis-[40%] flex flex-col gap-6">
				<div class="flex flex-col">
					<span class="text-gray-700 text-2xl font-semibold">Listen to audiobooks for</span>
					<span class="font-bold text-2xl">14 days for free</span>
				</div>
				<div class="flex flex-col">
					<div class="text-black/80">Enjoy over
						<span class="font-semibold text-black">900,000</span> audiobooks and
						e-books on BookBeat. During the trial period, you get access to
						<span class="font-semibold text-black">20 hours</span> of listening
						and reading. After the trial períod, BookByte costs from
						<span class="font-semibold text-black">$7.99/month.</span></div>
					<span class="font-semibold text-lg text-black">You can cancel the subscription at any time.</span>
				</div>
				<div class="flex gap-4">
					<e-book-store-button class="w-52 text-white bg-pink-600"
						label="Try for Free"></e-book-store-button>
					<e-book-store-button class="w-52 bg-white"
						label="View Categories"></e-book-store-button>
				</div>
			</div>
			<div class="w-full h-full relative basis-[60%]">
				<nuxt-img class="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-10 w-full h-full object-cover object-center" src="/book3d.png"/>
				<div class="absolute -bottom-[70%] w-64 h-64 rounded-full bg-pink-300"></div>
				<div class="absolute -top-[60%] -right-[30%] w-96 h-96 rounded-full bg-indigo-700"></div>
			</div>
		</div>
		<div class="flex flex-col gap-4">
		<div class="flex justify-between w-full">
			<span class="font-bold text-lg">Today's Hits</span>
			<e-book-store-button class="bg-pink-200"
				label="View all"></e-book-store-button>
		</div>
		<div class="flex justify-between">
			<e-book-store-card v-for="book in store.books"
				class="min-w-40 max-w-40 min-h-60 max-h-60"
				:key="book.id" :book
			></e-book-store-card>
		</div>
		</div>
	</div>
</template>

<style scoped>

</style>