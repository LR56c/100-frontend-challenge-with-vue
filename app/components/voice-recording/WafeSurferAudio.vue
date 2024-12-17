<script setup
	lang="ts">
interface WafeSurferAudioProps {
	audio : Blob
}

const props = defineProps<WafeSurferAudioProps>()

import WaveSurfer from 'wavesurfer.js'

const wavesurfer = WaveSurfer.create({
	container: document.body,
	waveColor: 'rgb(200, 0, 200)',
	progressColor: 'rgb(100, 0, 100)',
	url: URL.createObjectURL(props.audio),
})

// wavesurfer.on('click', () => {
// 	wavesurfer.play()
// })

</script>

<template>

</template>

<style scoped>

</style>