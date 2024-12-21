<script setup
	lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '~/lib/utils'

interface DesignAssetsBadgeProps {
	class?: HTMLAttributes['class']
	label?: string
	icon?: string
}

const props = defineProps<DesignAssetsBadgeProps>()
</script>

<template>
<button :class="cn('flex items-center hover:bg-gray-200 justify-center data-[selected=true]:border data-[selected=true]:border-black/30 rounded-full py-1 px-2 bg-transparent data-[selected=true]:bg-[#dddcfb]/50', props.class)">
	<span v-if="label">{{ label }}</span>
	<Icon size="20" v-if="icon" :name="icon"/>
</button>
</template>

<style scoped>

</style>