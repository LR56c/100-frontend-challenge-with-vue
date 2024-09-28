<script setup
	lang="ts">
import type Swiper from 'swiper'
import { ref } from 'vue'
import { SelectItem } from '~/components/ui/select'

interface Props {
	name: string
	direction: string
	description: string
	reviews: number
	stars: number
}

defineProps<Props>()

const modules            = ref(
	[ SwiperAutoplay, SwiperEffectCreative, SwiperThumbs ] )
const arr                = [ 1, 2, 3, 4, 5, 6, 7 ]
const currentIndexSwiper = ref( 1 )
const heartStatus        = ref( false )

const change = ( swiper: Swiper ) => {
	currentIndexSwiper.value = swiper.realIndex + 1
}
</script>

<template>
	<div class="bg-white flex gap-4 flex-col max-w-sm w-full shadow-2xl rounded-2xl">
		<div class="relative w-full rounded-t-2xl overflow-clip">
			<Swiper
				@slideChange="change($event)"
				class="w-full"
				:modules
				:slides-per-view="1"
				:loop="true"
				:effect="'creative'"
				:creative-effect="{
      prev: {
        shadow: false,
        translate: ['-20%', 0, -1],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    }"
			>
				<SwiperSlide v-for="i in arr"
					class="rounded-t-2xl flex"
					:key="i">
					<img alt=""
						class="w-full h-full rounded-t-2xl object-contain"
						:src="`land${i}.jpg`">
				</SwiperSlide>
			</Swiper>
			<div class="absolute z-20 rounded-full bottom-4 flex w-full justify-center items-center gap-2">
				<div v-for="i in arr"
					:class="[currentIndexSwiper === i ? 'bg-white' : 'bg-white opacity-75']"
					class="w-3 h-3 rounded-full"></div>
			</div>
		</div>
		<div class="flex px-4">
			<div class="flex flex-col gap-2 w-full">
				<div class="font-bold text-xl">{{ name }}</div>
				<div class="text-sm">{{ direction }}</div>
				<div class="flex items-center gap-2">
					<Icon name="i-fontisto-star"
						:class="[i > stars ? 'text-gray-300' : 'text-yellow-500']"
						class="text-yellow-500"
						v-for="i in 5"></Icon>
					<span class="text-sm">({{ reviews }} reviews)</span>
				</div>
			</div>
			<template v-if="heartStatus">
				<Icon size="30"
					@click="heartStatus = !heartStatus"
					name="ic-baseline-favorite"/>
			</template>
			<template v-else>
				<Icon size="30"
					@click="heartStatus = !heartStatus"
					name="ic-baseline-favorite-border"/>
			</template>
		</div>
		<div class="px-4">{{ description }}</div>
		<div class="h-full"></div>
		<button class="rounded-b-2xl bg-black text-white w-full py-4">Make a
			reservation
		</button>
	</div>
</template>

<style scoped>

</style>
