<script setup
	lang="ts">

</script>

<template>
	<div class="flex items-center px-2 py-1 gap-2">
		<input class="h-full w-full placeholder-gray-400 outline-none"
			placeholder="Enter your message..."
			type="text"/>
		<button class="flex items-center justify-center">
			<Icon size="20"
				class="text-gray-400"
				name="proicons-emoji-laughter"/>
		</button>
		<button class="flex items-center justify-center">
			<Icon size="20"
				class="text-gray-400"
				name="material-symbols-attach-file"/>
		</button>
		<button class="p-1 flex items-center justify-center bg-[#163689] rounded-full">
			<Icon size="20"
				class="text-white"
				name="material-symbols-send-rounded"/>
		</button>
	</div>
</template>

<style scoped>

</style>