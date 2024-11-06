export function calculateUploadTime( fileSizeMB: number,
	uploadSpeedMbps: number ): string {
	const fileSizeBytes          = fileSizeMB * 1024 * 1024
	const uploadSpeedBytesPerSec = ( uploadSpeedMbps * 1024 * 1024 ) / 8
	const timeInSeconds          = fileSizeBytes / uploadSpeedBytesPerSec
	const hours                  = Math.floor( timeInSeconds / 3600 )
	const minutes                = Math.floor( ( timeInSeconds % 3600 ) / 60 )
	const seconds                = Math.floor( timeInSeconds % 60 )

	if ( hours === 0 && minutes === 0 ) {
		return `${ seconds }s`
	}
	if ( hours === 0 ) {
		return `${ minutes }m ${ seconds }s`
	}

	return `${ hours }h ${ minutes }m ${ seconds }s`
}
