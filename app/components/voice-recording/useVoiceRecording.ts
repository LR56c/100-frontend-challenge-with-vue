import { useAudioDecibels } from '~/components/sleep-app/useAudioDecibels'

export type VoiceRecord = {
	id: string
	name: string
	createdAt: Date
	url: Blob
}

export const useVoiceRecording = defineStore( 'voice-recording', () => {
	const recordsList = ref<VoiceRecord[]>( [] )

	// 	const audioStore                                         = useAudioDecibels()
// 	audioStore.decibelResult.on( sound => {
// 		console.log( 'diferente: ', sound )
// 	})

	const addVoice = ( record: VoiceRecord ) => {
		recordsList.value.push( record )
	}

	return {
		// startListening: audioStore.startListening
		recordsList,
		addVoice
	}
} )