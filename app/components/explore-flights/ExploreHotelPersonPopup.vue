<script setup
	lang="ts">
import type { HTMLAttributes } from 'vue'
import MyNumberCounter from '~/components/explore-flights/MyNumberCounter.vue'
import { Label } from '~/components/ui/label'
import {
	Popover,
	PopoverContent,
	PopoverTrigger
} from '~/components/ui/popover'
import { cn } from '~/lib/utils'
interface ExploreHotelPersonPopupProps {
	class?: HTMLAttributes['class']
}
const props = defineProps<ExploreHotelPersonPopupProps>()
const open = ref(false)
const guests = defineModel('guests',{
	default: 0
})
const rooms = defineModel('rooms',{
	default: 0
})
const placeholder = 'Guests and Rooms'
</script>

<template>
	<Popover v-model:open="open">
		<PopoverTrigger as-child>
			<button
				:class="cn('w-full h-full bg-white rounded-2xl flex py-2 px-4 items-center gap-2', props.class)">
				<span v-if="rooms > 0 && guests > 0">{{ guests }} Guests, {{ rooms }} Rooms</span>
				<span class="text-gray-400" v-else>{{ placeholder }}</span>
			</button>
		</PopoverTrigger>
		<PopoverContent class="border-0 w-auto bg-white rounded-2xl p-4">
			<div>
				<Label>Guests</Label>
				<my-number-counter v-model="guests" placeholder="Guests" class="w-full"/>
			</div>
			<div>
				<Label>Rooms</Label>
				<my-number-counter v-model="rooms" placeholder="Rooms" class="w-full"/>
			</div>
		</PopoverContent>
	</Popover>
</template>

<style scoped>

</style>
