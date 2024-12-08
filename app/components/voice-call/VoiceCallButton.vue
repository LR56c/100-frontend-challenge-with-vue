<script setup
	lang="ts">
interface VoiceCallButtonProps {
	icon : string
}

defineProps<VoiceCallButtonProps>()
</script>

<template>
<button class="flex rounded-full items-center justify-center bg-zinc-600/40 backdrop-blur-lg text-white p-2">
	<Icon size="30" :name="icon"/>
</button>
</template>

<style scoped>

</style>