import {
	type SoundType,
	useAudioDecibels
} from '~/components/sleep-app/useAudioDecibels'

type SleepInterval = {
	sleepType: SoundType
	durationInSeconds: number
}

type SleepPercentage = {
	percentage: number
	type: SoundType
}

export type ActiveSleepData = {
	sleepDate: Date
	sleepIntervals: SleepInterval[]
}

export type SleepStatusType = {
	// seconds time / percentage
	rawValue: number
	name: string
	// 0 - 100
	value: string
	// normal, excelent
	status: string
}

export type CompletedSleepData = {
	sleepDate: Date
	wakeDate: Date
	sleepIntervals: SleepInterval[]
	intervalsPercentages: SleepPercentage[]
	totalTimeInSeconds: number
	sleepQuality: SleepStatusType
	sleepTime: SleepStatusType
	sleepScore: number
}

// const LOW_TIME_PENALTY    = 60 * 1
// const MEDIUM_TIME_PENALTY = 60 * 2
// const HIGH_TIME_PENALTY   = 60 * 5

// const LOW_TIME_PENALTY    = 1
// const MEDIUM_TIME_PENALTY = 2
// const HIGH_TIME_PENALTY   = 5

const LOW_TIME_PENALTY    = 5 * 1000
const MEDIUM_TIME_PENALTY = 10 * 1000
const HIGH_TIME_PENALTY   = 15 * 1000

const formatSeconds = ( miliseconds: number ): string => {
	const seconds = Math.floor(miliseconds / 1000);
	const minutes = Math.floor(seconds / 60);
	const hours = Math.floor(minutes / 60);

	const remainingMinutes = minutes % 60;
	const remainingSeconds = seconds % 60;

	return `${hours}h ${remainingMinutes}m ${remainingSeconds}s`;
}

const getPenaltyTimeForSound = ( sound: SoundType ) => {
	switch ( sound ) {
		case 'low':
			return LOW_TIME_PENALTY
		case 'medium':
			return MEDIUM_TIME_PENALTY
		case 'high':
			return HIGH_TIME_PENALTY
	}
}

const checkHasPenalty = ( sound: SoundType, duration: number ): boolean => {
	if ( sound === 'low' && duration < LOW_TIME_PENALTY ) {
		return true
	}
	if ( sound === 'medium' && duration < MEDIUM_TIME_PENALTY ) {
		return true
	}
	if ( sound === 'high' && duration < HIGH_TIME_PENALTY ) {
		return true
	}
	return false
}

