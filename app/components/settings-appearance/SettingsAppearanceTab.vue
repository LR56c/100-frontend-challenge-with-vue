<script setup
	lang="ts">

import SettingsAppearanceColors
	, { type SettingsAppearanceColorsType } from '~/components/settings-appearance/SettingsAppearanceColors.vue'
import MySelect from '~/components/shared/MySelect.vue'
import { useTheme } from '~/components/shared/theme/useTheme'

const languages = [
	'English',
	'French',
	'German',
	'Spanish',
	'Italian',
	'Portuguese'
]

const colors: SettingsAppearanceColorsType[] = [
	'blue',
	'green',
	'pink',
	'orange'
]

const theme = useTheme()

onMounted( () => {
	theme.selectTheme(theme.isDark ? 'Dark' : 'Light')
} )


const changeTheme = (t: string) => {
	theme.selectTheme(t)
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
					v-for="t in theme.themesAvailable"
					:data-selected="t.name === theme.currentTheme"
					:key="t.name"
					@click="changeTheme(t.name)"
					:label="t.label"
					:theme-color="t.themeColor"
					:background-color="t.backgroundColor"></settings-appearance-theme-preview>
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
