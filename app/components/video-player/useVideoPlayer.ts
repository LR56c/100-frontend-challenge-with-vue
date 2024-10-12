import { ulid } from 'ulidx'

export type Author = {
	id: string
	name: string
	avatar: string
	subscribers: number
}

export type Video = {
	id: string
	title: string
	cover: string
	duration: number
	author: Author
	likes: number
	views: number
	isLive: boolean
	createdAt: Date
}

export type VideoPlayer = {
	video: Video
	playing: boolean
	currentDuration: number
	fullscreen: boolean
}

export const useVideoPlayer = defineStore( 'video-player', () => {

	let lastUpdate = 0

	let startTime = 0

	let videoCompleted = false
	const currentVideoPlayer = ref<VideoPlayer | undefined>( undefined )

	const author: Author = {
		id         : ulid(),
		name       : 'Michael Harrell',
		avatar     : 'https://i.pravatar.cc/60?img=3',
		subscribers: 80054
	}

	const videosList = ref( new Map<string, Video>() )

	const { pause: pauseRaf, resume: resumeRaf } = useRafFn( () => {
		if ( currentVideoPlayer.value ) {
			const elapsedTime                      = performance.now() - startTime
			currentVideoPlayer.value.currentDuration = elapsedTime / 1000

			// song duration completed
			if ( currentVideoPlayer.value.currentDuration >=
				currentVideoPlayer.value.video.duration )
			{
				currentVideoPlayer.value.playing = false
				videoCompleted                  = true
				pauseRaf()
			}
		}
	} )
	const _toggleRafCounter                      = () => {
		if ( !currentVideoPlayer.value ) {
			return
		}
		if ( currentVideoPlayer.value.playing ) {
			lastUpdate = currentVideoPlayer.value.currentDuration * 1000
			pauseRaf()
		}
		else {
			startTime  = performance.now() - lastUpdate
			lastUpdate = Date.now()
			resumeRaf()
		}
	}
	const _resetCounter                          = () => {
		if ( !currentVideoPlayer.value ) {
			return
		}
		currentVideoPlayer.value.currentDuration = 0

		lastUpdate = 0

		pauseRaf()
	}
	const togglePlay                             = () => {
		if ( videoCompleted ) {
			videoCompleted = false
			_resetCounter()
		}

		if ( !currentVideoPlayer.value ) {
			return
		}
		currentVideoPlayer.value.playing = !currentVideoPlayer.value.playing
		_toggleRafCounter()
	}
	const getPercentageDuration                  = computed( () => {
		if ( !currentVideoPlayer.value ) {
			return 0
		}
		return Math.floor( ( currentVideoPlayer.value.currentDuration /
			currentVideoPlayer.value.video.duration ) * 100 )
	} )

	const setupVideo            = ( video: Video ) => {
		currentVideoPlayer.value = {
			video,
			playing        : false,
			currentDuration: 0,
			fullscreen     : false
		}
		// videoCounter.counter = 0
		// videoCounter.maxValue = video.duration
		togglePlay()
	}

	onMounted( () => {
		const id1 = ulid()
		const id2 = ulid()
		const id3 = ulid()
		const id4 = ulid()
		const id5 = ulid()
		const id6 = ulid()
		const id7 = ulid()
		videosList.value.set( id1, {
			id       : id1,
			title    : 'Plant1',
			cover    : 'land1.jpg',
			duration : 300*6,
			author,
			isLive   : true,
			createdAt: new Date(),
			views    : 6390,
			likes    : 450
		} )
		videosList.value.set( id2, {
			id       : id2,
			title    : 'Plant2',
			cover    : 'land2.jpg',
			duration : 300,
			author,
			isLive   : false,
			createdAt: new Date(),
			views    : 100,
			likes    : 100
		} )
		videosList.value.set( id3, {
			id       : id3,
			title    : 'Plant3',
			cover    : 'land3.jpg',
			duration : 300,
			author,
			isLive   : false,
			createdAt: new Date(),
			views    : 100,
			likes    : 100
		} )
		videosList.value.set( id4, {
			id       : id4,
			title    : 'Plant4',
			cover    : 'land4.jpg',
			duration : 300,
			author,
			isLive   : false,
			createdAt: new Date(),
			views    : 100,
			likes    : 100
		} )
		videosList.value.set( id5, {
			id       : id5,
			title    : 'Plant5',
			cover    : 'land5.jpg',
			duration : 300,
			author,
			isLive   : false,
			createdAt: new Date(),
			views    : 100,
			likes    : 100
		} )
		videosList.value.set( id6, {
			id       : id6,
			title    : 'Plant6',
			cover    : 'land6.jpg',
			duration : 300,
			author,
			isLive   : false,
			createdAt: new Date(),
			views    : 100,
			likes    : 100
		} )
		videosList.value.set( id7, {
			id       : id7,
			title    : 'Plant7',
			cover    : 'land7.jpg',
			duration : 300,
			author,
			isLive   : false,
			createdAt: new Date(),
			views    : 100,
			likes    : 100
		} )
		setupVideo( videosList.value.get( id1 )! )
	} )

	return {
		currentVideoPlayer,
		videosList,
		setupVideo,
		togglePlay,
		getPercentageDuration,
	}
} )
