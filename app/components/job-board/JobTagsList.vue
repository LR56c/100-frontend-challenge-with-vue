<script setup
	lang="ts">
interface JobTagsList {
	tags : string[]
}
defineProps<JobTagsList>()
</script>

<template>
	<div class="bg-gray-200 rounded-full py-0.5 px-1.5 text-xs capitalize"
		v-for="tag in tags">{{ tag }}
	</div>
</template>

<style scoped>

</style>
