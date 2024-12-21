<script setup
	lang="ts">
import {
	type DesignAsset,
	useDesignAssets
} from '~/components/design-assets/useDesignAssets'
import MyOutlineIcon from '~/components/shared/MyOutlineIcon.vue'

interface DesignAssetCardProps {
	asset: DesignAsset
}

const props = defineProps<DesignAssetCardProps>()

const store              = useDesignAssets()
const myHoverableElement = templateRef( 'h' )
const isHovered          = useElementHover( myHoverableElement )

const toggleLike = () => {
	store.likeToggle( props.asset.id )
}
</script>

<template>
	<div class="w-96 h-fit flex flex-col gap-2">
		<div ref="h"
			class="relative w-96 h-52">
			<div class="absolute top-[4%] left-[2%] w-10 h-10 bg-white/50 rounded-full flex items-center justify-center">
				<Icon size="20"
					:name="asset.provider.icon"/>
			</div>
			<div v-if="isHovered"
				class="absolute w-full h-full bg-black/40 rounded-2xl flex items-center justify-center gap-4">
				<NuxtLink :to="asset.link">
					<my-outline-icon icon="mdi-eye-outline"></my-outline-icon>
				</NuxtLink>
				<my-outline-icon @click="toggleLike"
					:icon-class="asset.like ? 'text-red-600' : undefined"
					icon="material-symbols-favorite-rounded"></my-outline-icon>
			</div>
			<nuxt-img class="object-center object-cover w-full h-full rounded-2xl"
				:src="asset.cover"/>
		</div>
		<div class="flex w-full justify-between items-center">
			<div class="flex gap-2 items-center">
				<nuxt-img class="object-center object-cover w-5 h-5 rounded-full"
					:src="asset.avatar"/>
				<span class="font-semibold">{{ asset.name }}</span>
			</div>
			<span class="font-semibold">${{ asset.price }}</span>
		</div>
	</div>
</template>

<style scoped>

</style>