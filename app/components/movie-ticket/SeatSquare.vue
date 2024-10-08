<script setup
	lang="ts">
import { cn } from '@/lib/utils'
import type { HTMLAttributes } from 'vue'
import type { SeatType } from '~/components/movie-ticket/useMovieTicket'

interface SeatSquareProps {
	status: SeatType
	class?: HTMLAttributes['class']
}

const props = defineProps<SeatSquareProps>()
const emit  = defineEmits<{
	squareClick: [ void ]
}>()

const onClick = () => {
	if ( props.status !== 'booked' ) {
		emit( 'squareClick' )
	}
}

</script>

<template>
	<div
		@click="onClick"
		:class="[
				cn(props.status === 'available' || props.status === 'selected' ? 'cursor-pointer': 'cursor-default', props.class),
				props.status === 'available' ? 'border-2 border-white': '',
				props.status === 'selected' ? 'bg-orange-500': '',
				props.status === 'booked' ? 'bg-white': ''
			]"
		class="w-4 h-4 rounded-2xl">
	</div>
</template>

<style scoped>

</style>
