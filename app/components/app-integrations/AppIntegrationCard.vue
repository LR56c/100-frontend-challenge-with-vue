<script setup
	lang="ts">

import AppIntegrationSwitch
	from '~/components/app-integrations/AppIntegrationSwitch.vue'
import type { AppIntegration } from '~/components/app-integrations/useAppIntegrations'

interface AppIntegrationCardProps {
	integration : AppIntegration
}

defineProps<AppIntegrationCardProps>()
// const enabled = ref( false )

const myHoverableElement = templateRef( 'item' )
const isHovered          = useElementHover( myHoverableElement )
</script>

<template>
	<div ref="item"
		:class="[isHovered ? 'gradient-card' : '']"
		class="w-52 h-32 flex flex-col text-black p-2 rounded-2xl shadow-lg justify-between">
		<div class="flex w-full justify-between items-center">
			<div class="w-10 h-10 bg-gray-200 rounded flex items-center justify-center p-2">
				<img class="rounded w-10 h-10 object-center object-contain" :src="integration.image"/>
			</div>
			<app-integration-switch
				v-model="integration.enabled"></app-integration-switch>
		</div>
		<span class="text-sm font-semibold">{{ integration.name }}</span>
		<span class="text-xs text-black/60 line-clamp-3">{{ integration.description }}</span>
	</div>
</template>

<style scoped>
.gradient-card {
	background-size: 100% 100%;
	background-position: 0px 0px,0px 0px,0px 0px,0px 0px;
	background-image: radial-gradient(100% 100% at -18% -1%, #9C5BD6FF 0%, #FFFFFF00 100%),radial-gradient(100% 100% at 31% -48%, #DFF52DFF 0%, #FFFFFF00 100%),radial-gradient(100% 100% at 31% -48%, #F5C52DFF 0%, #FFFFFF00 100%),radial-gradient(100% 100% at -53% 36%, #AC72DFFF 0%, #FFFFFF00 100%);
	opacity: 1;
}
</style>