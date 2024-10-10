<script setup
	lang="ts">
interface JobCompanyIconAvatar {
	company : string
	companyIcon : string
}
defineProps<JobCompanyIconAvatar>()
</script>

<template>
	<div
		:class="[company === 'Netflix' ? 'bg-black' : 'bg-gray-200']"
		class="w-10 h-10 rounded-2xl flex items-center justify-center">
		<Icon size="20" :name="companyIcon"/>
	</div>
</template>

<style scoped>

</style>
