import { ulid } from 'ulidx'

export type BookStore = {
	id : string
	avatar : string
	name : string
	author : string
}

export const useEBookStore = defineStore( 'ebook-store', () => {

	const booksDatabase = ref<BookStore[]>([
		{
			id    : ulid(),
			avatar: 'https://m.media-amazon.com/images/I/91dF8qfFYwL._SX342_.jpg',
			name  : 'Echoes of Eternity',
			author: 'Aaron Dembski-Bowden'
		},
		{
			id    : ulid(),
			avatar: 'https://m.media-amazon.com/images/I/71u6lduI8wL._SY342_.jpg',
			name  : 'Chronicle of the forgotten',
			author: ' A.J. Stempleton'
		},
		{
			id    : ulid(),
			avatar: 'https://m.media-amazon.com/images/I/91JhUQoebGL._SY342_.jpg',
			name  : 'Hello, My Name Is',
			author: 'Marisa Polansky'
		},
		{
			id    : ulid(),
			avatar: 'https://m.media-amazon.com/images/I/61M6jkfnddL._SY342_.jpg',
			name  : 'Typographie',
			author: ' Emil Ruder'
		},
		{
			id    : ulid(),
			avatar: 'https://m.media-amazon.com/images/I/91nwfA8c9eL._SY342_.jpg',
			name  : 'On Beyond Bugs!',
			author: 'Tish Rabe'
		},
		{
			id    : ulid(),
			avatar: 'https://m.media-amazon.com/images/I/71eiM+2ssxL._SX342_.jpg',
			name  : 'Better than Alpha',
			author: 'Christopher M. Schelling'
		}
	])

	return {
		books : readonly(booksDatabase)
	}
})