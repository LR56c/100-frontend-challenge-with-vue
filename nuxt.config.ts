// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig( {
	compatibilityDate: '2024-04-03',
	devtools         : { enabled: true },
	future           : {
		compatibilityVersion: 4
	},
	tailwindcss      : {
		configPath: 'tailwind.config.ts'
	},
	shadcn           : {
		prefix      : '',
		componentDir: './components/ui'
	},
	tres             : {
		devtools: true
	},
	modules          : [
		'@nuxt/icon',
		'@pinia/nuxt',
		'@vueuse/nuxt',
		'@nuxtjs/tailwindcss',
		'@vueuse/nuxt',
		'nuxt-swiper',
		'shadcn-nuxt',
		'nuxt-lucide-icons',
		'@tresjs/nuxt',
	]
} )
