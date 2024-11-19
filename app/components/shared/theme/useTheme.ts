import type {
	Theme,
	ThemePreview
} from '~/components/shared/config/settings'

const themes: ThemePreview[] = [
	{
		name           : 'Light',
		label          : 'Light theme',
		themeColor     : 'bg-white',
		backgroundColor: 'bg-gray-200'
	},
	{
		name           : 'Dark',
		label          : 'Dark theme',
		themeColor     : 'bg-gray-800',
		backgroundColor: 'bg-gray-950'
	}
]

export const useTheme = defineStore( 'theme', () => {
	const isDark       = useDark()
	const toggleDark   = useToggle( isDark )
	const currentTheme = ref<Theme>( 'Light' )

	const selectTheme = ( theme: Theme ) => {
		currentTheme.value = theme
		toggleDark( theme === 'Dark' )
	}

	return {
		isDark      : readonly( isDark ),
		toggleDark,
		currentTheme: readonly( currentTheme ),
		selectTheme,
		themesAvailable : readonly( themes )
	}
} )