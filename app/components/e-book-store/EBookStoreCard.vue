<script setup
	lang="ts">
import type { BookStore } from '~/components/e-book-store/useEBookStore'

interface EBookStoreCardProps {
	book: BookStore
}

defineProps<EBookStoreCardProps>()
</script>

<template>
<div class="transition hover:shadow-lg hover:shadow-gray-700 flex flex-col rounded w-full h-full">
	<img class="basis-[70%] rounded-t w-full h-full object-center object-cover" :src="book.avatar"/>
	<div class="basis-[30%] h-full w-full flex flex-col bg-zinc-950 rounded-b p-2">
		<span class="text-white text-sm line-clamp-2">{{ book.name }}</span>
		<span class="text-xs text-white/80 line-clamp-1">{{ book.author }}</span>
	</div>
</div>
</template>

<style scoped>

</style>