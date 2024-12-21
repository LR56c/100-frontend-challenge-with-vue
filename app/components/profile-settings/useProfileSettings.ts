export type ProfileSettings = {
	avatar?: string,
	firstName: string,
	lastName: string,
	email: string,
	private: boolean
	bio: string
}

export const useProfileSettings = defineStore( 'profile-settings', () => {

	const profile = ref<ProfileSettings>( {
		avatar   : 'https://i.pravatar.cc/60?img=1',
		firstName: 'Kristy',
		bio      : '',
		lastName : 'Reeves',
		private  : true,
		email    : 'kirsty.reeves@gmail.com'
	} )

	const save = ( newProfile: ProfileSettings ) => {
		console.log( 'Saving profile', newProfile, profile.value )
		profile.value = newProfile
	}

	return {
		profile : readonly( profile ),
		save
	}
} )