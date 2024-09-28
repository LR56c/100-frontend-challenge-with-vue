import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify';

export default defineNuxtPlugin((nuxt) => {
	if (process.client) {
		nuxt.vueApp.use( Vue3Toastify,
			{
				autoClose: 1000,
				// ...
			} as ToastContainerOptions)
	}
});
