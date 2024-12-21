export const useTimeWidget = defineStore( 'time-widget', () => {
	const currentTime = ref<number>( 0 )

	const playing = ref<boolean>( false )

	const maxTime = ref<number>( 3 )

	let lastUpdate = 0

	let startTime = 0


	const { pause: pauseRaf, resume: resumeRaf } = useRafFn( () => {
		const elapsedTime = startTime - performance.now()
		currentTime.value = Math.max((elapsedTime + lastUpdate) / 1000, 0)
		if ( currentTime.value <= 0 ) {
			playing.value = false
			pauseRaf()
		}
	} )
	const _toggleRafCounter = () => {
		if ( playing.value ) {
			lastUpdate = currentTime.value * 1000
			pauseRaf()
		}
		else {
			startTime  = performance.now() + lastUpdate
			lastUpdate = maxTime.value * 1000
			resumeRaf()
		}
	}
	const resetStop         = () => {
		currentTime.value = 0
		lastUpdate        = 0
		playing.value = false
		pauseRaf()
	}
	const reset = () => {
		resetStop()
		_toggleRafCounter()
		_toggleRafCounter()
		playing.value = true
	}
	const togglePlay        = () => {
		_toggleRafCounter()
		playing.value = !playing.value
	}
	const getPercentageDuration                  = computed( () => {
		return Math.floor((currentTime.value / maxTime.value) * 100)
	} )

	const addTime = ( time: number ) => {
		maxTime.value += time
		lastUpdate += time * 1000
		currentTime.value = Math.min(currentTime.value + time, maxTime.value)
	}
	onMounted( () => {
		resetStop()
		_toggleRafCounter()
	} )
	return {
		currentTime,
		playing,
		resetStop,
		reset,
		togglePlay,
		addTime,
		getPercentageDuration
	}
} )