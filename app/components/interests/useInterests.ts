export type Interests = {
	icon?: string
	name: string
	class ?: string
}

export const useInterests = defineStore( 'interests', () => {

	const defaultIcon = 'material-symbols-check-circle-rounded'
	const defaultClass = 'text-indigo-500'

	const list = ref<Interests[]>( [
		{
			icon: defaultIcon,
			class: defaultClass,
			name: 'Art',
		},
		{
			icon: 'fluent-emoji-baguette-bread',
			name: 'Baking'
		},
		{
			icon: 'streamline-emojis-game-dice',
			name: 'Board Games'
		},
		{
			icon: 'fluent-emoji-camping',
			name: 'Camping'
		},
		{
			icon: 'fluent-emoji-woman-dancing-light',
			name: 'Dancing'
		},
		{
			icon: 'hugeicons-body-part-muscle',
			name: 'Exercise'
		},
		{
			icon: 'streamline-emojis-game-dice',
			name: 'Fashion'
		},
		{
			icon: defaultIcon,
			class: defaultClass,
			name: 'Gardening',
		},
		{
			icon: 'fluent-emoji-snow-capped-mountain',
			name: 'Hiking'
		},
		{
			icon: 'twemoji-puzzle-piece',
			name: 'Jigsaw puzzles',
		},
		{
			icon: 'mdi-tshirt-crew',
			name: 'Fashion',
			class: 'text-pink-500'
		},
		{
			icon: 'fluent-emoji-flat-blue-book',
			name: 'Literature'
		},
		{
			icon: 'fluent-emoji-movie-camera',
			name: 'Movies'
		},
		{
			icon: 'fluent-emoji-flat-artist-palette',
			name: 'Painting'
		},
		{
			icon: defaultIcon,
			class: defaultClass,
			name: 'Photography',
		},
		{
			icon: 'twemoji-railway-track',
			name: 'Traveling'
		},
		{
			icon: 'streamline-emojis-bicycle',
			name: 'Upcycling'
		},
		{
			icon: 'fluent-emoji-flat-microphone',
			name: 'Singing'
		},
		{
			icon: defaultIcon,
			class: defaultClass,
			name: 'Yoga',
		},
	] )

	return {
		list: readonly( list )
	}
} )