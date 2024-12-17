<script setup
	lang="ts">
interface VoiceRecordingButtonProps {
	label : string
	icon : string
}

defineProps<VoiceRecordingButtonProps>()
</script>

<template>
<button class="flex items-center justify-center gap-2 py-1 px-2 rounded-full bg-white">
	<div class="flex items-center justify-center text-black bg-[#f2cdd4]">
		<Icon :name="icon"/>
	</div>
	<span class="font-semibold">{{ label }}</span>
</button>
</template>

<style scoped>

</style>