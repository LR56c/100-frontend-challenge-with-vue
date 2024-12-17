<script setup
	lang="ts">
interface VoiceRecordingButtonIconProps {
	icon : string
}

defineProps<VoiceRecordingButtonIconProps>()
</script>

<template>
<button class="relative flex items-center justify-center bg-[#ff5555] w-40 h-40">
	<div class="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-[#ff7375] w-36 h-36"></div>
	<div class="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-[#ff8182] w-32 h-32"></div>
	<div class="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-28 h-28 text-white">
	<Icon size="40" :name="icon" />
	</div>
</button>
</template>

<style scoped>

</style>