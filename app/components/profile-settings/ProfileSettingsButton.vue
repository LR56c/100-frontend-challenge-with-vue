<script setup
	lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '~/lib/utils'

export type ProfileSettingsButtonType = 'normal' | 'outline'

interface ProfileSettingsButtonProps {
	label : string
	type : ProfileSettingsButtonType
	class?: HTMLAttributes['class']
}

const props = defineProps<ProfileSettingsButtonProps>()

const typeParser = computed(() => {
	switch (props.type) {
		case 'normal':
			return 'bg-[#0600fe] text-white'
		case 'outline':
			return 'text-gray-400 font-semibold border border-gray-400'
	}
})
</script>

<template>
<button :class="cn('flex rounded-2xl items-center w-fit py-1 px-4 text-sm', typeParser, props.class)">
	{{ label }}
</button>
</template>

<style scoped>

</style>