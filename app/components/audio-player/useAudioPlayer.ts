import { ulid } from 'ulidx'
import { formatSongDuration } from '~/lib/formatSongDuration'

type AudioSong = {
	id: string
	title: string
	artist: string
	cover?: string
	duration: number
}

export type AudioPlayingState = {
	playing: boolean
	currentDuration: number
	song: AudioSong
	songIndex: number
}

export const useAudioPlayer = defineStore( 'audio-player', () => {

	const currentSongState        = ref<AudioPlayingState | undefined>(
		undefined )
	const currentPlaylistSelected = ref<AudioSong[] | undefined>( undefined )

	const id1                   = ulid()
	const playlistSongsDatabase = new Map<string, AudioSong>( [
		[ id1,
			{
				id      : id1,
				title   : 'Serenade in Silence',
				artist  : 'Harmony Rivers',
				duration: 45
			}
		]
	] )

	let lastUpdate = 0

	let startTime = 0

	let songCompleted = false

	const { pause: pauseRaf, resume: resumeRaf } = useRafFn( () => {
		if ( currentSongState.value ) {
			const elapsedTime                      = performance.now() - startTime
			currentSongState.value.currentDuration = elapsedTime / 1000

			// song duration completed
			if ( currentSongState.value.currentDuration >=
				currentSongState.value.song.duration )
			{
				currentSongState.value.playing = false
				songCompleted                  = true
				pauseRaf()
			}
		}
	} )
	const _toggleRafCounter                      = () => {
		if ( !currentSongState.value ) {
			return
		}
		if ( currentSongState.value.playing ) {
			lastUpdate = currentSongState.value.currentDuration * 1000
			pauseRaf()
		}
		else {
			startTime  = performance.now() - lastUpdate
			lastUpdate = Date.now()
			resumeRaf()
		}
	}
	const _resetCounter                          = () => {
		if ( !currentSongState.value ) {
			return
		}
		currentSongState.value.currentDuration = 0

		lastUpdate = 0

		pauseRaf()
	}
	const togglePlay                             = () => {
		if ( songCompleted ) {
			songCompleted = false
			_resetCounter()
		}

		if ( !currentSongState.value ) {
			return
		}
		_toggleRafCounter()
		currentSongState.value.playing = !currentSongState.value.playing
	}
	const getPercentageDuration                  = computed( () => {
		if ( !currentSongState.value ) {
			return 0
		}
		return Math.floor( ( currentSongState.value.currentDuration /
			currentSongState.value.song.duration ) * 100 )
	} )

	const _getPlaylist = ( title: string ): AudioSong | undefined => {
		return playlistSongsDatabase.get( title )
	}

	const getSong          = ( songId: string ) => {
		const songIndex = currentPlaylistSelected.value?.findIndex( song => song.id === songId )

		if ( !currentPlaylistSelected.value || songIndex === undefined) {
			return
		}
		const song = currentPlaylistSelected.value[songIndex]!

		currentSongState.value = {
			playing        : false,
			currentDuration: 0,
			song           : song,
			songIndex      : songIndex
		}
		_resetCounter()
		_toggleRafCounter()
	}

	const playNextSong     = () => {
		if ( !currentPlaylistSelected.value ) {
			return
		}
		const nextSongIndex = currentSongState.value!.songIndex + 1
		if ( nextSongIndex >= currentPlaylistSelected.value?.length ) {
			return
		}
		const nextSong         = currentPlaylistSelected.value[nextSongIndex]!
		currentSongState.value = {
			playing        : true,
			currentDuration: 0,
			song           : nextSong,
			songIndex      : nextSongIndex
		}
		_resetCounter()
	}
	const playPreviousSong = () => {
		if ( !currentPlaylistSelected.value ) {
			return
		}
		const previousSongIndex = currentSongState.value!.songIndex - 1
		if ( previousSongIndex < 0 ) {
			return
		}
		const previousSong     = currentPlaylistSelected.value[previousSongIndex]!
		currentSongState.value = {
			playing        : true,
			currentDuration: 0,
			song           : previousSong,
			songIndex      : previousSongIndex
		}
		_resetCounter()
	}
	onMounted( () => {
		const song = _getPlaylist( id1 )
		if ( !song ) {
			return
		}
		currentPlaylistSelected.value = [song]
		currentSongState.value        = {
			playing        : false,
			currentDuration: 0,
			song           : song,
			songIndex      : currentPlaylistSelected.value.length - 1
		}
		_toggleRafCounter()
		_resetCounter()
	} )

	const getDurationCurrentSongFormat = computed( () => {
		if ( !currentSongState.value ) {
			return '00:00'
		}
		return formatSongDuration( currentSongState.value.currentDuration )
	} )

	const nextSongExist = computed( () => {
		if ( !currentPlaylistSelected.value ) {
			return false
		}
		return currentSongState.value!.songIndex + 1 <
			currentPlaylistSelected.value?.length
	} )

	const prevSongExist = computed( () => {
		if ( !currentPlaylistSelected.value ) {
			return false
		}
		return currentSongState.value!.songIndex - 1 >= 0
	} )

	return {
		currentSongState,
		getDurationCurrentSongFormat,
		currentPlaylistSelected,
		getPercentageDuration,
		nextSongExist,
		prevSongExist,
		getSong,
		togglePlay,
		playNextSong,
		playPreviousSong
	}
} )