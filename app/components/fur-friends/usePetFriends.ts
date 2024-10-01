import { ulid } from 'ulidx'

const genreValues = [ 'female', 'male' ] as const
type PetGenre = typeof genreValues[number]

export interface Pet {
	id: string
	slug: string
	name: string
	breed: string
	genre: PetGenre
	distance: number
	age: number
	height: number
	weight: number
	description: string
	img: string
	like: boolean
}
export const usePetFriends = defineStore( 'pet-friends', () => {

	const petsRef = ref( new Map<string, Pet>( [
		[
			'bella-spaniel-welsh',
			{
				id         : ulid(),
				name       : 'Bella',
				slug       : 'bella-spaniel-welsh',
				breed      : 'spaniel welsh',
				genre      : 'male',
				distance   : 2.6,
				age        : 2,
				height     : 43,
				weight     : 25.8,
				description: 'Bursa crederes, tanquam placidus impositio.Pulchritudines sunt nixs de emeritis tumultumque.Silva primus castor est.',
				img        : 'https://images.dog.ceo/breeds/waterdog-spanish/20180706_194432.jpg',
				like       : false
			}
		],
		[
			'charlie-newfoundland',
			{
				id         : ulid(),
				name       : 'charlie',
				slug       : 'charlie-newfoundland',
				breed      : 'newfoundland',
				genre      : 'female',
				distance   : 2.2,
				age        : 2,
				height     : 32,
				weight     : 33.6,
				description: 'Bursa crederes, tanquam placidus impositio.Pulchritudines sunt nixs de emeritis tumultumque.Silva primus castor est.',
				img        : 'https://images.dog.ceo/breeds/newfoundland/n02111277_1040.jpg',
				like       : true
			}
		],
		[
			'max-finnish-lapphund',
			{
				id         : ulid(),
				name       : 'max',
				slug       : 'max-finnish-lapphund',
				breed      : 'finnish lapphund',
				genre      : 'male',
				distance   : 0.8,
				age        : 1,
				height     : 36,
				weight     : 41.6,
				description: 'Bursa crederes, tanquam placidus impositio.Pulchritudines sunt nixs de emeritis tumultumque.Silva primus castor est.',
				img        : 'https://images.dog.ceo/breeds/waterdog-spanish/20180706_194432.jpg',
				like       : false
			}
		],
		[
			'max-finnish-lapphund',
			{
				id         : ulid(),
				name       : 'max',
				slug       : 'max-finnish-lapphund',
				breed      : 'finnish lapphund',
				genre      : 'male',
				distance   : 0.8,
				age        : 1,
				height     : 36,
				weight     : 41.6,
				description: 'Bursa crederes, tanquam placidus impositio.Pulchritudines sunt nixs de emeritis tumultumque.Silva primus castor est.',
				img        : 'https://images.dog.ceo/breeds/finnish-lapphund/mochilamvan.jpg',
				like       : false
			}
		],
		[
			'max-kuvasz',
			{
				id         : ulid(),
				name       : 'max',
				slug       : 'max-kuvasz',
				breed      : 'kuvasz',
				genre      : 'male',
				distance   : 1.61,
				age        : 6,
				height     : 35,
				weight     : 32,
				description: 'Bursa crederes, tanquam placidus impositio.Pulchritudines sunt nixs de emeritis tumultumque.Silva primus castor est.',
				img        : 'https://images.dog.ceo/breeds/kuvasz/n02104029_1313.jpg',
				like       : false
			}
		]
	] ) )

	const toggleLikePet = ( id: string ) => {
		const pet = petsRef.value.get( id )
		if ( pet ) {
			pet.like = !pet.like
		}
	}

	return {
		petsRef,
		toggleLikePet,
	}
} )


