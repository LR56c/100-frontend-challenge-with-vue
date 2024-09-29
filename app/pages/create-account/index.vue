<script setup
	lang="ts">

import CreateAccountInput from '~/components/CreateAccountInput.vue'
</script>

<template>
	<div class="relative w-screen h-screen">
		<div class="z-10 absolute flex w-full h-screen items-center">
			<div class="h-full flex w-full basis-[60%] justify-center items-center">
				<form class="flex flex-col p-8 rounded-2xl w-[75%] h-[50%] bg-white gap-4">
					<div class="uppercase font-bold text-gray-400">Start for free</div>
					<div class="font-bold text-4xl mb-4">Create new account</div>
					<div class="flex w-full gap-4">
						<CreateAccountInput
							icon="ic-round-contacts"
							type="text"
							label="First Name"
						></CreateAccountInput>
						<CreateAccountInput
							icon="ic-round-contacts"
							type="text"
							label="Last Name"
						></CreateAccountInput>
					</div>
					<CreateAccountInput
						icon="ic-baseline-email"
						type="text"
						label="Email"
					></CreateAccountInput>
					<CreateAccountInput
						type="password"
						label="Password"
					></CreateAccountInput>
					<div>
					<span class="text-gray-400 font-bold">
						Already have an account?
					</span>
						<NuxtLink to="/"
							class="text-blue-600 font-bold">
							Sign In
						</NuxtLink>
					</div>
					<div class="h-full"></div>
					<button class="bg-blue-600 w-full rounded-full shadow-md shadow-indigo-500 text-white py-2"
						type="submit">
						Create account
					</button>
				</form>
			</div>
		</div>
		<spline-viewer class="w-screen h-screen"
			url="https://prod.spline.design/uxEyws6yJWpT-Oef/scene.splinecode"></spline-viewer>
	</div>
</template>

<style scoped>

</style>
