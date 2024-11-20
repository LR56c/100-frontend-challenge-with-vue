<script setup
	lang="ts">
import CookiesBannerCustomize
	from '~/components/cookies-banner/CookiesBannerCustomize.vue'
import CookiesBannerInfo
	from '~/components/cookies-banner/CookiesBannerInfo.vue'

const customize = ref( false )
const show      = ref( true )

const savePreferences = () => {
	show.value = false
}
</script>

<template>
	<div class="w-screen h-screen flex items-center justify-center bg-[#d8d8d8]">
		<transition>
			<div v-if="show"
				class="relative w-[450px] h-fit bg-gray-100 rounded-2xl px-4 p-8 flex flex-col items-center justify-between shadow-lg">
				<div class="absolute -top-[8%] left-1/2 -translate-x-1/2 flex items-center justify-center">
					<Icon size="50"
						name="unjs-cookie-es"/>
				</div>
				<transition mode="out-in"
					name="slide-fade">
					<cookies-banner-info v-if="!customize"
						@customize="customize = true"
						@accept="savePreferences"
					></cookies-banner-info>
					<cookies-banner-customize v-else
						@save="savePreferences"
						@back="customize = false"
					></cookies-banner-customize>
				</transition>
			</div>
		</transition>
	</div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
	transition: opacity 0.4s ease;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
}

.slide-fade-enter-active {
	transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
	transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
	transform: translateX(-20px);
	opacity: 0;
}
</style>