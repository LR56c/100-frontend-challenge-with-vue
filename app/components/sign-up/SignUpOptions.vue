<script setup
	lang="ts">

import SocialSignInButton from '~/components/sign-up/SocialSignInButton.vue'

const methodsOptions = [
	'google',
	'email'
]

const emit = defineEmits<{
	methodSelected : [ string ]
}>()
</script>

<template>
	<div class="max-w-sm w-full flex flex-col rounded-2xl bg-white shadow-lg p-4 items-center gap-4">
		<div class="font-bold text-2xl">Sign Up</div>
		<div>Join us now! Sign up to kick-start your journey</div>
		<social-sign-in-button v-for="method in methodsOptions"
			@click="emit('methodSelected', method)"
			:method="method"
		></social-sign-in-button>
		<div>Already have an account?
			<span class="font-bold text-blue-600">Log In</span>
		</div>
	</div>
</template>

<style scoped>

</style>
