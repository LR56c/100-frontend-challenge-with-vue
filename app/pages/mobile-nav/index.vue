<script setup
	lang="ts">
import type { ButtonIcon } from '~/components/MobileNavigation.vue'

const parent                  = 'mobile-nav'
const sideNav: ButtonIcon[][] = [
	[
		{
			icon: 'i-dashicons-businessman',
			text: 'Personal Data',
			link: `/${ parent }/profile`
		},
		{
			icon: 'i-dashicons-email',
			text: 'Messages',
			link: `/${ parent }/messages`
		},
		{
			icon: 'i-dashicons-bell',
			text: 'Notifications',
			link: `/${ parent }/notifications`
		},
		{
			icon: 'i-dashicons-location',
			text: 'Location',
			link: `/${ parent }/locations`
		},
		{
			icon: 'i-dashicons-groups',
			text: 'Location',
			link: `/${ parent }/community`
		}
	],
	[
		{
			icon: 'i-dashicons-buddicons-buddypress-logo',
			text: 'FAQs',
			link: `/${ parent }/faqs`
		},
		{
			icon: 'i-dashicons-admin-generic',
			text: 'Settings',
			link: `/${ parent }/settings`
		}
	]
]
const bottomNav: ButtonIcon[] = [
	{
		icon: 'i-dashicons-admin-home',
		text: 'Home',
		link: `/${ parent }/home`
	},
	{
		icon: 'i-dashicons-chart-line',
		text: 'Charts',
		link: `/${ parent }/chart`
	},
	{
		icon: 'i-dashicons-email',
		text: 'Messages',
		link: `/${ parent }/messages`
	},
	{
		icon: 'i-dashicons-businessman',
		text: 'Profile',
		link: `/${ parent }/profile`
	}
]
</script>

<template>
	<div>
		<mobile-navigation name="Lisa Richardson"
			specialist="Environmental metereologist"
			:side-nav="sideNav"
			:bottom-nav="bottomNav"></mobile-navigation>
	</div>
</template>

<style scoped>

</style>
