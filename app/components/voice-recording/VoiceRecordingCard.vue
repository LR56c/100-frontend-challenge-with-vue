<script setup
	lang="ts">
import type { VoiceRecord } from '~/components/voice-recording/useVoiceRecording'

interface VoiceRecordingCardProps {
	record: VoiceRecord
}

defineProps<VoiceRecordingCardProps>()

const open = ref( false )
</script>

<template>
	<div class="flex flex-col w-full rounded-2xl bg-[#f5ebec]">
		<div class="w-full flex justify-between">
			<div class="flex">
				<voice-recording-button-icon icon="material-symbols-play-arrow-rounded"></voice-recording-button-icon>
				<div class="w-full flex flex-col">
					<span>{{ record.name }}</span>
					<span>{{ useDateFormat( record.createdAt, 'D MMM - HH:mma' ) }}</span>
				</div>
			</div>
			<Icon v-if="open" name="material-symbols-keyboard-arrow-down-rounded"/>
			<Icon v-else name="material-symbols-keyboard-arrow-up-rounded"/>
		</div>
	</div>
</template>

<style scoped>

</style>