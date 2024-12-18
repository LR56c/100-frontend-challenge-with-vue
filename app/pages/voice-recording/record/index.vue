<script setup
	lang="ts">
import WafeSurferRecorder
	from '~/components/voice-recording/WafeSurferRecorder.vue'
</script>

<template>
	<div class="bg-[#e7c7c8] w-screen h-screen flex items-center justify-center">
		<div class="relative bg-white rounded-2xl shadow-lg w-full max-w-sm flex flex-col p-4 pb-12 items-center">
			<div class="w-full items-center grid grid-cols-5 mb-12">
				<NuxtLink to="/voice-recording" class="flex items-center col-span-1">
					<Icon size="20"
						name="material-symbols-arrow-left-alt-rounded"/>
				</NuxtLink>
				<span class="col-span-3 text-xl text-center">Voice Recordings</span>
			</div>
			<wafe-surfer-recorder></wafe-surfer-recorder>
		</div>
	</div>
</template>

<style scoped>

</style>