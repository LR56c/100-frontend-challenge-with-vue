<script setup
	lang="ts">
const date = defineModel<Date>()
</script>

<template>
	<div class="flex justify-between items-center w-52 py-1 px-2 bg-gray-200 rounded-2xl">
		<button class="w-6 h-6 flex items-center justify-center hover:bg-gray-300 rounded-full">
			<Icon name="material-symbols-arrow-back-ios-new-rounded"/>
		</button>
		<span class="pb-1 font-semibold">{{useDateFormat(date, 'MMMM YYYY')}}</span>
		<button class="w-6 h-6 flex items-center justify-center hover:bg-gray-300 rounded-full">
			<Icon name="material-symbols-arrow-forward-ios-rounded"/>
		</button>
	</div>
</template>

<style scoped>

</style>