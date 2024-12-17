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
		<div class="relative bg-white rounded-2xl shadow-lg w-full max-w-sm flex flex-col p-4 items-center">
			<NuxtLink to="/voice-recording/record">
				<button class="absolute text-white rounded-2xl bottom-[5%] left-[50%] -translate-x-1/2 bg-[#fa5854] flex items-center shadow-lg py-1 px-2">
					<Icon name="iconamoon-microphone"/>
					<span>Record</span>
				</button>
			</NuxtLink>
			<span class="text-xl text-center">Recordings</span>
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