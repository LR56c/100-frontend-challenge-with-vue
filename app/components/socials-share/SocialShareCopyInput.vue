<script setup
	lang="ts">
import { toast } from 'vue-sonner'

interface SocialShareCopyInputProps {
	link: string
	icon?: string
}

const props = defineProps<SocialShareCopyInputProps>()

const { copy } = useClipboard()

const copyClip = () => {
	copy( props.link )
	toast( 'Link copied to clipboard', {
		position: 'bottom-center'
	} )
}

</script>

<template>
	<button v-if="!icon"
		@click="copyClip"
		class="flex justify-between w-full border border-gray-300 p-2 rounded-2xl gap-8">
		<span class="text-black/80 text-sm">{{ link }}</span>
		<span class="text-purple-700 font-bold text-sm">Copy</span>
	</button>
	<button v-else
		@click="copyClip"
		class="flex gap-2">
		<Icon :name="icon"
			size="20"/>
		<span class="uppercase text-gray-400 text-sm">Get Link</span>
	</button>
</template>

<style scoped>

</style>