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
		link: '/project-roadmap',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/project-roadmap.jpeg?t=1719059651925',
		day : 56
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
		img : 'https://mqzzwg' +
			'avxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/select-account.jpeg?t=1719059651606',
		day : 67
	},
	{
		link: '/user-satisfaction',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/user-satisfaction.jpeg?t=1719059647486',
		day : 68
	},
	{
		link: '/profile-settings',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/profile-settings.jpeg?t=1719059651424',
		day : 69
	},
	{
		link: '/cookies-banner',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/cookies-banner.jpeg?t=1719059650875',
		day : 70
	},
	{
		link: '/email-client',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/email-client.jpeg?t=1719059649144',
		day : 71
	},
	{
		link: '/image-collections',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/image-collections.jpeg?t=1719059650990',
		day : 72
	},
	{
		link: '/push-notification',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/push-notification.jpeg?t=1719059648366',
		day : 73
	},
	{
		link: '/manage-accounts',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/manage-accounts.jpeg?t=1719059651560',
		day : 74
	},
	{
		link: '/add-shot',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/add-shot.jpeg?t=1719059649711',
		day : 75
	},
	{
		link: '/e-book-store',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/e-book-store.jpeg?t=1719059650250',
		day : 76
	},
	{
		link: '/app-integrations',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/app-integrations.jpeg?t=1719059649968',
		day : 77
	},
	{
		link: '/audio-player',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/audio-player.jpeg?t=1719059648953',
		day : 78
	},
	{
		link: '/payment-plan',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/payment-plan.jpeg?t=1719059651563',
		day : 79
	},
	{
		link: '/articles-grid',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/articles-grid.jpeg?t=1719059650871',
		day : 80
	},
	{
		link: '/delivery-details',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/delivery-details.jpeg?t=1719059650923',
		day : 81
	},
	{
		link: '/color-palette',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/color-palette.jpeg?t=1719059648756',
		day : 82
	},
	{
		link: '/social-share',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/socials-share.jpeg?t=1719059651006',
		day : 83
	},
	{
		link: '/buy-a-coffee',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/buy-a-coffee.jpeg?t=1719059649724',
		day : 84
	},
	{
		link: '/customer-reviews',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/customer-reviews.jpeg?t=1719059651764',
		day : 85
	},
	{
		link: '/chatbot',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/chatbot.jpeg?t=1719059650620',
		day : 86
	},
	{
		link: '/charts',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/charts.jpeg?t=1719059651450',
		day : 87
  },
  {
		link: '/fingerprint',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/fingerprint.jpeg?t=1719059651542/storage/v1/render/image/public/challenges_screenshots/design_challenges/chatbot.jpeg?t=1719059650620',
		day : 88
	},
	{
		link: '/voice-call',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/voice-call.jpeg?t=1719059648948',
		day : 89
	},
	{
		link: '/my-devices',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/my-devices.jpeg?t=1719059649903',
		day : 90
	},
	{
		link: '/quizapp',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/quizapp.jpeg?t=1719059651190',
		day : 91
	},
	{
		link: '/search-filters',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/search-filters.jpeg?t=1719059650907',
		day : 92
	},
	{
		link: '/task-manager',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/task-manager.jpeg?t=1719059651442',
		day : 93
	},
	{
		link: '/time-widget',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/time-widget.jpeg?t=1719059650618',
		day : 94
	},
	{
		link: '/404',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/404.jpeg?t=1719059648870',
		day : 95
	},
  {
		link: '/subscribe-card',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/subscribe-card.jpeg?t=1719059650914',
		day : 96
	},
	{
		link: '/design-assets',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/design-assets.jpeg?t=1719059651272',
		day : 97
},
	{
		link: '/voice-recording',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/voice-recording.jpeg?t=1719059648582',
		day : 98
    },
    {
		link: '/columns-card',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/columns-card.jpeg?t=1719059650477',
		day : 99
	},
	{
		link: '/footer',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/footer.jpeg?t=1719059650524',
		day : 100
	},
].reverse()
const customList                 = [
	{
		link : '/calcule-days',
		title: 'Project calcule days'
	}
]
</script>

<template>
	<div class="flex flex-col w-full h-full">
		<div class="flex items-center justify-center gap-4 p-4 flex-wrap">
			<NuxtLink
				v-for="(c,i) in customList"
				:key="i"
				:to="c.link">
				<div class="bg-gray-600 rounded-2xl p-2 flex flex-col items-center justify-center text-white gap-2">
					<span>{{ c.title }}</span>
				</div>
			</NuxtLink>
		</div>
		<div class="flex items-center justify-center gap-4 p-4 flex-wrap">
			<ChallengeCard v-for="(c, i) in list"
				k
				:key="i"
				:link="c.link"
				:img="c.img"
				:day="c.day"></ChallengeCard>
		</div>
	</div>
</template>

<style scoped>
</style>
