<script setup
	lang="ts">
interface WebsiteLaunchDateSegmentProps {
	label : string
	value : number
}
defineProps<WebsiteLaunchDateSegmentProps>()
</script>

<template>
<div class="relative font-bold text-7xl w-28 flex items-center justify-center">
	<div class="uppercase absolute w-full h-full font-normal pt-2 flex items-center justify-center text-center text-white tracking-widest text-[24px]">{{ label }}</div>
	<span>{{value}}</span>
</div>
</template>

<style scoped>

</style>
