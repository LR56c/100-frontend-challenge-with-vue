<script setup
	lang="ts">

import { watchOnce } from '@vueuse/core'
import { ref } from 'vue'
import { Card } from '~/components/ui/card'
import {
	Carousel,
	type CarouselApi,
	CarouselContent,
	CarouselItem
} from '~/components/ui/carousel'

import type { ImagePreviewProps } from '~/pages/images-preview/index.vue'

const images = defineModel<ImagePreviewProps[]>()

const emblaMainApi      = ref<CarouselApi>()
const emblaThumbnailApi = ref<CarouselApi>()
const selectedIndex     = ref( 0 )

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
</script>

<template>
	<div class="flex flex-col gap-2">
			<Carousel
				class="relative flex basis-[80%] pt-4 pl-4"
				@init-api="(val) => emblaMainApi = val">
				<CarouselContent>
					<CarouselItem
						class="basis-[80%]"
						v-for="(item, index) in images"
						:key="index">
						<Card class="rounded-2xl border-gray-700 h-64">
							<img alt=""
								class="rounded-2xl object-cover"
								:src="item.img">
						</Card>
					</CarouselItem>
				</CarouselContent>
			</Carousel>
				<Carousel
					class="relative w-full flex pl-4 items-center"
					@init-api="(val) => emblaThumbnailApi = val"
				>
					<CarouselContent class="flex gap-1 ml-0 items-center">
						<CarouselItem v-for="(item, index) in images"
							:key="index"
							class="pl-0 basis-1/8 cursor-pointer"
							@click="onThumbClick(index)">
							<div class="p-1"
								:class="index === selectedIndex ? '' : 'opacity-50'">
								<Card class="rounded-2xl border-gray-700">
									<img alt=""
										class="rounded-2xl object-cover object-center w-16 h-12"
										:src="item.img">
								</Card>
							</div>
						</CarouselItem>
					</CarouselContent>
				</Carousel>
	</div>
</template>

<style scoped>

</style>
