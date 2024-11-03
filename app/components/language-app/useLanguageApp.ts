export type LanguageApp = {
	langCode: string
	lang: string
	score: number
	lessons: LanguageLesson[]
	leaderboard: LanguageUser[]
}

export type LanguageUser = {
	name: string
	avatar: string
	score: number
}

export type LanguageLesson = {
	name: string
	avatar: string
	progress: number
}

export const useLanguageApp = defineStore( 'language-app', () => {

	const langCodeSelected     = ref( 'fr' )
	const userInfoLangSelected = ref<LanguageUser>( {
		name  : 'David',
		avatar: 'https://avatar.iran.liara.run/public/30',
		score : 340
	} )
	const leaderboard          = ref<LanguageUser[]>( [
		{
			name  : 'Chris',
			avatar: 'https://avatar.iran.liara.run/public/1',
			score : 520
		},
		userInfoLangSelected.value,
		{
			name  : 'Alice',
			avatar: 'https://avatar.iran.liara.run/public/82',
			score : 240
		},
		{
			name  : 'Bob',
			avatar: 'https://avatar.iran.liara.run/public/22',
			score : 120
		},
		{
			name  : 'Eve',
			avatar: 'https://avatar.iran.liara.run/public/67',
			score : 60
		}
	] )

	const userLangs = ref( new Map<string, LanguageApp>( [
		[ 'fr', {
			langCode   : 'fr',
			score      : 340,
			lang       : 'French',
			lessons    : [
				{
					name    : 'Grammar',
					avatar  : 'emojione-v1-blue-book',
					progress: 45
				},
				{
					name    : 'Reading',
					avatar  : 'emojione-v1-book2',
					progress: 60
				},
				{
					name    : 'Speaking',
					avatar  : 'emojione-v1-speaking-head',
					progress: 20
				},
				{
					name    : 'Listening',
					avatar  : 'emojione-v1-telephone-receiver',
					progress: 80
				}
			],
			leaderboard: leaderboard.value
		} ]
	] ) )

	const getLangLesson = ( langCode: string ) => {
		return userLangs.value.get( langCode )
	}

	const totalProgress = computed( () => {
		let total  = 0
		const lang = getLangLesson( langCodeSelected.value )
		if ( !lang ) {
			return undefined
		}
		lang.lessons.forEach( lesson => {
			total += lesson.progress
		} )
		return Math.round( total / lang.lessons.length )
	} )

	return {
		userLangs           : readonly( userLangs ),
		userInfoLangSelected: readonly( userInfoLangSelected ),
		totalProgress
	}
} )