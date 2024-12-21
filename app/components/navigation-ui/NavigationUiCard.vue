<script setup
	lang="ts">
import type { NavServices } from '~/components/navigation-ui/NavigationUiNav.vue'
interface NavigationUiCardProps {
	card: NavServices
}
const myHoverableElement = templateRef( 'ref' )
const isHovered          = useElementHover( myHoverableElement )
defineProps<NavigationUiCardProps>()
</script>

<template>
	<button ref="ref"
		:class="[isHovered ? card.backgroundColor : '']"
		class="p-4 flex items-center justify-between w-80 h-full rounded">
		<div class="flex items-center w-fit h-full gap-1">
			<div :class="[!isHovered ? card.backgroundColor : '']"
				class="w-12 h-12 flex items-center justify-center rounded">
				<Icon size="30"
					:class="[card.iconColor]"
					:name="card.icon"/>
			</div>
			<div class="flex items-start flex-col w-fit gap-1">
				<span class="font-bold text-sm">{{ card.title }}</span>
				<span class="text-black/75 text-[11px] font-semibold">{{ card.description }}</span>
			</div>
		</div>
		<Icon v-show="isHovered" name="material-symbols-arrow-right-alt-rounded"/>
	</button>
</template>

<style scoped>

</style>