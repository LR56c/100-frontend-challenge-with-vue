<script setup
	lang="ts">
interface VoiceRecordingButtonIconProps {
	icon : string
	size : 'xl' | 'sm'
}

const props = defineProps<VoiceRecordingButtonIconProps>()

const exteriorSize = computed(() => {
	return props.size === 'xl' ? 'w-32 h-32' : 'w-12 h-12'
})
const intermidiateSize = computed(() => {
	return props.size === 'xl' ? 'w-28 h-28' : 'w-10 h-10'
})
const interiorSize  = computed(() => {
	return props.size === 'xl' ? 'w-24 h-24' : 'w-8 h-8'
})
const iconClassSize = computed(() => {
	return props.size === 'xl' ? 'w-20 h-20' : 'w-8 h-8'
})
const iconSize = computed(() => {
	return props.size === 'xl' ? 70 : 30
})
</script>

<template>
<button :class="['relative rounded-full flex items-center justify-center bg-[#ff5555]', exteriorSize]">
	<div :class="['absolute rounded-full top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-[#ff7375]', intermidiateSize]"></div>
	<div :class="['absolute rounded-full top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-[#ff8182]', interiorSize]"></div>
	<div :class="['absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-white', iconClassSize]">
	<Icon :size="iconSize" :name="icon" />
	</div>
</button>
</template>

<style scoped>

</style>