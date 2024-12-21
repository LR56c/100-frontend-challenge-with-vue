<script setup
	lang="ts">
interface ProjectRoadmapAvatarsProps {
	avatars: string[]
}

const props = defineProps<ProjectRoadmapAvatarsProps>()

const firstThree = props.avatars.slice(0, 3)
const remaining = props.avatars.length - 3
</script>

<template>
<div class="flex items-center -space-x-2">
	<nuxt-img v-for="a in firstThree" :key="a" class="border object-center object-cover rounded-full w-6 h-6" :src="a"/>
	<div v-if="remaining > 0" class="border rounded-full p-0.5 text-sm h-6 w-6 bg-gray-600 text-white flex items-center justify-center">+{{ remaining}}</div>
</div>
</template>

<style scoped>

</style>