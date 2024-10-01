<script setup
	lang="ts">

import FloatingInput from '~/components/sign-up/FloatingInput.vue'
import SocialSignInButton from '~/components/sign-up/SocialSignInButton.vue'
</script>

<template>
	<div class="max-w-sm w-full flex flex-col rounded-2xl bg-white shadow-lg py-6 px-4 items-center gap-4">
		<div class="font-bold text-2xl">Sign Up</div>
		<div>Join us now! Sign up to kick-start your journey</div>
		<FloatingInput
			label="Name"
			type="text"
		></FloatingInput>
		<FloatingInput
			label="Email"
			type="email"
		></FloatingInput>
		<FloatingInput
			icon=""
			label="Password"
			type="password"
		></FloatingInput>
		<button
			class="bg-black flex items-center w-full text-white rounded-2xl p-2 justify-center">
			Sign Up
		</button>
		<div>Already have an account?
			<span class="font-bold text-blue-600">Log In</span>
		</div>
		<div class="inline-flex items-center justify-center w-full">
			<hr class="w-64 h-px my-2 bg-gray-200 border-0 dark:bg-gray-700">
			<span class="absolute px-3 text-gray-900 -translate-x-1/2 bg-white left-1/2">or</span>
		</div>
		<social-sign-in-button method="google"></social-sign-in-button>
	</div>
</template>

<style scoped>

</style>
