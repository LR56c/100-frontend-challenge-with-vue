<script setup
	lang="ts">
interface LanguageAppBadgeProps {
	icon?: string
	label: string
	backgroundEnabled ?: boolean
}

const { icon = 'streamline-emojis-crown' } = defineProps<LanguageAppBadgeProps>()
</script>

<template>
	<div class="flex rounded-2xl py-1 px-2 items-center gap-1"
		:class="[backgroundEnabled ? 'bg-purple-200' : '']"
	>
		<Icon v-if="icon"
			:name="icon"/>
		<span class="font-semibold">{{ label }}</span>
	</div>
</template>

<style scoped>

</style>