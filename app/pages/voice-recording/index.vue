<script setup
	lang="ts">
import { useVoiceRecording } from '~/components/voice-recording/useVoiceRecording'

const store           = useVoiceRecording()
const { recordsList } = storeToRefs( store )

// onMounted(()=>{
// store.startListening()
// })
</script>

<template>
	<div class="bg-[#e7c7c8] w-screen h-screen flex items-center justify-center">
		<div class="relative bg-white rounded-2xl shadow-lg w-full max-w-sm flex flex-col p-4 pb-16 items-center gap-4">
			<NuxtLink to="/voice-recording/record">
				<div class="absolute bottom-[5%] left-[50%] -translate-x-1/2">
					<button class="text-white rounded-2xl bg-[#fa5854] flex items-center shadow-lg py-1 px-4 gap-2">
						<Icon name="iconamoon-microphone"/>
						<span>Record</span>
					</button>
				</div>
			</NuxtLink>
			<span class="text-xl font-semibold text-center">Recordings</span>
			<voice-recording-card
				v-for="record in recordsList"
				:key="record.id"
				:record="record"
			></voice-recording-card>
		</div>
	</div>
</template>

<style scoped>

</style>