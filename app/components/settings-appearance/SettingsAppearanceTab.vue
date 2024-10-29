<script setup
	lang="ts">

import SettingsAppearanceColors
	, { type SettingsAppearanceColorsType } from '~/components/settings-appearance/SettingsAppearanceColors.vue'
import MySelect from '~/components/shared/MySelect.vue'

type Theme = 'Light' | 'Dark'

type ThemePreview = {
	name: Theme
	label: string
	themeColor: string
	backgroundColor: string
}

const languages = [
	'English',
	'French',
	'German',
	'Spanish',
	'Italian',
	'Portuguese'
]

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

const colors: SettingsAppearanceColorsType[] = [
	'blue',
	'green',
	'pink',
	'orange'
]
const isDark                                 = useDark()
const toggleDark                             = useToggle( isDark )
const selectedTheme                          = ref<Theme>( 'Light' )

onMounted( () => {
	selectedTheme.value = isDark ? 'Dark' : 'Light'
} )

const selectTheme = ( theme: Theme ) => {
	selectedTheme.value = theme
	toggleDark( theme === 'Dark' )
}
</script>

<template>
	<div class="flex flex-col gap-4">
		<div class="flex items-center w-full">
			<div class="basis-[70%] w-full flex flex-col">
				<div class="dark:text-white font-semibold">Language</div>
				<div class="text-gray-500 text-sm font-semibold">Select the language of
					the application
				</div>
			</div>
			<my-select button-class="basis-[40%]"
				placeholder="Select Language"
				label="Select Language"
				:values="languages"></my-select>
		</div>
		<div class="flex flex-col gap-4">
			<div class="flex flex-col">
				<div class="dark:text-white font-semibold">Interface theme</div>
				<div class="text-gray-500 text-sm font-semibold">Customise your
					application theme
				</div>
			</div>
			<div class="w-full flex items-center gap-4">
				<settings-appearance-theme-preview
					v-for="theme in themes"
					:key="theme.name"
					@click="selectTheme(theme.name)"
					:selected="selectedTheme === theme.name"
					:label="theme.label"
					:theme-color="theme.themeColor"
					:background-color="theme.backgroundColor"></settings-appearance-theme-preview>
			</div>
		</div>
		<div class="w-full flex items-center">
			<div class="w-full basis-[70%] flex flex-col">
				<div class="dark:text-white font-semibold">Accent ccolor</div>
				<div class="text-gray-500 text-sm font-semibold">Select your application
					accent color
				</div>
			</div>
			<settings-appearance-colors :colors
				class="basis-[30%]"></settings-appearance-colors>
		</div>
	</div>
</template>

<style scoped>

</style>
