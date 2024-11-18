<script setup
	lang="ts">
import ChallengeCard, { type ChallengeCardProps } from '~/components/ChallengeCard.vue'

const list: ChallengeCardProps[] = [
	{
		link: '/profile-card',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/profile-card.jpeg?t=1719059651172',
		day : 1
	},
	{
		link: '/add-to-bag',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/add-to-bag.jpeg?t=1719059648668',
		day : 2
	},
	{
		link: '/mobile-nav',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/mobile-navigation.jpeg?t=1719059650151',
		day : 3
	},
	{
		link: '/contact',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/contact-us.jpeg?t=1719059651143',
		day : 4
	},
	{
		link: '/recipe',

		img: 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/recipe.jpeg?t=1719059652463',
		day: 5
	},
	{
		link: '/carousel',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/image-carousel.jpeg?t=1719059648475',
		day : 6
	},
	{
		link: '/create-account',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/create-account.jpeg?t=1719059651469',
		day : 7
	},
	{
		link: '/music-events/france',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/music-events.jpeg?t=1719059649213',
		day : 8
	},
	{
		link: '/generate-password',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/password-generator.jpeg?t=1719059647916',
		day : 9
	},
	{
		link: '/sign-up',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/sign-up-page.jpeg?t=1719059651374',
		day : 10
	},
	{
		link: '/hotel-booking',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/hotel-booking.jpeg?t=1719059651418',
		day : 11
	},
	{
		link: '/restaurant-reservation',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/restaurant-reservation.jpeg?t=1719059648471',
		day : 12
	},
	{
		link: '/task-board',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/task-board.jpeg?t=1719059648712',
		day : 13
	},
	{
		link: '/shopping-list',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/shopping-list.jpeg?t=1719059650980',
		day : 14
	},
	{
		link: '/notifications',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/notifications.jpeg?t=1719059649337',
		day : 15
	}, {
		link: '/fur-friends',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/fur-friends.jpeg?t=1719059648095',
		day : 16
	}, {
		link: '/article-slider',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/article-slider.jpeg?t=1719059650358',
		day : 17
	}, {
		link: '/images-preview',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/images-preview.jpeg?t=1719059651242',
		day : 18
	}, {
		link: '/upload-images',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/upload-images.jpeg?t=1719059648265',
		day : 19
	}, {
		link: '/card-wallet',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/card-wallet.jpeg?t=1719059649161',
		day : 20
	}, {
		link: '/pricing-plans',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/pricing-plans.jpeg?t=1719059650675',
		day : 21
	}, {
		link: '/messages',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/messages.jpeg?t=1719059649971',
		day : 22
	}, {
		link: '/home-page',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/home-page.jpeg?t=1719059649910',
		day : 23
	}, {
		link: '/movie-ticket',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/movie-ticket.jpeg?t=1719059649857',
		day : 24
	}, {
		link: '/meeting-schedule',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/meeting-schedule.jpeg?t=1719059651471',
		day : 25
	}, {
		link: '/job-board',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/job-board.jpeg?t=1719059651338',
		day : 26
	}, {
		link: '/leaderboards',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/leaderboards.jpeg?t=1719059649237',
		day : 27
	}, {
		link: '/playlist',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/playlist.jpeg?t=1719059649135',
		day : 28
	}, {
		link: '/video-player',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/video-player.jpeg?t=1719059651758',
		day : 29
	}, {
		link: '/invoices',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/invoices.jpeg?t=1719059650508',
		day : 30
	}, {
		link: '/dashboard',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/dashboard.jpeg?t=1719059650630',
		day : 31
	}, {
		link: '/newsletter',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/newsletter.jpeg?t=1719059649409',
		day : 32
	},
	{
		link: '/brand-visualizer',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/brand-visualizer.jpeg?t=1719059648487',
		day : 33
	},
	{
		link: '/user-profile',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/user-profile.jpeg?t=1719059650537',
		day : 34
	},
	{
		link: '/rate-us',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/rate-us.jpeg?t=1719059648212',
		day : 35
	},
	{
		link: '/sleep-app',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/sleep-app.jpeg?t=1719059650896',
		day : 36
	},
	{
		link: '/explore-flights',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/explore-flights.jpeg?t=1719059650668',
		day : 37
	},
	{
		link: '/music-festival',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/music-festival.jpeg?t=1719059650893',
		day : 38
	},
	{
		link: '/qr-code-scanner',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/qr-code-scanner.jpeg?t=1719059650894',
		day : 39
	},
	{
		link: '/faq',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/faq.jpeg?t=1719059649639',
		day : 40
	},
	{
		link: '/create-workspace',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/create-workspace.jpeg?t=1719059651256',
		day : 41
	},
	{
		link: '/settings-appearance',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/settings-appearance.jpeg?t=1719059649586',
		day : 42
	},
	{
		link: '/player-profile',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/player-profile.jpeg?t=1719059651766',
		day : 43
	},
	{
		link: '/website-launch',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/website-launch.jpeg?t=1719059652012',
		day : 44
	},
	{
		link: '/hosting-features',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/hosting-features.jpeg?t=1719059651140',
		day : 45
	},
	{
		link: '/customer-list',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/customer-list.jpeg?t=1719059650149',
		day : 46
	},
	{
		link: '/export-file',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/export-file.jpeg?t=1719059649434',
		day : 47
	},
	{
		link: '/markdown-post',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/markdown-post.jpeg?t=1719059648417',
		day : 48
	},
	{
		link: '/app-navigation',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/app-navigation.jpeg?t=1719059648521',
		day : 49
	},
	{
		link: '/friend-request',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/friend-request.jpeg?t=1719059650790',
		day : 50
	},
	{
		link: '/download-app',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/download-app.jpeg?t=1719059650215',
		day : 51
	},
	{
		link: '/language-app',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/language-app.jpeg?t=1719059651620',
		day : 52
	},
	{
		link: '/billing-page',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/billing-page.jpeg?t=1719059651524',
		day : 53
	},
	{
		link: '/article-summary',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/article-summary.jpeg?t=1719059651456',
		day : 54
	},
	{
		link: '/progress-bars',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/progress-bars.jpeg?t=1719059651480',
		day : 55
	},
	{
		link: '/game-profile',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/game-profile.jpeg?t=1719059649296',
		day : 57
	},
	{
		link: '/create-task',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/create-task.jpeg?t=1719059650372',
		day : 58
	},
	{
		link: '/calculate-tip',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/calculate-tip.jpeg?t=1719059651712',
		day : 59
	},
	{
		link: '/code-verification',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/code-verification.jpeg?t=1719059650079',
		day : 60
	},
	{
		link: '/flight-ticket',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/flight-ticket.jpeg?t=1719059649400',
		day : 61
	},
	{
		link: '/testimonials',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/testimonials.jpeg?t=1719059651461',
		day : 62
	},
	{
		link: '/weather-app',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/weather-app.jpeg?t=1719059651308',
		day : 63
	},
	{
		link: '/document-manager',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/document-manager.jpeg?t=1719059650217',
		day : 64
	},
	{
		link: '/interests',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/interests.jpeg?t=1719059650743',
		day : 65
	},
	{
		link: '/navigation-ui',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/navigation-ui.jpeg?t=1719059650254',
		day : 66
	},
	{
		link: '/select-account',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/select-account.jpeg?t=1719059651606',
		day : 67
	},
	{
		link: '/user-satisfaction',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/user-satisfaction.jpeg?t=1719059647486',
		day : 68
	},
].reverse()
</script>

<template>
	<div class="flex items-center justify-center gap-4 p-4 flex-wrap">
		<ChallengeCard v-for="(c, i) in list"
			k
			:key="i"
			:link="c.link"
			:img="c.img"
			:day="c.day"></ChallengeCard>
	</div>
</template>

<style scoped>
</style>
