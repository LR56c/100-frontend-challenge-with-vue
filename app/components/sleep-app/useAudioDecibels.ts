const sounds = [ 'low', 'medium', 'high' ] as const
export type SoundType = typeof sounds[number]

export const useAudioDecibels = defineStore( 'audio-decibels', () => {

	const soundResult = createEventHook<SoundType>()
	const soundRef    = ref<SoundType | undefined>( undefined )

	const {
		      audioInputs: microphones
	      }                 = useDevicesList( {
		requestPermissions: true
	} )
	const currentMicrophone = computed( () => microphones.value[0]?.deviceId )
	const decibels          = ref( 0 )
	const isListening       = ref( false )

	const { stream, start, stop } = useUserMedia( {
		constraints: {
			audio: { deviceId: currentMicrophone }
		}
	} )
	const audioContext            = ref<AudioContext | undefined>(
		undefined )
	const pcmData                 = ref<Float32Array | undefined>(
		undefined )
	const analyzer                = ref<AnalyserNode | undefined>(
		undefined )
	const onFrame                 = () => {
		if ( !analyzer.value || !pcmData.value ) {
			return
		}
		analyzer.value.getFloatTimeDomainData( pcmData.value )
		let sumSquares = 0.0
		for ( const amplitude of pcmData.value ) {
			sumSquares += amplitude * amplitude
		}
		decibels.value = Math.sqrt( sumSquares / pcmData.value.length )
		checkSound( decibels.value )
	}

	const checkSound                             = ( decibels: number ) => {
		if ( decibels > 0.005 && decibels < 0.05 ) {
			soundRef.value = 'medium'
		}
		else if ( decibels > 0.05 ) {
			soundRef.value = 'high'
		}
		else {
			soundRef.value = 'low'
		}
	}
	const { pause: pauseRaf, resume: resumeRaf } = useRafFn( () => {
		if ( stream.value ) {
			onFrame()
		}
	} )
	const startListening                         = () => {
		start()
		if ( stream.value ) {
			audioContext.value               = new AudioContext()
			const mediaStreamAudioSourceNode = audioContext.value.createMediaStreamSource(
				stream.value! )
			analyzer.value                   = audioContext.value.createAnalyser()
			mediaStreamAudioSourceNode.connect( analyzer.value )
			pcmData.value = new Float32Array( analyzer.value.fftSize )
			resumeRaf()
			isListening.value = true
		}
	}
	const stopListening                          = () => {
			if ( audioContext.value ) {
				audioContext.value.close()
			}
			pauseRaf()
			stop()
			isListening.value = false
	}
	const toggleListening                        = () => {
		if ( isListening.value ) {
			stopListening()
		}
		else {
			startListening()
		}
	}
	watch( stream, ( newStream ) => {
		if ( newStream ) {
			startListening()
		}
	} )

	watch( soundRef, ( newSound, oldSound ) => {
		if ( newSound && newSound !== oldSound ) {
			soundResult.trigger( newSound )
		}
	} )

	onUnmounted( () => {
		stopListening()
	} )

	return {
		decibels,
		toggleListening,
		isListening,
		soundResult,
		startListening,
		stopListening
	}
} )
