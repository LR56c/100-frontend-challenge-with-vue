<script setup
	lang="ts">

import { watchOnce } from '@vueuse/core'
import cardValidator from 'card-validator'
import { ref } from 'vue'
import TransactionCard from '~/components/card-wallet/TransactionCard.vue'
import { useCardWallet } from '~/components/card-wallet/useCardWallet'
import {
	Carousel,
	type CarouselApi,
	CarouselContent,
	CarouselItem
} from '~/components/ui/carousel'
import { type CardMaskProps } from '~/lib/maskCard'

const formatter = new Intl.NumberFormat( 'es-US', {
	style                : 'currency',
	currency             : 'USD',
	minimumFractionDigits: 0
} )

function formatExpiryDateFromDate( date: Date ): string {
	const month = ( date.getMonth() + 1 ).toString()
	                                     .padStart( 2, '0' )
	const year  = date.getFullYear()
	                  .toString()
	                  .slice( 2 )

	return `${ month }/${ year }`
}

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

export interface CardProps {
	balance: number
	number: CardMaskProps,
	expire: Date
}

const store = useCardWallet()

const cardType = cardValidator.creditCardType.types

const cardTypeLogoMap = new Map<string, string>( [
	[ cardType['MASTERCARD']!, 'logos-mastercard' ],
	[ cardType['AMERICAN_EXPRESS']!, 'logos-amex' ],
	[ cardType['VISA']!, 'logos-visa' ]
] )

const gradientMap = new Map<number, Record<string, string>>( [
	[ 0, {
		'backgroundSize'    : '100% 100%',
		'backgroundPosition': '0px 0px,0px 0px,0px 0px',
		'backgroundImage'   : 'radial-gradient(75% 75% at 2% -3%, #00FFFFFF 0%, #073AFF00 100%),radial-gradient(75% 75% at 68% 118%, #CF00FFFF 0%, #073AFF00 100%),radial-gradient(75% 75% at 100% -7%, #8E17F3FF 0%, #500281FF 100%)'
	} ],
	[ 1, {
		'backgroundSize'    : '100% 100%',
		'backgroundPosition': '0px 0px,0px 0px,0px 0px',
		'backgroundImage'   : 'radial-gradient(75% 75% at 1% 5%, #F600FFFF 0%, #D81BBE00 100%),radial-gradient(75% 75% at 73% 100%, #FF0000FF 0%, #073AFF00 99%),radial-gradient(75% 75% at 75% 1%, #FFE100FF 0%, #D56500FF 100%)'
	} ],
	[ 2, {
		'backgroundSize'    : '100% 100%',
		'backgroundPosition': '0px 0px,0px 0px,0px 0px',
		'backgroundImage'   : 'radial-gradient(75% 75% at 1% 5%, #00F3FFFF 0%, #D81BBE00 100%),radial-gradient(75% 75% at 78% 108%, #003DFFFF 0%, #0AD8F300 99%),radial-gradient(75% 75% at 75% 1%, #3CFF00FF 0%, #157D0DFF 100%)'
	} ]
] )
</script>

<template>
	<div class="w-screen h-screen flex justify-center items-center bg-gray-200">
		<div class="rounded-2xl bg-white max-w-xs w-full shadow-lg flex flex-col">
			<div class="z-10 relative bg-black rounded-2xl w-full h-80 text-white flex flex-col gap-2">
				<div class="pl-4 pt-4 flex flex-col gap-2">
					<div class="text-sm">Welcome</div>
					<div class="font-medium text-2xl">My Cards</div>
				</div>
				<div class="rounded-2xl w-full h-56 flex flex-col gap-2">
					<Carousel
						:opts="{
						loop: true,
						}"
						class="relative w-full flex h-48 items-center pl-4"
						@init-api="(val) => emblaMainApi = val"
					>
						<CarouselContent class="p-4 gap-4">
							<CarouselItem v-for="([key, value], index) in store.cardsRef"
								:key="index"
								:style="gradientMap.get(index % gradientMap.size)"
								class="p-4 rounded-2xl flex flex-col gap-2">
								<div class="text-sm">Balance</div>
								<div class="font-medium text-3xl">{{
										formatter.format( value.balance )
									}}
								</div>
								<div><span class="tracking-[.25em]">{{
										value.number.masked
									}}</span> <span>{{ value.number.visible }}</span></div>
								<div class="flex justify-between items-center">
									<div class="flex flex-col">
										<div class="text-xs">Expires</div>
										<div class="text-xs">{{
												formatExpiryDateFromDate( value.expire )
											}}
										</div>
									</div>
									<Icon size="30" :name="cardTypeLogoMap.get(value.number.type) ?? ''"/>
								</div>
							</CarouselItem>
						</CarouselContent>
					</Carousel>
					<Carousel
						class="relative flex items-center justify-center"
						@init-api="(val) => emblaThumbnailApi = val"
					>
						<CarouselContent class="flex gap-4 ml-0">
							<CarouselItem v-for="([key, value], index) in store.cardsRef"
								:key="index"
								class="pl-0 basis-1/8 cursor-pointer"
								@click="onThumbClick(index)">
								<div
									class="rounded-2xl w-3 h-3"
									:class="index === selectedIndex ? 'bg-pink-400' : 'bg-gray-200/50'">
								</div>
							</CarouselItem>
						</CarouselContent>
					</Carousel>
				</div>
			</div>
			<div class="relative">
				<div class="absolute -translate-x-1/2 w-24 h-24 bg-black rotate-45 -bottom-6 inset-x-1/2 rounded-3xl"></div>
				<NuxtLink to="/card-wallet/add">
					<div class="z-20 absolute -translate-x-1/2 -bottom-6 inset-x-1/2 bg-pink-400 rounded-full w-7 h-7 flex items-center justify-center">
						<Icon size="20"
							class="text-white"
							name="material-symbols-add"/>
					</div>
				</NuxtLink>
			</div>
			<div class="pl-4 pt-8 pb-4 rounded-b-2xl bg-white flex flex-col gap-3">
				<div class="font-medium">Transactions</div>
				<transaction-card :price="-200"
					category="travel"
					:date="new Date(2024, 9, 1)"></transaction-card>
				<transaction-card :price="-16"
					category="food"
					:date="new Date(2024, 8, 29)"></transaction-card>
				<transaction-card :price="2400"
					category="work"
					:date="new Date(2024, 8, 28)"></transaction-card>
				<transaction-card :price="-140"
					category="shopping"
					:date="new Date(2024, 8, 28)"></transaction-card>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>
