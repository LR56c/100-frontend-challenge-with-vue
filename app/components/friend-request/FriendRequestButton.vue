<script setup
	lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '~/lib/utils'

interface FriendRequestButtonProps {
	class?: HTMLAttributes['class']
	icon ?: string
	label : string
}
const props = defineProps<FriendRequestButtonProps>()
</script>

<template>
<button :class="cn('flex items-center w-full gap-1 py-2 px-4 rounded-2xl', props.class)">
	<Icon class="h-5 basis-[30%]" v-if="icon" :name="icon"/>
	<span class="basis-[70%] capitalize text-sm">{{ label }}</span>
</button>
</template>

<style scoped>

</style>