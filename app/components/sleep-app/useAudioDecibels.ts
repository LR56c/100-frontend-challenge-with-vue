const sounds = [ 'low', 'medium', 'high' ] as const
export type SoundType = typeof sounds[number]

export const useAudioDecibels = defineStore( 'audio-decibels', () => {

	const soundResult   = createEventHook<SoundType>()
	const decibelResult = createEventHook<number>()
	const soundRef      = ref<SoundType | undefined>( undefined )

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

	let decibelSum   = 0
	let decibelCount = 0

	const onFrame = () => {
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
		decibelSum += decibels.value
		decibelCount++
	}

	const calculateAverage = () => {
		if ( decibelCount > 0 ) {
			const average = decibelSum / decibelCount
			decibelResult.trigger( average )
		}
		decibelSum   = 0
		decibelCount = 0
	}

	const { pause: pauseInterval, resume: resumeInterval } = useIntervalFn(
		() => {
			calculateAverage()
		}, 1000 )

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
			resumeInterval()
			isListening.value = true
		}
	}
	const stopListening                          = () => {
		if ( audioContext.value ) {
			audioContext.value.close()
		}
		pauseRaf()
		pauseInterval()
		stop()
		isListening.value = false
		calculateAverage()
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

	watch( decibels, ( newDecibels ) => {
		decibelResult.trigger( newDecibels )
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
		decibelResult,
		startListening,
		stopListening
	}
} )
