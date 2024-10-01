export default defineNuxtPlugin(() => {
		const script = document.createElement('script');
		script.src = 'https://unpkg.com/@splinetool/viewer/build/spline-viewer.js';
		script.type = 'module';
		document.body.appendChild(script);
});
