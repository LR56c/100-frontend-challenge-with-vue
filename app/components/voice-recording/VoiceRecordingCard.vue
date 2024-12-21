<script setup
	lang="ts">
import type { VoiceRecord } from '~/components/voice-recording/useVoiceRecording'
import WafeSurferAudio from '~/components/voice-recording/WafeSurferAudio.vue'

interface VoiceRecordingCardProps {
	record: VoiceRecord
}

defineProps<VoiceRecordingCardProps>()

const open = ref( false )

const toggleOpen = () => {
	open.value = !open.value
}
</script>

<template>
	<div class="flex flex-col w-full rounded-2xl bg-[#f5ebec] gap-4 p-2">
		<button @click="toggleOpen" class="w-full flex justify-between items-center">
			<div class="w-fit h-fit flex items-center gap-2">
				<div class="flex items-center justify-center w-16 h-16">
				<voice-recording-button-icon size="sm" icon="material-symbols-play-arrow-rounded"></voice-recording-button-icon>
				</div>
				<div class="w-full flex flex-col items-start">
					<span class="font-bold">{{ record.name }}</span>
					<span class="text-gray-500 font-semibold">{{ useDateFormat( record.createdAt, 'D MMM - HH:mma' ) }}</span>
				</div>
			</div>
			<Icon size="30" v-if="!open" name="material-symbols-keyboard-arrow-down-rounded"/>
			<Icon size="30" v-else name="material-symbols-keyboard-arrow-up-rounded"/>
		</button>
		<wafe-surfer-audio v-show="open" :audio="record.url"></wafe-surfer-audio>
	</div>
</template>

<style scoped>

</style>