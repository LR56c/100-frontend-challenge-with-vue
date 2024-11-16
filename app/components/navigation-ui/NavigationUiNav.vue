<script setup
	lang="ts">
import {
	CalendarDate,
	getLocalTimeZone,
	today
} from '@internationalized/date'
import { toDate } from 'radix-vue/date'
import { Button } from '~/components/ui/button'
import {
	NavigationMenuContent,
	NavigationMenuSub,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuRoot,
	NavigationMenuTrigger,
	NavigationMenuViewport
} from 'radix-vue'
import {
	PopoverAnchor,
	PopoverArrow,
	PopoverClose,
	PopoverContent,
	PopoverPortal,
	PopoverRoot,
	PopoverTrigger
} from 'radix-vue'

export type NavServices = {
	title: string
	icon: string
	href: string
	description: string
	backgroundColor: string
	iconColor: string
}

const navServices: NavServices[] = [
	{
		title          : 'Web Development',
		href           : '',
		description    : 'Building dynamic websites for your success',
		icon           : 'marketeq-handphone-laptop',
		backgroundColor: 'bg-green-100',
		iconColor      : 'text-green-500'
	},
	{
		title          : 'Cloud Solutions',
		href           : '',
		description    : 'Unlocking cloud potential for businesses',
		icon           : 'ic-round-cloud-done',
		backgroundColor: 'bg-blue-100',
		iconColor      : 'text-blue-500'
	},
	{
		title          : 'Mobile App Development',
		href           : '',
		description    : 'Crafting impactful mobile solutions',
		icon           : 'octicon-device-mobile',
		backgroundColor: 'bg-yellow-100',
		iconColor      : 'text-yellow-500'
	},
	{
		title          : 'Cybersecurity Services',
		href           : '',
		description    : 'Protecting your digital realm',
		icon           : 'pepicons-pencil-shield-checkered',
		backgroundColor: 'bg-lime-100',
		iconColor      : 'text-lime-500'
	},
	{
		title          : 'Software Development',
		href           : '',
		description    : 'Creating tailored software solutions',
		icon           : 'ph-diamonds-four-fill',
		backgroundColor: 'bg-pink-100',
		iconColor      : 'text-pink-500'
	},
	{
		title          : 'Data Analytics',
		href           : '',
		description    : 'Unleashing insights from your data',
		icon           : 'ion-ios-analytics',
		backgroundColor: 'bg-purple-100',
		iconColor      : 'text-purple-500'
	}
]
</script>

<template>
	<div class="w-full bg-gray-100 rounded-2xl py-2 px-8 flex items-center justify-between">
		<div class="flex basis-[70%] justify-between">
			<div class="flex items-center gap-2">
				<Icon class="text-[#fc6901]"
					size="20"
					name="pepicons-pencil-circle-filled-circle-off"/>
				<span class="text-xl font-bold">TechNova</span>
			</div>
			<NavigationMenuRoot
				class="relative z-[1] flex w-full justify-center">
				<NavigationMenuList class="center m-0 flex list-none p-1">
					<NavigationMenuItem>
						<NavigationMenuTrigger disabled
							class="hover:bg-gray-200 group flex select-none items-center justify-between gap-0.5 rounded-2xl px-3 py-2 text-sm font-medium leading-none outline-none">
							Product
							<Icon name="radix-icons-caret-down"
								class="relative top-[1px] transition-transform duration-[250ms] ease-in group-data-[state=open]:-rotate-180"/>
						</NavigationMenuTrigger>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<PopoverRoot>
							<PopoverTrigger>
								<NavigationMenuTrigger class="hover:bg-gray-200 group flex select-none items-center justify-between gap-0.5 rounded-2xl px-3 py-2 text-sm font-medium leading-none outline-none">
									Services
									<Icon name="radix-icons-caret-down"
										class="relative top-[1px] transition-transform duration-[250ms] ease-in group-data-[state=open]:-rotate-180"/>
								</NavigationMenuTrigger>
							</PopoverTrigger>
							<PopoverPortal>
								<PopoverContent class="mt-4 grid list-none sm:w-[700px] gap-2 sm:grid-flow-col sm:grid-rows-3 border-0 bg-gray-100 rounded-2xl p-4">
									<NavigationUiCard v-for="card in navServices"
									:key="card.title"
									:card>
								</NavigationUiCard>
								</PopoverContent>
							</PopoverPortal>
						</PopoverRoot>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuLink
							class="hover:bg-gray-200 block select-none rounded-2xl px-3 py-2 text-sm font-medium leading-none no-underline outline-none">
							Blog
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuLink
							class="hover:bg-gray-200 block select-none rounded-2xl px-3 py-2 text-sm font-medium leading-none no-underline outline-none">
							Careers
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuLink
							class="hover:bg-gray-200 block select-none rounded-2xl px-3 py-2 text-sm font-medium leading-none no-underline outline-none">
							Contact Us
						</NavigationMenuLink>
					</NavigationMenuItem>
				</NavigationMenuList>

				<div class="perspective-[2000px] absolute top-full left-0 flex w-full justify-center">
					<NavigationMenuViewport
						class="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[10px] bg-white transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]"
					/>
				</div>
			</NavigationMenuRoot>
		</div>
		<div class="flex gap-2">
			<Button class="hover:bg-gray-200 rounded-2xl"
				variant="ghost">
				Sign In
			</Button>
			<Button class="text-white rounded-2xl bg-orange-400 hover:bg-orange-500"
				variant="default">
				Sign Up
			</Button>
		</div>
	</div>
</template>

<style scoped>

</style>