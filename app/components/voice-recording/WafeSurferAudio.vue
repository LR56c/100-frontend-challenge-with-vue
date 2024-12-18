<script setup
	lang="ts">
import { useWaveSurfer } from '@meersagor/wavesurfer-vue'

interface WafeSurferAudioProps {
	audio: Blob
}

const props        = defineProps<WafeSurferAudioProps>()
const containerRef = ref<HTMLElement | null>( null )
const options      = ref( {
	height       : 48,
	waveColor    : 'gray',
	progressColor: '#ff5457',
	barGap       : 5,
	barWidth     : 5,
	barRadius    : 8,
	duration     : 80,
	url          : URL.createObjectURL( props.audio )
} )

const { waveSurfer, isPlaying } = useWaveSurfer(
	{ containerRef, options: options.value } )

const play = () => {
	waveSurfer?.value?.playPause()
}
</script>

<template>
	<div class="w-full flex flex-col gap-4">
		<div ref="containerRef"></div>
		<div class="flex justify-between text-black">
			<voice-recording-button v-if="isPlaying" @click="play" label="Pause" icon="material-symbols-pause-rounded"></voice-recording-button>
			<voice-recording-button v-else @click="play" label="Play" icon="material-symbols-play-arrow-rounded"></voice-recording-button>
			<voice-recording-button disabled label="Share" icon="ic-baseline-share"></voice-recording-button>
			<voice-recording-button disabled label="Delete" icon="material-symbols-delete-rounded"></voice-recording-button>
		</div>
	</div>
</template>