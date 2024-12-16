<script setup
	lang="ts">
import DesignAssetCard from '~/components/design-assets/DesignAssetCard.vue'
import DesignAssetsBadge from '~/components/design-assets/DesignAssetsBadge.vue'
import DesignAssetsButton
	from '~/components/design-assets/DesignAssetsButton.vue'
import DesignAssetsSearch
	from '~/components/design-assets/DesignAssetsSearch.vue'
import { useDesignAssets } from '~/components/design-assets/useDesignAssets'

const store = useDesignAssets()
const {
	      designAssets
      }     = storeToRefs( store )

const productsList  = [
	'All products',
	'All providers',
	'All categories'
]
const badgeSelected = ref<string | undefined>( undefined )
const iconSelected  = ref<string | undefined>( undefined )

const onSearch = ( searchTerm: string, categoryTerm: string ) => {
	const provider = productsList[1] === categoryTerm ? 'All' : undefined
	const category = productsList[2] === categoryTerm ? 'All' : undefined
	store.filter( searchTerm, category, provider )
}

const badgeChange = ( badge: string ) => {
	badgeSelected.value = badge
	store.filter( undefined, badge )
}

const selectorChange = ( icon: string ) => {
	iconSelected.value = icon
	store.filter( undefined, undefined, icon )
}
</script>

<template>
	<div class="bg-[#f7f6fc] w-screen h-screen flex flex-col">
		<nav class="bg-[#ededf9] flex w-full justify-between px-12 items-center py-4 border-b border-black/10">
			<div class="flex items-center gap-2 text-xl font-bold">
				<Icon size="30"
					name="mynaui-signal-diamond-solid"/>
				<span>InterfaceCraft</span>
			</div>
			<div class="flex items-center gap-4">
				<design-assets-button
					label="Browse"
					type="ghost"
				></design-assets-button>
				<design-assets-button
					label="All Access"
					type="ghost"
				></design-assets-button>
				<design-assets-button
					label="Become an Author"
					type="ghost"
				></design-assets-button>
			</div>
			<div class="flex gap-4">
				<design-assets-button
					label="Log In"
					type="ghost"
				></design-assets-button>
				<design-assets-button
					label="Sign Up"
					type="normal"
				></design-assets-button>
			</div>
		</nav>
		<div class="flex flex-col h-full items-center pt-28 gap-40">
			<div class="flex flex-col px-28 gap-8 items-center">
				<span class="text-5xl font-bold text-center">Discover over 8,000 premium design assets to turbocharge your creative journey</span>
				<span class="text-xl">Join a vibrant community of more than 700,000 designem and innovators worldwide</span>
				<design-assets-search @search="onSearch"
					:values="productsList"></design-assets-search>
			</div>
			<div class="w-full h-full flex flex-col px-16">
				<div class="h-full flex flex-col bg-white rounded-2xl p-8 gap-8">
					<div class="flex w-full justify-between">
						<div class="flex gap-2">
							<design-assets-badge
								v-for="badge in store.badges"
								:key="badge"
								:label="badge"
								:data-selected="badge === badgeSelected"
								@click="badgeChange(badge)"
							></design-assets-badge>
						</div>
						<div class="flex gap-2">
							<design-assets-badge
								v-for="icon in store.icons"
								:key="icon"
								:icon="icon"
								:data-selected="icon === iconSelected"
								@click="selectorChange(icon)"
							></design-assets-badge>
						</div>
					</div>
					<div class="flex justify-between flex-wrap w-full h-full">
						<template v-if="designAssets.length">
						<design-asset-card
							v-for="asset in designAssets"
							:key="asset.id"
							:asset="asset"
						></design-asset-card>
						</template>
						<span class="w-full text-center" v-else>No assets found</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>