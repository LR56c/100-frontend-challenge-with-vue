<script setup
	lang="ts">
import LanguageAppBadge from '~/components/language-app/LanguageAppBadge.vue'

interface LanguageAppProfileBarInfoProps {
	icon?: string
	avatar : string
	name : string
	label: string
	backgroundEnabled ?: boolean
}

defineProps<LanguageAppProfileBarInfoProps>()
</script>

<template>
	<div class="flex justify-between items-center">
		<div class="flex gap-2 items-center">
			<img :key="name" class="w-8 h-8" :src="avatar"/>
			<span class="text-center font-semibold">{{ name }}</span>
		</div>
		<language-app-badge :icon :background-enabled="backgroundEnabled" :label></language-app-badge>
	</div>
</template>

<style scoped>

</style>