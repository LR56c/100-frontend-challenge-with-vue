import { ulid } from 'ulidx'

export type DesignAsset = {
	id: string
	name: string
	like: boolean
	link: string
	category: string
	provider: {
		name: string
		icon: string
	}
	avatar: string
	cover: string
	price: number
}
export const useDesignAssets = defineStore( 'design-assets', () => {
	const badges = [
		'All',
		'Web',
		'Mobile',
		'Ui Kits'
	]
	const icons  = [
		'logos-sketch',
		'logos-figma',
		'logos-adobe-xd',
		'logos-adobe-photoshop',
		'logos-adobe-after-effects'
	]

	const designAssets         = ref<DesignAsset[]>( [] )
	const designAssetsDatabase = ref<DesignAsset[]>( [
		{
			id      : ulid(),
			name    : 'Video player',
			like    : false,
			link    : '/video-player',
			category: badges[1]!,
			provider: {
				name: 'Figma',
				icon: icons[1]!
			},
			avatar  : 'https://i.pravatar.cc/60?img=1',
			cover   : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/video-player.jpeg?t=1719059651758',
			price   : 21
		},
		{
			id      : ulid(),
			name    : 'Friend Request',
			like    : false,
			link    : '/friend-request',
			category: badges[1]!,
			provider: {
				name: 'Figma',
				icon: icons[1]!
			},
			avatar  : 'https://i.pravatar.cc/60?img=2',
			cover   : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/friend-request.jpeg?t=1719059650790',
			price   : 9
		},
		{
			id      : ulid(),
			name    : 'Article Slider',
			like    : false,
			link    : '/article-slider',
			category: badges[1]!,
			provider: {
				name: 'Figma',
				icon: icons[1]!
			},
			avatar  : 'https://i.pravatar.cc/60?img=3',
			cover   : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/article-slider.jpeg?t=1719059650358',
			price   : 12
		}
	] )

	const filter = ( name?: string, category?: string,
		providerName?: string ) => {
		if ( !name && !category && !providerName ) {
			designAssets.value = designAssetsDatabase.value
		}
		else {
			designAssets.value = designAssetsDatabase.value.filter( asset =>
				( !name || asset.name.includes( name ) ) &&
				( !category || category === 'All' ||
					asset.category.includes( category ) ) &&
				( !providerName || providerName === 'All' ||
					asset.provider.icon === providerName )
			)
		}
	}

	const likeToggle = ( id: string ) => {
		const asset = designAssets.value.find( asset => asset.id === id )
		if ( asset ) {
			asset.like = !asset.like
		}
	}

	onMounted( () => {
		designAssets.value = designAssetsDatabase.value
	} )

	return {
		designAssets,
		badges,
		icons,
		filter,
		likeToggle
	}
} )