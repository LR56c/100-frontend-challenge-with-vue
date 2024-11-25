<script setup
	lang="ts">
import { formatTimeAgo } from '@vueuse/core'
import type { Shot } from '~/components/add-shot/useAddShot'
import MyIconButtonColored from '~/components/shared/MyIconButtonColored.vue'

interface AddShotCardProps {
	shot: Shot
}

const props = defineProps<AddShotCardProps>()

const emit = defineEmits<{
	selectItem: [Shot]
}>()

const selectItem = () => {
	emit( 'selectItem', props.shot )
}

const selected = ref( false )
const el = useTemplateRef( 'item' )
useMutationObserver( el, ( mutations ) => {
	if ( mutations[0]) {
		const element = mutations[0].target as HTMLElement
		selected.value = element.dataset.selected === 'true'
	}
}, {
	attributes     : true,
	attributeFilter: [ 'data-selected' ]
} )
</script>

<template>
	<div ref="item" class="w-full h-full flex border border-gray-400 rounded-2xl p-2 hover:bg-gray-300 cursor-pointer items-center justify-between"
	@click="selectItem">
		<div class="flex items-center gap-4">
		<add-shot-multiple-card-effect :avatar="shot.avatar"></add-shot-multiple-card-effect>
		<div class="flex flex-col justify-center">
			<span class="font-semibold">{{ shot.name }}</span>
			<span class="text-sm">{{ shot.count }} shots</span>
			<span class="text-gray-500 text-sm">updated: {{ formatTimeAgo(shot.updateDate) }}</span>
		</div>
		</div>
		<div v-if="selected">
		<my-icon-button-colored
			icon="material-symbols-check-box"
			background-class="bg-purple-600"
			icon-class="text-purple-300"
		></my-icon-button-colored>
		</div>
	</div>
</template>

<style scoped>

</style>