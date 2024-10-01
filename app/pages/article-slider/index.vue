<script setup
	lang="ts">

import { DateFormatter } from '@internationalized/date'
import { watchOnce } from '@vueuse/core'
import { PopoverArrow } from 'radix-vue'
import { ulid } from 'ulidx'
import { ref } from 'vue'
import {
	Carousel,
	type CarouselApi,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '~/components/ui/carousel'
import {
	Popover,
	PopoverContent,
	PopoverTrigger
} from '~/components/ui/popover'

const df = new DateFormatter( 'en-US', {
	dateStyle: 'medium'
} )

interface ArticleProps {
	id: string
	title: string
	url: string
	authorNick: string
	description: string
	authorImg: string
	authorName: string
	date: Date
}

const id1        = ulid()
const id2        = ulid()
const id3        = ulid()
const id4        = ulid()
const id5        = ulid()
const articleRef = ref( new Map<string, ArticleProps>( [
	[
		id1,
		{
			id         : id1,
			title      : 'The rise of quantum computing: A paradigm shift in technology',
			description: 'Quantum computing. once relegated to the realm of science fiction, is now becoming a tangible reality, promising to revolutionize the way we process information. IJnlike classical computers that use bits to represent either a O or a 1, quantum computers leverage quantum bits, or qubits, which',
			authorImg  : 'https://i.pravatar.cc/50?img=1',
			authorName : 'Paul Yarnell',
			date       : new Date( 2024, 1, 24 ),
			url        : 'https://www.google.com',
			authorNick : 'py'
		} ],
	[
		id2,
		{
			id         : id2,
			title      : 'Cum fiscina ire, omnes navises desiderium flavum, alter impositioes!',
			description: 'Habitios crescere! Naviss experimentum in pius virundum! Est bi-color accentor, cesaris. Spatii cadunts, tanquam bi-color gallus. Sunt hibridaes prensionem primus, regius diatriaes. Abaculus de fatalis lamia, experientia exemplar! Vae, domina! Homos sunt elevatuss de nobilis deus. Nuptias nocere!',
			authorImg  : 'https://i.pravatar.cc/50?img=2',
			authorName : 'Speciess mori! ',
			date       : new Date( 2024, 5, 24 ),
			url        : 'https://www.google.com',
			authorNick : 'sm'
		} ],
	[
		id3,
		{
			id         : id3,
			title      : 'Cum devirginato manducare, omnes silvaes locus camerarius, fatalis equisoes.',
			description: 'Cur parma observare? Naviss prarere in hortus! Albus, castus seculas grauiter reperire de rusticus, fatalis racana. Ubi est dexter vita? Cum fraticinida mori, omnes amores captis noster, emeritis hibridaes. Raptus, talis historias absolute consumere de regius, fatalis ventus. Cum nixus persuadere, omnes uriaes magicae neuter, nobilis finises. ',
			authorImg  : 'https://i.pravatar.cc/50?img=3',
			authorName : 'Messors cantare! ',
			date       : new Date( 2024, 3, 14 ),
			url        : 'https://www.google.com',
			authorNick : 'mc'
		} ],
	[
		id4,
		{
			id         : id4,
			title      : 'Secundus, grandis amors semper fallere de lotus, teres indictio. ',
			description: 'Nuclear vexatum iaceres prarere in bassus moscua! Cur mens assimilant? Humani generis de teres boreas, locus habena! Nutrix raptus brodium est. Cum pulchritudine unda, omnes parses examinare regius, altus candidatuses. Magnum idoleums ducunt ad scutum. Cum lanista studere, omnes eposes desiderium grandis, nobilis absolutioes. ',
			authorImg  : 'https://i.pravatar.cc/50?img=4',
			authorName : 'Voxs crescere! ',
			date       : new Date( 2024, 6, 4 ),
			url        : 'https://www.google.com',
			authorNick : 'vc'
		} ],
	[
		id5,
		{
			id         : id5,
			title      : 'Primus, germanus orexiss una prensionem de nobilis, velox mens. ',
			description: 'Talis, ferox accentors unus desiderium de raptus, primus luba. Pol, a bene messor. Cur contencio studere? Pius, primus fluctuss aegre desiderium de camerarius, regius particula. Trabem sapienter ducunt ad bi-color clinias. Pol, a bene apolloniates. Salvus, dexter abnobas recte prensionem de bi-color, grandis sectam. ',
			authorImg  : 'https://i.pravatar.cc/50?img=5',
			authorName : 'Nomens cadunt! ',
			date       : new Date( 2024, 5, 24 ),
			url        : 'https://www.google.com',
			authorNick : 'nc'
		}
	]
] ) )

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
	<div class="bg-gray-200 w-screen h-screen flex flex-col items-center justify-center">
		<Carousel
			class="relative flex items-center max-w-2xl"
			@init-api="(val) => emblaMainApi = val"
		>
			<CarouselContent>
				<CarouselItem v-for="([key,item], index) in articleRef"
					:key="index"
					class="p-12 w-full">
					<div class="relative flex bg-white shadow-lg rounded-2xl min-h-[272px] max-h-[272px]">
						<div class="text-3xl w-12 h-12 flex items-center justify-center font-bold pb-0.5 rounded-full absolute -top-5 -left-5 bg-white shadow-lg">
							{{ index + 1 }}
						</div>
						<img alt=""
							class="w-[272px] h-[272px] object-cover object-center rounded-l-2xl"
							:src="`land${index + 1}.jpg`">
						<div class="flex flex-col p-4 gap-4">
							<NuxtLink :to="item.url">
								<div class="font-bold">{{ item.title }}</div>
							</NuxtLink>
							<div class="text-sm line-clamp-6">{{ item.description }}</div>
							<div class="flex items-center justify-between">
								<div class="flex items-center gap-2">
									<img class="rounded-full h-8 w-8 object-cover object-center"
										:src="item.authorImg"/>
									<div class="flex flex-col">
										<div class="font-medium text-sm">{{
												item.authorName
											}}
										</div>
										<div class="text-gray-600 text-xs">{{
												df.format( item.date )
											}}
										</div>
									</div>
								</div>
								<Popover
								>
									<PopoverTrigger as-child>
										<button class="rounded-2xl bg-gray-200 w-6 h-6 flex items-center justify-center pb-0.5 hover:bg-blue-200 hover:bg-opacity-50 hover:border-2 hover:border-blue-500">
											<Icon name="mdi-share"/>
										</button>
									</PopoverTrigger>
									<PopoverContent
										class="p-0 border-0 w-full rounded-2xl"
										side="top"
									>
										<div class="bg-black text-white flex justify-center gap-2 items-center rounded-2xl p-2">
											<NuxtLink :to="item.authorNick">
												<Icon name="mdi-facebook"/>
											</NuxtLink>
											<NuxtLink :to="item.authorNick">
												<Icon name="ri-twitter-x-line"/>
											</NuxtLink>
											<NuxtLink :to="item.authorNick">
												<Icon name="ci-twitter"/>
											</NuxtLink>
										</div>
										<PopoverArrow/>
									</PopoverContent>
								</Popover>
							</div>
						</div>
					</div>
				</CarouselItem>
			</CarouselContent>
			<CarouselPrevious class="border-0 rounded-2xl w-8 h-8 bg-white"/>
			<CarouselNext class="border-0 rounded-2xl w-8 h-8 bg-white"/>
		</Carousel>
		<Carousel
			class="relative flex items-center"
			@init-api="(val) => emblaThumbnailApi = val"
		>
			<CarouselContent class="flex gap-4 ml-0">
				<CarouselItem v-for="(i, index) in articleRef"
					:key="index"
					class="pl-0 basis-1/8 cursor-pointer"
					@click="onThumbClick(index)">
					<div
						class="rounded-2xl w-4 h-4 p-1"
						:class="index === selectedIndex ? 'bg-blue-900' : 'bg-gray-500/75'">
					</div>
				</CarouselItem>
			</CarouselContent>
		</Carousel>
	</div>
</template>

<style scoped>

</style>
