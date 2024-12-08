<script setup
	lang="ts">

import VoiceCallButton from '~/components/voice-call/VoiceCallButton.vue'

const avatar       = 'https://images.unsplash.com/photo-1641759653573-d5cbadb2b45d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fG9mZmljZSUyMHBlcnNvbnxlbnwwfHwwfHx8Mg%3D%3D'
const name         = 'Jamie Olson'
const callStatus   = 'In call with'
const callDuration = '00:00'
</script>

<template>
	<div class="bg-[#b8c6e1] w-screen h-screen flex flex-col items-center justify-center">
		<div class="bg-black flex flex-col h-[500px] w-full max-w-sm rounded-2xl items-center shadow-lg">
			<img class="object-center object-cover w-full h-full rounded-2xl"
				:src="avatar"/>
			<div class="absolute w-full max-w-sm rounded-2xl py-4 items-center h-[500px] flex flex-col bg-black/20 backdrop-blur-sm gap-4">
				<span class="text-lg font-semibold text-[#43b947]">{{callStatus }}</span>
				<span class="text-3xl text-white font-semibold">{{ name }}</span>
				<span class="text-gray-400/80 text-lg font-semibold">{{ callDuration }}</span>
				<img class="object-center object-cover w-32 h-32 rounded-full"
					:src="avatar"/>
				<div class="flex w-full justify-evenly">
					<voice-call-button icon="material-symbols-volume-up-outline-rounded"></voice-call-button>
					<voice-call-button icon="mage-microphone-mute"></voice-call-button>
					<voice-call-button icon="mdi-video-outline"></voice-call-button>
					<voice-call-button icon="gg-menu-grid-o"></voice-call-button>
				</div>
				<button class="mt-auto grid grid-cols-4 items-center gap-1 bg-gray-200 rounded-full">
					<div class="col-span-1 p-1 bg-red-500 rounded-full flex items-center justify-center">
						<Icon size="30"
							class="text-white"
							name="material-symbols-light-call-end"/>
					</div>
					<span class="col-span-3 font-semibold text-sm">Slide to decline</span>
				</button>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>