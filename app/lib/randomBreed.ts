export function getRandomBreed( data: { [key: string]: string[] } ): string {
	const breeds      = Object.keys( data )
	const randomBreed = breeds[Math.floor( Math.random() * breeds.length )]
	const subBreeds   = data[randomBreed!]
	if ( subBreeds!.length === 0 ) {
		return randomBreed!
	}
	else {
		const randomSubBreed = subBreeds![Math.floor(
			Math.random() * subBreeds!.length )]
		return `${ randomBreed }/${ randomSubBreed }`
	}
}
