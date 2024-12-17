<script setup
	lang="ts">
import WaveSurfer from 'wavesurfer.js'
import RecordPlugin from 'wavesurfer.js/dist/plugins/record.esm.js'

let wavesurfer :WaveSurfer
let record
let scrollingWaveform = false

// const mic    = templateRef<HTMLElement>( 'mic' )
const progress    = templateRef<HTMLElement>( 'progress' )
const recButton   = templateRef<HTMLButtonElement>( 'record' )
const pauseButton = templateRef<HTMLButtonElement>( 'pause' )

const createWaveSurfer = () => {
	if ( wavesurfer ) {
		wavesurfer.destroy()
	}
	wavesurfer = WaveSurfer.create( {
		container    : '#mic',
		waveColor    : 'rgb(200, 0, 200)',
		progressColor: 'rgb(100, 0, 100)'
	} )
	record     = wavesurfer.registerPlugin(
		RecordPlugin.create( {
			renderRecordedAudio: false,
			scrollingWaveform
		} )
	)
	record.on( 'record-end', ( blob ) => {
		const recordedUrl = URL.createObjectURL( blob )
		console.log( 'recordedUrl', recordedUrl )
	} )
	pauseButton.value.style.display = 'none'
	recButton.value.textContent     = 'Record'

	record.on( 'record-progress', ( time ) => {
		updateProgress( time )
	} )
}

const updateProgress = ( time ) => {
	const formattedTime        = [
		Math.floor( ( time % 3600000 ) / 60000 ), // minutes
		Math.floor( ( time % 60000 ) / 1000 ) // seconds
	]
		.map( ( v ) => ( v < 10 ? '0' + v : v ) )
		.join( ':' )
	progress.value.textContent = formattedTime
}

const onPause = () => {
	if ( record.isPaused() ) {
		record.resumeRecording()
		pauseButton.value.textContent = 'Pause'
		return
	}

	record.pauseRecording()
	pauseButton.value.textContent = 'Resume'
}

// RecordPlugin.getAvailableAudioDevices()
//             .then( ( devices ) => {
// 	            devices.forEach( ( device ) => {
// 		            const option = document.createElement( 'option' )
// 		            option.value = device.deviceId
// 		            option.text  = device.label || device.deviceId
// 		            micSelect.appendChild( option )
// 	            } )
//             } )

const handleRecord = () => {
	if ( record.isRecording() || record.isPaused() ) {
		record.stopRecording()
		recButton.value.textContent     = 'Record'
		pauseButton.value.style.display = 'none'
		return
	}

	recButton.value.disabled = true

	// const deviceId = micSelect.value
	// record.startRecording( { deviceId } )
	//       .then( () => {
	// 	      recButton.value.textContent     = 'Stop'
	// 	      recButton.value.disabled        = false
	// 	      pauseButton.value.style.display = 'inline'
	//       } )
}

createWaveSurfer()
</script>

<template>
	<div class="flex flex-col">
		<h1 style="margin-top: 0">Press Record to start recording 🎙️</h1>
		<button @click="handleRecord"
			ref="record">Record
		</button>
		<button @click="onPause"
			ref="pause"
			style="display: none;">Pause
		</button>

		<p ref="progress">00:00</p>
		e
		<div id="mic"
			style="border: 1px solid #ddd; border-radius: 4px; margin-top: 1rem"></div>

		<div ref="recordings"
			style="margin: 1rem 0"></div>

	</div>
</template>

<style scoped>

</style>