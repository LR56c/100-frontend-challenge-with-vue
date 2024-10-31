<script setup
	lang="ts">
import {
	TreeItem,
	TreeRoot
} from 'radix-vue'
import { useAppNavigation } from '~/components/app-navigation/useAppNavigation'
import NotificationBell from '~/components/shared/NotificationBell.vue'

const items = [
	{ title: 'Dashboard', icon: 'mdi-view-dashboard' },
	{ title: 'Tag List', icon: 'mdi-tag' },
	{ title: 'Define Subject', icon: 'mdi-document' },
	{ title: 'Members', icon: 'material-symbols-person' },
	{ title: 'Tags Assigment', icon: 'mdi-tag-plus' },
	{ title: 'Library', icon: 'solar-library-bold' },
	{ title: 'Emails', icon: 'material-symbols-mail' }
]

const store = useAppNavigation()

const user = store.getUser('lily chen')
const expandedBar = ref( true )
</script>

<template>
	<div :class="[expandedBar ? 'w-48' : 'w-28 justify-center items-center']"
		class="relative min-h-[448px] flex flex-col gap-4 bg-gray-800 rounded-2xl p-4 text-white">
		<button @click="expandedBar = !expandedBar"
			class="absolute top-7 -right-2 w-5 h-5 bg-gray-800 rounded-full flex items-center justify-center">
			<Icon name="charm-menu-hamburger"/>
		</button>
		<div class="flex gap-2 items-center">
			<div class="w-10 h-10 overflow-hidden rounded-2xl">
				<img class="h-10 w-10 object-cover object-center rounded-2xl scale-150"
					src="/app_navigation_logo.avif"/>
			</div>
			<h2 v-if="expandedBar"
				class="text-xl font-semibold">
				Rose Way
			</h2>
		</div>
		<TreeRoot
			v-slot="{ flattenItems }"
			class="flex flex-col list-none select-none space-y-2 text-sm"
			:items="items"
			:get-key="(item) => item.title"
		>
			<TreeItem
				v-for="item in flattenItems"
				:key="item._id"
				v-slot="{isSelected}"
				v-bind="item.bind"
			>
				<app-navigation-item-expanded :label="item.value.title"
					:data-selected="isSelected"
					:data-expanded="expandedBar"
				>
					<template #primary>
						<Icon
							v-if="item.value.icon"
							:name="item.value.icon"
							class="h-4 w-4"
						/>
					</template>
				</app-navigation-item-expanded>

			</TreeItem>
		</TreeRoot>
		<hr class="w-full border-gray-500"/>
		<template v-if="user">
		<ul class="flex flex-col list-none select-none space-y-2 text-sm">
			<li>
				<app-navigation-item-expanded :data-expanded="expandedBar"
					:label="user.name">
					<template #primary>
						<div class="relative w-4 h-4">
							<div class="absolute w-1 h-1 bg-green-500 rounded-full bottom-0 right-0"></div>
							<img class="w-4 h-4 rounded-full object-center object-cover"
								:src="user.avatar"/>
						</div>
					</template>
				</app-navigation-item-expanded>
			</li>
			<li>
				<app-navigation-item-expanded :data-expanded="expandedBar"
					label="Notifications">
					<template #primary>
						<notification-bell icon="material-symbols-notifications-rounded"></notification-bell>
					</template>
				</app-navigation-item-expanded>
			</li>
		</ul>
		<button class="flex flex-col rounded-2xl bg-[#82b3ff] py-2.5 w-full">
			<span :class="[expandedBar ? '' : 'text-sm']"
				class="font-semibold">90 days left</span>
			<span
				class="text-xs font-semibold text-blue-800">Select a plan</span>
		</button>
		</template>
	</div>
</template>

<style scoped>

</style>
