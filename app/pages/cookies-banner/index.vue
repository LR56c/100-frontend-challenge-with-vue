<script setup
	lang="ts">
import CookiesBannerCustomize
	from '~/components/cookies-banner/CookiesBannerCustomize.vue'
import CookiesBannerInfo
	from '~/components/cookies-banner/CookiesBannerInfo.vue'

const customize = ref(false)
const show = ref(true)

const savePreferences = () => {
	show.value = false
}
</script>

<template>
	<div class="w-screen h-screen flex items-center justify-center bg-[#d8d8d8]">
		<div v-if="show" class="relative w-[450px] h-fit bg-gray-100 rounded-2xl px-4 p-8 flex flex-col items-center justify-between shadow-lg">
			<div class="absolute -top-[8%] left-1/2 -translate-x-1/2 flex items-center justify-center">
				<Icon size="50" name="unjs-cookie-es"/>
			</div>
			<cookies-banner-info v-if="!customize"
				@customize="customize = true"
				@accept="savePreferences"
			></cookies-banner-info>
			<cookies-banner-customize v-else
				@save="savePreferences"
				@back="customize = false"
			></cookies-banner-customize>
		</div>
	</div>
</template>

<style scoped>

</style>