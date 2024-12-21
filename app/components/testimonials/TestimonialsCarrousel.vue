<script setup
	lang="ts">
import {
	Controller,
	Virtual
} from 'swiper/modules'
import { Swiper as SwiperType } from 'swiper/types'
import { ref } from 'vue'
import type { TestimonialInfo } from '~/components/testimonials/useTestimonials'

interface TestimonialsCarrouselProps {
	items: TestimonialInfo[]
}

const props = defineProps<TestimonialsCarrouselProps>()

const modules = ref( [ Controller ] )

const currentRealIndexSwiper = ref( 1 )
const swiperCtrl             = ref<SwiperType | null>()

const slidesPerView = 3
const totalIndex    = computed(
	() => Math.ceil( props.items.length / slidesPerView ) )
const currentIndex  = computed(
	() => Math.floor( currentRealIndexSwiper.value / slidesPerView ) )

const setSwiper = ( swiper: SwiperType ) => {
	swiperCtrl.value = swiper
}

const change = ( swiper: SwiperType ) => {
	currentRealIndexSwiper.value = swiper.realIndex + 1
}

const SPEED = 500

const swipeLeft = () => {
	if ( swiperCtrl.value ) {
		if ( currentIndex.value > 0 ) {
			swiperCtrl.value.slideTo( ( currentIndex.value - 1 ) * slidesPerView, SPEED )
		}
		else {
			swiperCtrl.value.slideTo( ( totalIndex.value - 1 ) * slidesPerView, SPEED )
		}
	}
}

const swipeRight = () => {
	if ( swiperCtrl.value ) {
		if ( currentIndex.value < totalIndex.value - 1 ) {
			swiperCtrl.value.slideTo( ( currentIndex.value + 1 ) * slidesPerView, SPEED )
		}
		else {swiperCtrl.value.slideTo( 0, SPEED )
		}
	}
}

const setIndexSwipe = ( index: number ) => {
	if ( swiperCtrl.value ) {
		swiperCtrl.value.slideTo(index * slidesPerView, 500);
	}
}
</script>

<template>
	<div class="relative flex flex-col w-full gap-4">
		<div class="flex w-full items-center justify-center">
			<testimonials-button @click="swipeLeft"
				class="rotate-180 mr-5"
				icon="material-symbols-arrow-forward-ios-rounded"></testimonials-button>
			<Swiper
				@swiper="setSwiper"
				@slideChange="change($event)"
				:allow-touch-move="false"
				class="w-full"
				:modules
				:space-between="8"
				:slidesPerView
				:loop="false">
				<SwiperSlide v-for="(info,i) in items"
					class="flex"
					:key="i">
					<testimonials-card :info></testimonials-card>
				</SwiperSlide>
			</Swiper>
			<testimonials-button @click="swipeRight"
				icon="material-symbols-arrow-forward-ios-rounded"></testimonials-button>
		</div>
		<div class="flex justify-center w-full gap-2">
			<button
				v-for="i in totalIndex"
				:key="i"
				@click="setIndexSwipe(i-1)"
				:class="[currentIndex === i -1 ? 'bg-[#0efc4c]' : 'bg-[#262630]']"
				class="w-3 h-3 rounded-full"></button>
		</div>
	</div>
</template>

<style scoped>

</style>