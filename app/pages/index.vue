<script setup
	lang="ts">
import ChallengeCard, { type ChallengeCardProps } from '~/components/ChallengeCard.vue'

const list = ref<ChallengeCardProps[]>( [
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

		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/recipe.jpeg?t=1719059652463',
		day : 5
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
	},{
		link: '/fur-friends',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/fur-friends.jpeg?t=1719059648095',
		day : 16
	},{
		link: '/article-slider',
		img : 'https://mqzzwgavxmdmqvivwgez.supabase.co/storage/v1/render/image/public/challenges_screenshots/design_challenges/article-slider.jpeg?t=1719059650358',
		day : 17
	}
] )

</script>

<template>
	<div class="flex items-center justify-center gap-4 p-4 flex-wrap">
		<ChallengeCard v-for="(c, i) in list"
			:link="c.link"
			:img="c.img"
			:day="i + 1"></ChallengeCard>
	</div>
</template>

<style scoped>
</style>
