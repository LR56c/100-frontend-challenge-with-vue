<script setup
	lang="ts">
const icons = [
	'material-symbols-account-circle',
	'material-symbols-home-rounded',
	'uil-file-copy-alt',
]
const indexSelected = ref(1)
</script>

<template>
<div class="flex justify-between w-full my-shadow rounded-b-2xl">
	<language-app-bottom-navigation-button v-for="(icon, i) in icons"
		:key="icon"
		:data-selected="i === indexSelected"
		:data-disabled="i !== indexSelected"
		:class="{
			'rounded-bl-2xl': i === 0,
			'rounded-br-2xl': i === icons.length - 1
		}"
		:icon="icon"></language-app-bottom-navigation-button>
</div>
</template>

<style scoped>
.my-shadow{
	box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1);
}
</style>