<script setup
	lang="ts">
import type { Interests } from '~/components/interests/useInterests'
import { cn } from '~/lib/utils'

interface InterestsBadgeProps {
	data: Interests
}

const props    = defineProps<InterestsBadgeProps>()
const selected = ref( false )

const toggleSelected = () => {
	selected.value = !selected.value
}

const defaultCase = computed(()=>{
	const exist = props.data.icon === 'material-symbols-check-circle-rounded'
	return exist ? 'w-2 h-2 bg-white' : ''
})
</script>

<template>
	<button @click="toggleSelected"
		:class="[selected ? 'bg-[#3636f2] text-white':'bg-gray-200/75 border border-gray-300']"
		class="h-fit w-fit flex py-1 px-2 gap-1 items-center rounded-2xl">
		<div class="relative flex items-center justify-center">
			<div v-if="defaultCase.length"
				:class="[defaultCase]"
				class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-2xl"></div>
			<Icon
				:class="cn(props.data.class)"
				v-if="data.icon"
				:name="data.icon"/>
		</div>
		<span>{{ data.name }}</span>
	</button>
</template>

<style scoped>

</style>