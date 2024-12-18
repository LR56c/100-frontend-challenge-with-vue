<script setup
	lang="ts">
interface VoiceRecordingButtonProps {
	label : string
	icon : string
}

defineProps<VoiceRecordingButtonProps>()
</script>

<template>
<button class="disabled:cursor-not-allowed flex items-center justify-center gap-2 py-1 px-2 rounded-full bg-white">
	<div class="flex items-center justify-center text-black bg-[#f2cdd4] rounded-full p-1">
		<Icon :name="icon"/>
	</div>
	<span class="font-semibold">{{ label }}</span>
</button>
</template>

<style scoped>

</style>