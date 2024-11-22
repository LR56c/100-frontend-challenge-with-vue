import { ulid } from 'ulidx'

export type ImageTag = {
	name: string
}
export type UserPhoto = {
	id: string
	avatar: string
	name: string
	images: Photo[]
	collections: Collection[]
}
export type BasePhoto = {
	id: string,
	categoryTitle: string,
	createdBy: string
	createdDate: Date
}
export type Photo = BasePhoto & {
	image: string
}
export type Collection = BasePhoto & {
	avatar: string
	tags: ImageTag[]
	images: string[]
}

export const useImageCollections = defineStore( 'image-collections', () => {

	const categoryTitle      = 'Fitness'
	const userName1          = 'Blake'
	const userName2          = 'John'
	const userName3          = 'David'
	const userName4          = 'Mike'
	const userPhotosDatabase = ref( new Map<string, UserPhoto>( [
		[ userName1, {
			id         : ulid(),
			avatar     : 'https://i.pravatar.cc/60?img=1',
			name       : userName1,
			images     : [
				{
					id           : ulid(),
					categoryTitle: categoryTitle,
					createdBy    : userName1,
					createdDate  : new Date(),
					image        : 'https://images.unsplash.com/photo-1662961154170-d2421e29f94b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zml0bmVzc3xlbnwwfHwwfHx8MA%3D%3D'
				},
				{
					id           : ulid(),
					categoryTitle: categoryTitle,
					createdBy    : userName1,
					createdDate  : new Date(),
					image        : 'https://images.unsplash.com/photo-1627483262112-039e9a0a0f16?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zml0bmVzc3xlbnwwfHwwfHx8MA%3D%3D'
				},
				{
					id           : ulid(),
					categoryTitle: categoryTitle,
					createdBy    : userName1,
					createdDate  : new Date(),
					image        : 'https://images.unsplash.com/photo-1517438984742-1262db08379e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D'
				}
			],
			collections: [
				{
					id           : ulid(),
					categoryTitle: categoryTitle,
					createdBy    : userName1,
					createdDate  : new Date(),
					tags         : [
						{ name: 'mountain' },
						{ name: 'forest' },
						{ name: 'sport' }
					],
					avatar       : 'https://i.pravatar.cc/60?img=1',
					images       : [
						'https://images.unsplash.com/photo-1662961154170-d2421e29f94b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zml0bmVzc3xlbnwwfHwwfHx8MA%3D%3D',
						'https://images.unsplash.com/photo-1627483262112-039e9a0a0f16?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zml0bmVzc3xlbnwwfHwwfHx8MA%3D%3D',
						'https://images.unsplash.com/photo-1517438984742-1262db08379e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D'
					]
				}
			]
		} ],
		[ userName2, {
			id         : ulid(),
			avatar     : 'https://i.pravatar.cc/60?img=2',
			name       : userName2,
			images     : [
				{
					id           : ulid(),
					categoryTitle: categoryTitle,
					createdBy    : userName2,
					createdDate  : new Date(),
					image        : 'https://images.unsplash.com/photo-1483721310020-03333e577078?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D'
				},
				{
					id           : ulid(),
					categoryTitle: categoryTitle,
					createdBy    : userName2,
					createdDate  : new Date(),
					image        : 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D'
				},
				{
					id           : ulid(),
					categoryTitle: categoryTitle,
					createdBy    : userName2,
					createdDate  : new Date(),
					image        : 'https://images.unsplash.com/photo-1521804906057-1df8fdb718b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D'
				}
			],
			collections: [
				{
					id           : ulid(),
					categoryTitle: categoryTitle,
					createdBy    : userName2,
					createdDate  : new Date(),
					tags         : [
						{ name: 'street' },
						{ name: 'sport' }
					],
					avatar       : 'https://i.pravatar.cc/60?img=2',
					images       : [
						'https://images.unsplash.com/photo-1483721310020-03333e577078?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D',
						'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D',
						'https://images.unsplash.com/photo-1521804906057-1df8fdb718b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D'
					]
				}
			]
		} ],
		[ userName3, {
			id         : ulid(),
			avatar     : 'https://i.pravatar.cc/60?img=2',
			name       : userName3,
			images     : [
				{
					id           : ulid(),
					categoryTitle: categoryTitle,
					createdBy    : userName3,
					createdDate  : new Date(),
					image        : 'https://images.unsplash.com/photo-1487956382158-bb926046304a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D'
				},
				{
					id           : ulid(),
					categoryTitle: categoryTitle,
					createdBy    : userName3,
					createdDate  : new Date(),
					image        : 'https://images.unsplash.com/photo-1522898467493-49726bf28798?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D'
				},
				{
					id           : ulid(),
					categoryTitle: categoryTitle,
					createdBy    : userName3,
					createdDate  : new Date(),
					image        : 'https://images.unsplash.com/photo-1445384763658-0400939829cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D'
				}
			],
			collections: [
				{
					id           : ulid(),
					categoryTitle: categoryTitle,
					createdBy    : userName3,
					createdDate  : new Date(),
					tags         : [
						{ name: 'street' },
						{ name: 'sport' }
					],
					avatar       : 'https://i.pravatar.cc/60?img=3',
					images       : [
						'https://images.unsplash.com/photo-1487956382158-bb926046304a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D',
						'https://images.unsplash.com/photo-1522898467493-49726bf28798?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D',
						'https://images.unsplash.com/photo-1445384763658-0400939829cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D'
					]
				}
			]
		} ],
		[ userName4, {
			id         : ulid(),
			avatar     : 'https://i.pravatar.cc/60?img=2',
			name       : userName4,
			images     : [
				{
					id           : ulid(),
					categoryTitle: categoryTitle,
					createdBy    : userName4,
					createdDate  : new Date(),
					image        : 'https://images.unsplash.com/photo-1607962837359-5e7e89f86776?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D'
				},
				{
					id           : ulid(),
					categoryTitle: categoryTitle,
					createdBy    : userName4,
					createdDate  : new Date(),
					image        : 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D'
				},
				{
					id           : ulid(),
					categoryTitle: categoryTitle,
					createdBy    : userName4,
					createdDate  : new Date(),
					image        : 'https://images.unsplash.com/photo-1517963628607-235ccdd5476c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D'
				}
			],
			collections: [
				{
					id           : ulid(),
					categoryTitle: categoryTitle,
					createdBy    : userName4,
					createdDate  : new Date(),
					tags         : [
						{ name: 'street' },
						{ name: 'sport' }
					],
					avatar       : 'https://i.pravatar.cc/60?img=4',
					images       : [
						'https://images.unsplash.com/photo-1607962837359-5e7e89f86776?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D',
						'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D',
						'https://images.unsplash.com/photo-1517963628607-235ccdd5476c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D'
					]
				}
			]
		} ]
	] ) )
	const userPhotos         = ref( new Map<string, UserPhoto>() )
	const getUser            = ( name: string ) => {
		return userPhotos.value.get( name )
	}

	const getCollection = ( name: string, collectionId: string ) => {
		const user = userPhotos.value.get( name )
		return user?.collections.find(
			collection => collection.id === collectionId )
	}

	const updateCategoryUsers = ( categoryTitle: string ) => {
		userPhotos.value = new Map(
			Array.from( userPhotosDatabase.value.values() )
			     .filter( user => user.collections.some(
				     image => image.categoryTitle === categoryTitle ) )
			     .map( user => [ user.name, user ] )
		)
	}

	return {
		userPhotos: computed( () => Array.from( userPhotos.value.values() ) ),
		getUser,
		getCollection,
		updateCategoryUsers
	}
} )