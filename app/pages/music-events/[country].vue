<script setup
	lang="ts">

interface Events {
	date: Date
	title: string
	description: string
	isAvailable: boolean
}

const countryCityPlaces = new Map<string, string>( [
	[ 'united-kingdom', 'london' ],
	[ 'greece', 'athens' ],
	[ 'france', 'paris' ],
	[ 'germany', 'berlin' ],
	[ 'united states', 'new york' ]
] )

const events: Events[] = [
	{
		description: 'Swiftogeddon is a night dedicated to worshipping at the altar of Taylor. Swift: non-stop Swifty all night: deep cutS, extended mixes, fan favourites...',
		date       : new Date( 2024, 8, 22, 21 ),
		title      : 'Swiftogeddon - The Taylor Swift Club Night',
		isAvailable: false
	},
	{
		description: 'Launching the first ever \'Lana Del Rave\' at Heaven Nightclub. Join for a night devoted to the Queen Of Alternative well favourites from.„',
		date       : new Date( 2024, 11, 17, 22 ),
		title      : 'Lana Del Rave',
		isAvailable: true
	},
	{
		description: 'Featuring all your favourite festive hits from WHAM, SLADE, MARIAH, WIZZARD, THE POGUES and many more - as well as hairbrush anthems...',
		date       : new Date( 2024, 11, 19, 18, 30 ),
		title      : 'MASSAOKE: XMAS LIVE at the Electric Ballroom',
		isAvailable: true
	},
	{
		description: 'Eleni Tsaligopoulou is one of the most popular and beloved Greek singers with a Wide range of repertoire and timeless hits. During her 30 yearm',
		date       : new Date( 2024, 11, 22, 19 ),
		title      : 'Eleni Tsaligopoulou full-band',
		isAvailable: true
	}
]

const route      = useRoute()
const router     = useRouter()
const cityRef    = ref( '' )
const countryRef = ref( '' )
watch( () => route.params.country, ( country ) => {
	if ( !countryCityPlaces.has( country as unknown as string ) ) {
		router.replace( '/' )
	}
	else {
		countryRef.value = country as unknown as string
		cityRef.value    = countryCityPlaces.get( country as unknown as string )!
	}
}, {
	immediate: true
} )
const getDayFormat = ( date: Date ): string => {
	if ( date.toDateString() === new Date().toDateString() ) {
		return 'Today'
	}
	return date.toLocaleDateString( 'en-GB', { day: 'numeric', month: 'long' } )
}

const getHourFormat = ( date: Date ) => {
	return date.toLocaleTimeString( 'en-GB',
		{ hour: '2-digit', minute: '2-digit' } )
}

const tailwindColors = [
	'bg-red-200',
	'bg-blue-200',
	'bg-green-200',
	'bg-yellow-200',
	'bg-purple-200',
	'bg-pink-200',
	'bg-indigo-200',
	'bg-teal-200',
	'bg-orange-200',
	'bg-gray-200'
]

function shuffle( arr: string[] ): string[] {
	let i             = 0
	let res: string[] = []
	let index         = 0

	while ( i <= arr.length - 1 ) {
		index = Math.floor( Math.random() * arr.length )

		if ( !res.includes( arr[index]! ) ) {
			res.push( arr[index]! )
			i++
		}
	}

	return res
}

const randomColors = shuffle( tailwindColors )
</script>

<template>
	<div class="w-screen h-screen bg-gray-100 flex flex-col justify-center p-4 gap-4">
		<div class="font-bold text-3xl rounded-2xl">Music events</div>
		<div>in <span class="capitalize ">{{ cityRef }}</span>,
			<span class="capitalize ">{{ countryRef }}</span></div>
		<div class="flex flex-col gap-4">
			<div class="flex bg-white p-3 rounded-2xl items-center gap-4"
				v-for="(event, index) in events">
				<div
					data-allow-mismatch
					:class="[randomColors[index]]"
					class="w-28 h-16 rounded-2xl flex flex-col items-center justify-center p-2 basis-[15%]">
					<div class="text-xs font-bold">{{ getDayFormat( event.date ) }}</div>
					<div class="text-2xl font-bold">{{
							getHourFormat( event.date )
						}}
					</div>
				</div>
				<div class="flex-col flex basis-[65%]">
					<div class="text-lg font-bold">{{ event.title }}</div>
					<div>{{ event.description }}</div>
				</div>
				<div class="basis-[20%] max-w-36">
					<button v-if="event.isAvailable"
						class="w-full bg-black rounded-2xl text-white flex p-2 items-center justify-center gap-2">
						<Icon name="mdi-ticket-confirmation"/>
						<div>Buy ticket</div>
					</button>
					<div v-else
						class="font-bold flex items-center justify-center">Sold out!
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>
