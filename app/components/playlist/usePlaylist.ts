import { ulid } from 'ulidx'
import { formatSongDuration } from '~/lib/formatSongDuration'

type PlaylistSong = {
	id: string
	title: string
	artist: string
	cover: string
	duration: number
}

type Playlist = {
	id: string
	title: string
	likes: number
	cover: string
	totalDuration: number
	songs: PlaylistSong[]
}

type PlaylistSongState = {
	playing: boolean
	currentDuration: number
	song: PlaylistSong
	songIndex: number
}
export const usePlaylist = defineStore( 'playlist', () => {

	const currentSongState        = ref<PlaylistSongState | undefined>(
		undefined )
	const currentPlaylistSelected = ref<Playlist | undefined>( undefined )

	// title , playlist
	const playlistSongsDatabase = new Map<string, Playlist>( [
		[ 'Chill Vibes 2024', {
			id           : ulid(),
			title        : 'Chill Vibes 2024',
			likes        : 100,
			cover        : 'flower.jpg',
			totalDuration: 2100,
			songs        : [
				{
					id      : ulid(),
					title   : 'Serenity Dreams',
					artist  : 'Luna Bliss',
					cover   : '/land1.jpg',
					duration: 300 - 48
				},
				{
					id      : ulid(),
					title   : 'Tranquil Echoes',
					artist  : 'Zenith Harmonies',
					cover   : '/land2.jpg',
					duration: 300 - 21
				},
				{
					id      : ulid(),
					title   : 'Eghereal Whispers',
					artist  : 'Aurora Breeze',
					cover   : '/land3.jpg',
					duration: 303
				},
				{
					id      : ulid(),
					title   : 'Mystic Oasis',
					artist  : 'Solstice Serenity',
					cover   : '/land4.jpg',
					duration: 300 - 121
				},
				{
					id      : ulid(),
					title   : 'Calm Horizons',
					artist  : 'Echo Falls',
					cover   : '/land5.jpg',
					duration: 300 - 71
				},
				{
					id      : ulid(),
					title   : 'Azure Reverie',
					artist  : 'Celeste Har',
					cover   : '/land6.jpg',
					duration: 300 - 110
				},
				{
					id      : ulid(),
					title   : 'Serenity Dreams 2',
					artist  : 'Luna Bliss',
					cover   : '/land7.jpg',
					duration: 304
				}
			]
		} ]
	] )

	let lastUpdate                               = 0
	let startTime                                = 0
	let songCompleted                            = false
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
	})
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
	const _resetCounter         = () => {
		if ( !currentSongState.value ) {
			return
		}
		currentSongState.value.currentDuration = 0

		lastUpdate = 0

		pauseRaf()
	}
	const togglePlay            = () => {
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
	const getPercentageDuration = computed( () => {
		if ( !currentSongState.value ) {
			return 0
		}
		return Math.floor( ( currentSongState.value.currentDuration /
			currentSongState.value.song.duration ) * 100 )
	} )

	const _getPlaylist = ( title: string ): Playlist | undefined => {
		return playlistSongsDatabase.get( title )
	}

	// esta vinculado a la playlist actual. para hacerlo realista, deberia haber una
	// song list y la playlist deberia tener los ids de las canciones y array de canciones aparte
	const getSong          = ( title: string, songId: string ) => {
		const playlist  = _getPlaylist( title )
		const songIndex = playlist?.songs.findIndex( song => song.id === songId )

		if ( songIndex === undefined ) {
			return
		}
		const song = playlist!.songs[songIndex]!

		currentSongState.value = {
			playing        : true,
			currentDuration: 0,
			song           : song,
			songIndex      : songIndex
		}
		pauseRaf()
	}
	const playNextSong     = () => {
		if ( !currentPlaylistSelected.value ) {
			return
		}
		const nextSongIndex = currentSongState.value!.songIndex + 1
		if ( nextSongIndex >= currentPlaylistSelected.value.songs.length ) {
			return
		}
		const nextSong         = currentPlaylistSelected.value.songs[nextSongIndex]!
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
		const previousSong     = currentPlaylistSelected.value.songs[previousSongIndex]!
		currentSongState.value = {
			playing        : true,
			currentDuration: 0,
			song           : previousSong,
			songIndex      : previousSongIndex
		}
		_resetCounter()
	}
	onMounted( () => {
		const playlist = _getPlaylist( 'Chill Vibes 2024' )
		const song     = playlist?.songs.at( -1 )
		if ( !song || !playlist ) {
			return
		}
		currentPlaylistSelected.value = playlist
		currentSongState.value        = {
			playing        : false,
			currentDuration: 0,
			song           : song,
			songIndex      : playlist!.songs.length - 1
		}
		_resetCounter()
	} )
	const getDurationCurrentSongFormat = computed( () => {
		if ( !currentSongState.value ) {
			return '00:00'
		}
		return formatSongDuration( currentSongState.value.currentDuration )
	} )
	const nextSongExist                = computed( () => {
		if ( !currentPlaylistSelected.value ) {
			return false
		}
		return currentSongState.value!.songIndex + 1 <
			currentPlaylistSelected.value.songs.length
	} )
	const prevSongExist                = computed( () => {
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
