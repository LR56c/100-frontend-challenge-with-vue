export function calculateUploadTimeInMs( fileSizeMB: number,
	uploadSpeedMbps: number ): number {
	const fileSizeBytes          = fileSizeMB * 1024 * 1024
	const uploadSpeedBytesPerSec = ( uploadSpeedMbps * 1024 * 1024 ) / 8
	const timeInSeconds          = fileSizeBytes / uploadSpeedBytesPerSec
	return timeInSeconds * 1000
}

export function calculateTimeRemaining( miliseconds: number ): string | undefined {
	const hours   = Math.floor( miliseconds / ( 1000 * 60 * 60 ) )
	const minutes = Math.floor(
		( miliseconds % ( 1000 * 60 * 60 ) ) / ( 1000 * 60 ) )
	const seconds = Math.floor( ( miliseconds % ( 1000 * 60 ) ) / 1000 )

	if ( seconds === 0 && minutes === 0 && hours === 0 ) {
		return undefined
	}

	if ( hours === 0 && minutes === 0 ) {
		return `${ seconds }s`
	}
	if ( hours === 0 ) {
		return `${ minutes }m ${ seconds }s`
	}

	return `${ hours }h ${ minutes }m ${ seconds }s`
}