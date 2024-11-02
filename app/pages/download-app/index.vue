<script setup
	lang="ts">

import DownloadAppStoreCard
	from '~/components/download-app/DownloadAppStoreCard.vue'
</script>

<template>
	<div class="bg-[#eff1f3] w-screen h-screen flex gap-8 items-center justify-center p-8">
		<div class="relative w-80 h-64">
				<div class="gradient-border-mask flex items-center justify-center rounded-2xl p-2">
					<div class="w-full gradient-border-mask flex items-center justify-center rounded-2xl p-2">
						<div class="my-gradient w-80 h-64 rounded-2xl"></div>
					</div>
				</div>
			<img class="absolute -top-24 left-9 h-[500px] drop-shadow-2xl"
				src="/exercice-app.png"/>
		</div>
		<div class="flex flex-col items-center gap-4 w-full max-w-lg">
			<div class="text-6xl font-bold">Download</div>
			<div class="text-2xl font-bold">Our New App</div>
			<div class="text-center text-sm font-semibold">Track your progress,
				customize workouts, get nutrition guidance, and stay motivated, all in
				one place- Whether you're hitting the gym, running outdoors, or working
				out at home, we've got you covered.
			</div>
			<div class="flex justify-center w-full gap-4">
				<download-app-store-card
					label="App Store"
					icon="lineicons-apple-brand"
					link="https://www.flaticon.es/iconos-gratis/macintosh"
					title="macintosh iconos">
					>
				</download-app-store-card>
				<download-app-store-card
					label="Google Play"
					img="/google-play.png"
					link="https://www.flaticon.es/iconos-gratis/google-play"
					title="google play iconos"
				></download-app-store-card>
			</div>
		</div>
	</div>
</template>

<style scoped>
.my-gradient {
	background: linear-gradient(
		135deg,
		rgb(244, 161, 41) 0%,
		rgb(142, 16, 130) 100%
	)
}

.gradient-border-mask {
	position: relative;
}

.gradient-border-mask::before {
	content: "";
	position: absolute;
	inset: 0;
	border-radius: 16px;
	border: 2px solid transparent;
	background: linear-gradient(
		135deg,
		rgb(244, 161, 41) 0%,
		rgb(142, 16, 130) 100%
	) border-box;
	mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
	mask-composite: exclude;
}
</style>