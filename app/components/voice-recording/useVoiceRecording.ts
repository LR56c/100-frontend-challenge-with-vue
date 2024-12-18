import { ulid } from 'ulidx'
import { useAudioDecibels } from '~/components/sleep-app/useAudioDecibels'

export type VoiceRecord = {
	id: string
	name: string
	createdAt: Date
	url: Blob
}

export const useVoiceRecording = defineStore( 'voice-recording', () => {
	const recordsList = ref<VoiceRecord[]>( [] )

	const addVoice = ( record: Blob ) => {
		recordsList.value.push( {
			id       : ulid(),
			name     : `Voice Record ${recordsList.value.length + 1}`,
			createdAt: new Date(),
			url      : record
		})
	}

	return {
		recordsList,
		addVoice
	}
} )