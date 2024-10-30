import { CkeditorPlugin } from '@ckeditor/ckeditor5-vue';
export default defineNuxtPlugin((nuxt) => {
	nuxt.vueApp.use(CkeditorPlugin);
});
