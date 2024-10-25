<script setup
	lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import SettingsAppearanceTab
	from '~/components/settings-appearance/SettingsAppearanceTab.vue'

type Tab = {
	name: string
	component ?: any
}

const tabs : Tab[] = [
	{
		name: 'profile',
	},
	{
		name: 'notifications',
	},
	{
		name: 'appearance',
		component: SettingsAppearanceTab
	},
	{
		name: 'account',
	}
]
const tabSelected = ref('appearance')
</script>

<template>
	<div class="bg-purple-100 w-screen h-screen flex flex-col items-center justify-center">
		<div class="w-full max-w-lg bg-white dark:bg-gray-950 px-4 py-6 min-h-[500px] rounded-2xl flex flex-col gap-4">
			<div class="flex justify-between">
				<div class="font-semibold dark:text-white text-xl">Settings</div>
				<button class="flex items-center justify-center">
					<Icon class="h-5" size="20" name="material-symbols-close-rounded"/>
				</button>
			</div>
			<hr class="border border-black dark:border-white"/>
			<Tabs class="h-full" v-model="tabSelected">
				<TabsList class="flex justify-start">
					<TabsTrigger v-for="tab in tabs" :key="tab.name" :value="tab.name"
						:disabled="!tab.component"
						:class="[tabSelected === tab.name ? '!text-indigo-800 dark:!text-indigo-400 dark:decoration-indigo-400 decoration-indigo-800 underline underline-offset-4' : 'text-gray-600']"
						class="capitalize px-0 pr-4 text-md py-2 border-0 !shadow-none font-semibold">
						{{ tab.name }}
					</TabsTrigger>
				</TabsList>
				<TabsContent v-for="tab in tabs" :key="tab.name" :value="tab.name">
					<component v-if="tab.component" :is="tab.component"/>
				</TabsContent>
			</Tabs>
			<hr class="border border-black dark:border-white"/>
			<div class="flex justify-between">
				<button class="flex gap-2 text-gray-500 items-center font-semibold">
					<Icon class="h-5" size="16" name="carbon-reset"/>
					<span>reset to default</span>
				</button>
				<div class="flex gap-2">
					<button class="rounded-2xl font-semibold px-4 py-1.5 bg-gray-300 text-gray-700">Cancel</button>
					<button class="rounded-2xl font-semibold px-4 py-1.5 dark:bg-indigo-400 bg-[#0600fe] text-white">Save Preferences</button>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>
