<script setup
	lang="ts">
import { useWaveSurferRecorder } from '@meersagor/wavesurfer-vue'
import WafeSurferRecorder
	from '~/components/voice-recording/WafeSurferRecorder.vue'
const showAudioRecordButton = ref<boolean>(true)
const containerRef = ref<HTMLDivElement | null>(null)
const options = computed(() => ({
	height: 48,
	waveColor: "#66667D",
	progressColor: "#6A24FF",
	barGap: 5,
	barWidth: 5,
	barRadius: 8,
	cursorWidth: 0,
	// url: "https://revews-bucket.s3.ap-southeast-1.amazonaws.com/a06mmMU3sgnzuUkH4OiHvyuUgCFdLSnJaDLBao7y.webm",
}))

const { pauseRecording, startRecording, stopRecording, currentTime, isPauseResume } = useWaveSurferRecorder({
	containerRef,
	options: options.value,
	recordPluginOptions:{
		continuousWaveform: true
	}
})

const startAudioRecordHandler = () => {
	startRecording()
	showAudioRecordButton.value = false
}

const stopHandler = async () => {
	const blob = await stopRecording()
	console.log('blob =====', blob);
	showAudioRecordButton.value = true
}
</script>

<template>
	<div class="bg-[#e7c7c8] w-screen h-screen flex items-center justify-center">
		<div class="relative bg-white rounded-2xl shadow-lg w-full max-w-sm flex flex-col p-4 items-center">
			<div class="flex w-full items-center">
				<span class="text-xl text-center">Recordings</span>
			</div>
			<client-only>
			<wafe-surfer-recorder></wafe-surfer-recorder>
			</client-only>
		</div>
	</div>
</template>

<style scoped>

</style>