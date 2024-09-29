<script setup
	lang="ts">

interface Props {
	img?: string
	dotted: boolean
}

const { dotted = false } = defineProps<Props>()
const emit               = defineEmits<{
	newClick: [ void ]
}>()
</script>

<template>
	<img v-if="!dotted"
		class="rounded-full w-8 h-8"
		:src="img !== undefined ? img : 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541'"/>
	<div class="rounded-full w-8 h-8 border-dashed border-2 border-gray-400 flex items-center justify-center"
		v-else>
		<Icon @click="emit('newClick')"
			class="opacity-70"
			name="mdi-plus"/>
	</div>
</template>

<style scoped>

</style>
