<script lang="ts"
	setup>
import {
	computed,
	ref
} from 'vue'
import { useWaveSurferRecorder } from '@meersagor/wavesurfer-vue'
import { toast } from 'vue-sonner'
import { useVoiceRecording } from '~/components/voice-recording/useVoiceRecording'

const store = useVoiceRecording()
const showAudioRecordButton = ref<boolean>( true )
const playing = ref<boolean>( false )
const containerRef          = ref<HTMLDivElement | null>( null )

const options = computed( () => ( {
	height       : 48,
	waveColor    : '#ff5457',
	progressColor: '#66667D',
	barGap       : 5,
	barWidth     : 5,
	barRadius    : 8,
	cursorWidth  : 0
} ) )

const {
	      pauseRecording,
	      startRecording,
	      stopRecording,
	      currentTime,
      } = useWaveSurferRecorder( {
	containerRef,
	options            : options.value,
	recordPluginOptions: {
		scrollingWaveform: true
	}
} )

const startAudioRecordHandler = () => {
	startRecording()
	playing.value = true
	showAudioRecordButton.value = false
}

const stopHandler = async () => {
	const blob = await stopRecording()
	showAudioRecordButton.value = true
	store.addVoice(blob)
	toast('Recording saved',{})
	playing.value = false
}

const discardRecording = async () => {
	await stopRecording()
	startRecording()
	showAudioRecordButton.value = false
	playing.value = true
}

const pauseHandler = () => {
	pauseRecording()
	playing.value = false
}

const toggleRecord = () => {
	if ( showAudioRecordButton.value ) {
		startAudioRecordHandler()
	} else {
		pauseHandler()
	}
}
</script>

<template>
	<div class="w-full flex flex-col items-center gap-6">
		<voice-recording-button-icon size="xl" @click="toggleRecord" icon="material-symbols-mic-outline-rounded"></voice-recording-button-icon>
		<span class="text-center text-3xl font-bold">{{ currentTime }}</span>
		<div class="w-full">
			<div class="w-full" ref="containerRef"></div>
		</div>
		<div class="relative w-full flex justify-between bg-[#f4ebec] rounded-full px-4 py-1">
			<div class="absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 text-white">
				<button v-if="!playing" @click="startAudioRecordHandler"
					class="flex items-center justify-center bg-[#ff565d] w-12 h-12 rounded-full">
					<Icon size="30" name="material-symbols-play-arrow-rounded"/>
				</button>
				<button v-else @click="pauseHandler"
					class="flex items-center justify-center bg-[#ff565d] w-12 h-12 rounded-full">
					<Icon size="30" name="material-symbols-light-pause-rounded"/>
				</button>
			</div>
			<template v-if="!showAudioRecordButton">
				<button
					class="font-semibold"
					@click="discardRecording">Discard</button>
				<button
					class="font-semibold"
					@click="stopHandler">Stop</button>
			</template>
		</div>
	</div>
</template>