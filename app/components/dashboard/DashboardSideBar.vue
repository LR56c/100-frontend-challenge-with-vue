<script setup
	lang="ts">
import {
	TreeItem,
	TreeRoot
} from 'radix-vue'

const items = [
	{ title: 'Dashboard', icon: 'hugeicons-dashboard-square-01' },
	{ title: 'Reports', icon: 'carbon-report-data' },
	{ title: 'Data sources', icon: 'material-symbols-database' },
	{
		title: 'Monetise',
		icon: 'mingcute-copper-coin-line',
		children: [
			{ title: 'Adds', trail: 'iconamoon-link-external-light' },
			{ title: 'Subcription', subcription : true },
			{ title: 'Partner Program', trail: 'iconamoon-link-external-light' }
		]
	},
	{ title: 'Filters', icon: 'mage-filter' },
	{ title: 'Settings', icon: 'solar-settings-outline' }
]
</script>

<template>
	<div class="w-56 min-h-[448px] flex flex-col gap-4 bg-gray-800 rounded-2xl p-4 text-white">
		<div class="flex gap-2 items-center">
		<svg class="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
			<rect x="10" y="10" width="80" height="80" rx="15" ry="15" fill="magenta" />
			<polygon points="50,20 60,40 80,40 65,55 70,80 50,65 30,80 35,55 20,40 40,40" fill="black" />
			<rect x="10" y="10" width="40" height="40" fill="purple" opacity="0.5" />
			<rect x="50" y="50" width="40" height="40" fill="purple" opacity="0.5" />
		</svg>
		<h2 class="font-semibold">
			Inittech
		</h2>
		</div>
	<TreeRoot
		v-slot="{ flattenItems }"
		class="flex flex-col flex-1 list-none select-none space-y-2 text-sm"
		:items="items"
		:get-key="(item) => item.title"
		:default-expanded="['Monetise']"
	>
		<TreeItem
			v-for="item in flattenItems"
			v-slot="{ isExpanded }"
			:key="item._id"
			:style="{ 'padding-left': `${item.level - 0.5}rem` }"
			v-bind="item.bind"
			class="flex py-1 px-2 items-center rounded outline-none hover:bg-gray-200/20 data-[selected]:bg-pink-600"
		>
			<Icon
				v-if="item.value.icon"
				:name="item.value.icon"
				class="h-4 w-4"
			/>
			<div class="pl-2 flex gap-1">
				<span>{{ item.value.title }}</span>
				<Icon v-if="item.value.trail" :name="item.value.trail"/>
				<dashboard-subcription-badge v-if="item.value.subcription"></dashboard-subcription-badge>
			</div>
			<template v-if="item.hasChildren">
				<Icon
					size="20"
					:name="isExpanded ? 'ic-baseline-keyboard-arrow-up' : 'ic-baseline-keyboard-arrow-down'"
					class="ml-auto"
				/>
			</template>
		</TreeItem>
	</TreeRoot>
		<button class="flex items-center py-1 px-2 text-sm rounded gap-1 hover:bg-gray-200/20">
			<Icon name="ooui-log-out-rtl"/>
			<div>Log Out</div>
		</button>
	</div>
</template>

<style scoped>

</style>
