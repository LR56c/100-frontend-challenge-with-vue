<script setup
	lang="ts">
import ProfileSettingsTab
	from '~/components/profile-settings/ProfileSettingsTab.vue'
import { useTheme } from '~/components/shared/theme/useTheme'
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger
} from '~/components/ui/tabs'

type Tab = {
	name: string
	component?: any
}

const tabs: Tab[] = [
	{
		name     : 'profile',
		component: ProfileSettingsTab
	},
	{
		name: 'notifications'
	},
	{
		name: 'appearance'
	},
	{
		name: 'account'
	}
]
const tabSelected = ref( 'profile' )
const theme       = useTheme()

const changeTheme = () => {
	theme.selectTheme( theme.isDark ? 'Light' : 'Dark' )
}
</script>

<template>
	<div class="w-screen h-screen flex items-center justify-center bg-gray-200">
		<div class="w-[420px] h-[670px] bg-gray-100 dark:bg-gray-950 rounded-2xl gap-4 px-4 py-6 flex flex-col justify-between shadow-lg">
			<div class="flex justify-between">
				<div class="font-semibold dark:text-white text-xl">Profile</div>
				<div class="flex gap-2 ">
					<button @click="changeTheme"
						class="flex items-center justify-center">
						<Icon size="20"
							name="unjs-theme-colors"/>
					</button>
					<button class="flex items-center justify-center">
						<Icon class="h-5 text-black dark:text-white"
							size="20"
							name="material-symbols-close-rounded"/>
					</button>
				</div>
			</div>
			<hr class="border border-black dark:border-white"/>
			<Tabs class="h-full"
				v-model="tabSelected">
				<TabsList class="flex justify-start">
					<TabsTrigger v-for="tab in tabs"
						:key="tab.name"
						:value="tab.name"
						:disabled="!tab.component"
						:class="[tabSelected === tab.name ? '!text-indigo-800 dark:!text-indigo-400 dark:decoration-indigo-400 decoration-indigo-800 underline underline-offset-4' : 'text-gray-600']"
						class="capitalize px-0 pr-4 text-md py-2 border-0 !shadow-none font-semibold">
						{{ tab.name }}
					</TabsTrigger>
				</TabsList>
				<TabsContent v-for="tab in tabs"
					:key="tab.name"
					:value="tab.name">
					<component
						:is="tab.component"
						v-if="tab.component"
					/>
				</TabsContent>
			</Tabs>
		</div>
	</div>
</template>

<style scoped>

</style>