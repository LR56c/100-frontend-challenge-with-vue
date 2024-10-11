export function formatSongDuration( timeInSeconds: number ): string {
	const hourNum = Math.floor( timeInSeconds / 3600 )
	const hours   = hourNum
		.toString()
		.padStart( 2, '0' )

	const minutes = Math.floor( timeInSeconds / 60 )
	                    .toString()
	                    .padStart( 2, '0' )
	const seconds = Math.floor( timeInSeconds % 60 )
	                    .toString()
	                    .padStart( 2, '0' )
	if ( hourNum > 0 ) {
		return `${ hours }:${ minutes }:${ seconds }`
	}
	return `${ minutes }:${ seconds }`
}


export function formatPlaylistDuration( timeInSeconds :number ) : string {
	const hourNum = Math.floor( timeInSeconds / 3600 )
	const hours   = hourNum
		.toString()
		.padStart( 2, '0' )
	const minutes = Math.floor( timeInSeconds / 60 )
	                    .toString()
	                    .padStart( 2, '0' )
	const seconds = Math.floor( timeInSeconds % 60 )
	                    .toString()
	                    .padStart( 2, '0' )

	if ( hourNum > 0 ) {
		return `${ hours } h ${ minutes } min.`
	}
	return `${ minutes } min.`
}


export function formatLikes( likes :number ) : string {
	return likes.toString()
	            .replace( /(\d)(?=(\d{3})+$)/g, '$1 ' )
}