export const useSleepApp = defineStore( 'sleep-app', () => {
	const currentSleepSession                                = ref<ActiveSleepData | undefined>()
	const isActive                                           = ref( false )
	const sleepSessionList                                   = ref(
		new Map<string, CompletedSleepData>( [
			[ '2024-10-17', {
				sleepDate           : new Date( 2024, 9, 17, 23, 24 ),
				wakeDate            : new Date( 2024, 9, 18, 7, 45 ),
				sleepIntervals      : [
					{ sleepType: 'medium', durationInSeconds: 3600 },
					{ sleepType: 'low', durationInSeconds: 7200 },
					{ sleepType: 'medium', durationInSeconds: 900 },
					{ sleepType: 'high', durationInSeconds: 5400 },
					{ sleepType: 'low', durationInSeconds: 9000 },
					{ sleepType: 'high', durationInSeconds: 450 },
					{ sleepType: 'low', durationInSeconds: 450 },
					{ sleepType: 'medium', durationInSeconds: 3600 }
				],
				intervalsPercentages: [
					{ percentage: 10, type: 'medium' },
					{ percentage: 20, type: 'low' },
					{ percentage: 2.5, type: 'medium' },
					{ percentage: 15, type: 'high' },
					{ percentage: 25, type: 'low' },
					{ percentage: 1.25, type: 'high' },
					{ percentage: 1.25, type: 'low' },
					{ percentage: 10, type: 'medium' }
				],
				totalTimeInSeconds  : 32400,
				sleepQuality        : {
					value   : '92%',
					rawValue: 92,
					name    : 'Sleep quality',
					status  : 'exelent'
				},
				sleepTime           : {
					status  : 'normal',
					value   : '8h 30m',
					name    : 'Sleep time',
					rawValue: 32400
				},
				sleepScore          : 90
			} ]
		] ) )
	const { idle }                                           = useIdle( 60 )
	const audioStore                                         = useAudioDecibels()
	let lastSound: SoundType                                 = 'low'
	let lastTimeSleepBlock                                   = 0
	let totalTimeSleepBlock                                  = 0
	let timeoutID: ReturnType<typeof setTimeout> | undefined = undefined

	audioStore.soundResult.on( sound => {
		if ( !isActive.value ) {
			return
		}
		if ( lastSound === sound ) {
			return
		}

		// console.log( 'diferente: ', sound )
		const duration = totalTimeSleepBlock - lastTimeSleepBlock
		// lastSound      = sound

		// console.log( 't: ', timeoutID )
		if ( timeoutID ) {
			return
		}

		const addIntervalIfNecessary = () => {
			// console.log( 'preserva: ', sound )
			// console.log( 'guardo: ', lastSound )
			addSleepInterval( lastSound, duration )
			lastSound          = sound
			lastTimeSleepBlock = totalTimeSleepBlock
		}

		const wait = getPenaltyTimeForSound( lastSound ) - duration
		// console.log( 'wait: ', wait )
		// console.log( 'duration: ', duration )
		timeoutID = setTimeout( () => {
			addIntervalIfNecessary()
			// console.log( 'wait complete' )
			timeoutID = undefined
		}, wait )
	} )

	const addManualInterval = ()=>{
		const duration = totalTimeSleepBlock - lastTimeSleepBlock
		addSleepInterval( lastSound, duration )
	}
	const interval = useIntervalFn( () => {
		if ( idle.value ) {
			totalTimeSleepBlock += 1000
		}
	}, 1000 )

	const hasSleepSessionToday = () => {
		const sleepDateFormatted = useDateFormat( new Date(), 'YYYY-MM-DD' )
		return sleepSessionList.value.has( sleepDateFormatted.value )
	}

	const toggleSleepSession = () => {
		if ( isActive.value ) {
			stopSleepSession()
		}
		else {
			startSleepSession()
		}
	}

	const startSleepSession = () => {
		const sleepDate           = new Date()
		lastSound                 = 'low'
		lastTimeSleepBlock        = 0
		totalTimeSleepBlock       = 0
		currentSleepSession.value = {
			sleepDate,
			sleepIntervals: []
		}
		audioStore.startListening()
		interval.resume()
		isActive.value = true
	}
	const stopSleepSession  = () => {
		if ( !currentSleepSession.value ) {
			onStopReset()
			return
		}
		if ( hasSleepSessionToday() ) {
			onStopReset()
			return
		}

		addManualInterval()
		const wakeDate  = new Date()
		const sleepData = currentSleepSession.value

		const defaultSleepInterval: SleepInterval[] = [ {
			sleepType        : 'low',
			durationInSeconds: totalTimeSleepBlock
		} ]
		const sleepIntervals: SleepInterval[]       = sleepData.sleepIntervals.length >
		0 ? sleepData.sleepIntervals : defaultSleepInterval

		const totalTimeInSeconds                      = sleepIntervals.reduce(
			( acc, interval ) => acc + interval.durationInSeconds, 0 )
		let percentagesSum                            = 0
		console.log( 'totalTimeInSeconds: ', totalTimeInSeconds )
		const intervalsPercentages: SleepPercentage[] = sleepIntervals.map(
			interval => {
				console.log( 'interval: ', interval )
				const percentage = Math.round( ( interval.durationInSeconds / totalTimeInSeconds ) * 100 )
				console.log( 'percentage: ', percentage )
				percentagesSum += percentage
				return {
					percentage,
					type: interval.sleepType
				}
			} )

		if ( percentagesSum < 100 ) {
			intervalsPercentages[intervalsPercentages.length - 1]!.percentage +=
				100 - percentagesSum
		}

		let sleepQuality: SleepStatusType = {
			rawValue: 100,
			value   : '',
			status  : 'exelent',
			name    : 'Sleep quality'
		}
		let sleepScore                    = 100
		for ( const interval of sleepIntervals ) {
			if ( interval.sleepType === 'medium' ) {
				sleepScore -= 2
			}
			if ( interval.sleepType === 'high' ) {
				sleepScore -= 3
				sleepQuality.rawValue -= 4
			}
		}
		sleepQuality.value  = `${ sleepQuality.rawValue.toString() }%`
		sleepQuality.status = sleepQuality.rawValue > 80 ? 'exelent' : 'normal'


		let sleepTime: SleepStatusType               = {
			rawValue: totalTimeInSeconds,
			value   : formatSeconds( totalTimeInSeconds ),
			name    : 'Sleep time',
			status  : 'normal'
		}
		sleepTime.status                             =
			totalTimeInSeconds > 28800 ? 'exelent' : 'normal'
		const completedSleepData: CompletedSleepData = {
			sleepDate: sleepData.sleepDate,
			wakeDate,
			sleepIntervals,
			intervalsPercentages,
			totalTimeInSeconds,
			sleepQuality,
			sleepTime,
			sleepScore
		}
		console.log( 'completed: ', completedSleepData )
		const formattedDate = useDateFormat(
			sleepData.sleepDate, 'YYYY-MM-DD' )
		sleepSessionList.value.set( formattedDate.value, completedSleepData )
		onStopReset()
	}

	const onStopReset      = () => {
		if( timeoutID ) {
			clearTimeout( timeoutID )
			timeoutID = undefined
		}
		audioStore.stopListening()
		interval.pause()
		isActive.value            = false
		currentSleepSession.value = undefined
		lastSound                 = 'low'
		lastTimeSleepBlock        = 0
		totalTimeSleepBlock       = 0
	}
	const addSleepInterval = ( sleepType: SoundType,
		durationInSeconds: number ) => {
		if ( !currentSleepSession.value ) {
			return
		}

		currentSleepSession.value.sleepIntervals.push(
			{ sleepType, durationInSeconds } )
	}

	const getSleepSession = ( dateFormated: string ) => {
		return sleepSessionList.value.get( dateFormated )
	}

	return {
		isActive,
		sleepSessionList,
		getSleepSession,
		toggleSleepSession
	}
} )
