<script setup
	lang="ts">
const formatter = new Intl.NumberFormat( 'es-US', {
	style                : 'currency',
	currency             : 'USD',
	minimumFractionDigits: 2
} )

function formatRelativeTime(date: Date): string {
	const now = new Date();
	const diffInMilliseconds = now.getTime() - date.getTime();
	const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));

	// Usar Intl.RelativeTimeFormat para obtener el formato relativo
	const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
	return rtf.format(-diffInDays, 'day');
}

const categoryArray = [ 'travel', 'food', 'work', 'shopping' ]
type CategoryType = typeof categoryArray[number]

interface TransactionCardProps {
	category: CategoryType
	image?: string
	date: Date
	price: number
}

type CategoryProps = { type: 'icon', icon: string, color: string } | {
	type: 'image',
	image: string
}

const { category, image, date } = defineProps<TransactionCardProps>()

const categoryIconMap = new Map<string, string>( [
	[ 'travel', 'fluent-emoji-airplane' ],
	[ 'food', 'fluent-emoji-hamburger' ],
	[ 'work', 'fluent-emoji-briefcase' ],
	[ 'shopping', 'fluent-emoji-t-shirt' ]
] )

const categoryClassMap = new Map<string, string>( [
	[ 'travel', 'bg-blue-200' ],
	[ 'food', 'bg-green-200' ],
	[ 'work', 'bg-red-200' ],
	[ 'shopping', 'bg-yellow-200' ]
] )

const categorySelector = ( category: CategoryType ): CategoryProps => {
	if ( image ) {
		return {
			type : 'image',
			image: image!
		}
	}
	return {
		type : 'icon',
		icon : categoryIconMap.get( category )!,
		color: categoryClassMap.get( category )!
	}
}
const categoryRef = ref( categorySelector( category ) )
</script>

<template>
	<div class="flex justify-between items-center pr-4">
		<div class="flex items-center gap-2">
			<img v-if="categoryRef.type === 'image'"
				:src="categoryRef.image"/>
			<div v-else
				class="flex items-center justify-center w-10 h-10 rounded-2xl"
				:class="categoryRef.color"
			>
				<Icon size="20"
					:name="categoryRef.icon"/>
			</div>
			<div class="flex flex-col">
				<div class="capitalize font-medium">{{ category }}</div>
				<div class="text-sm text-gray-500">
				{{ formatRelativeTime( date ) }}
				</div>
			</div>
		</div>
		<div v-if="price < 0" class="flex text-sm h-fit py-1 px-2 font-medium items-center justify-center text-center rounded-2xl text-red-600 bg-red-200">{{ formatter.format(price) }}</div>
		<div v-else class="flex text-sm h-fit py-1 px-2 font-medium items-center justify-center text-center rounded-2xl text-green-600 bg-green-300">+{{ formatter.format(price) }}</div>
	</div>
</template>

<style scoped>

</style>
