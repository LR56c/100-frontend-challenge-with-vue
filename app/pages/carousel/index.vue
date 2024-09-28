<script setup
	lang="ts">
import type Swiper from 'swiper'
import { ref } from 'vue'
import { watchOnce } from '@vueuse/core'
import {
	Carousel,
	type CarouselApi,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '@/components/ui/carousel'
import {
	Card,
	CardContent
} from '@/components/ui/card'

const emblaMainApi      = ref<CarouselApi>()
const emblaThumbnailApi = ref<CarouselApi>()
const selectedIndex     = ref( 0 )

const arr = [ 1, 2, 3, 4, 5, 6, 7 ]

function onSelect() {
	if ( !emblaMainApi.value || !emblaThumbnailApi.value ) {
		return
	}
	selectedIndex.value = emblaMainApi.value.selectedScrollSnap()
	emblaThumbnailApi.value.scrollTo( emblaMainApi.value.selectedScrollSnap() )
}

function onThumbClick( index: number ) {
	if ( !emblaMainApi.value || !emblaThumbnailApi.value ) {
		return
	}
	emblaMainApi.value.scrollTo( index )
}

watchOnce( emblaMainApi, ( emblaMainApi ) => {
	if ( !emblaMainApi ) {
		return
	}

	onSelect()
	emblaMainApi.on( 'select', onSelect )
	emblaMainApi.on( 'reInit', onSelect )
} )

const modules = ref( [ SwiperAutoplay, SwiperEffectCreative, SwiperThumbs ] )

const thumbsSwiper = ref<Swiper | null>()

const setThumbsSwiper = ( swiper: Swiper ) => {
	thumbsSwiper.value = swiper
}

function onSelectSwiper() {

}
</script>

<template>
	<div class="w-screen h-screen bg-black/95">
				<div class="w-screen h-screen flex flex-col items-center">
					<Carousel
						class="relative flex items-center w-full max-w-xl basis-[70%]"
						@init-api="(val) => emblaMainApi = val"
					>
						<CarouselContent>
							<CarouselItem v-for="(i, index) in arr"
								:key="index">
								<Card class="rounded-2xl border-gray-700">
									<img alt=""
										class="rounded-2xl object-contain w-full h-full"
										:src="`land${i}.jpg`">
								</Card>
							</CarouselItem>
						</CarouselContent>
						<CarouselPrevious class="text-white"/>
						<CarouselNext class="text-white"/>
					</Carousel>
					<Carousel
						class="relative w-full flex items-center basis-[30%]"
						@init-api="(val) => emblaThumbnailApi = val"
					>
						<CarouselContent class="flex gap-1 ml-0">
							<CarouselItem v-for="(i, index) in arr"
								:key="index"
								class="pl-0 basis-1/4 cursor-pointer"
								@click="onThumbClick(index)">
								<div class="p-1"
									:class="index === selectedIndex ? '' : 'opacity-50'">
									<Card class="rounded-2xl border-gray-700">
										<img alt=""
											class="rounded-2xl object-contain w-full h-full"
											:src="`land${i}.jpg`">
										<!--								<CardContent class="flex aspect-square items-center justify-center p-6">-->
										<!--									<span class="text-4xl font-semibold">{{ index + 1 }}</span>-->
										<!--								</CardContent>-->
									</Card>
								</div>
							</CarouselItem>
						</CarouselContent>
					</Carousel>
				</div>
		<div class="w-screen h-screen flex flex-col items-center">
			<div class="relative flex items-center w-full max-w-xl basis-[70%]">
				<Swiper
					class="w-full"
					:modules
					:slides-per-view="1"
					:loop="true"
					:thumbs="{
					swiper: thumbsSwiper,
				}"
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
						class="rounded-2xl flex"
						:key="i">
						<img alt=""
							class="w-full h-full rounded-2xl object-contain"
							:src="`land${i}.jpg`">
					</SwiperSlide>
				</Swiper>
			</div>
			<Swiper @swiper="setThumbsSwiper"
				class="relative flex items-center w-full basis-[30%]"
				:spaceBetween="20"
				:slidesPerView="4.5"
				:watchSlidesProgress="true"
				:grabCursor="true"
				:modules>
				<SwiperSlide v-for="i in arr"
					:key="i">
					<img alt=""
						class="w-full h-full object-contain"
						:src="`land${i}.jpg`">
				</SwiperSlide>
			</Swiper>
		</div>
	</div>
</template>

<style scoped>

</style>
