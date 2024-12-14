<script setup
	lang="ts">

import FourOFourButton from '~/components/404/FourOFourButton.vue'
</script>

<template>
	<div class="bg-white w-screen h-screen flex flex-col">
		<nav class="bg-[#f7f7f7] flex w-full justify-between px-12 items-center py-4">
			<span class="text-xl font-bold">DataPulse</span>
			<div class="flex items-center">
					<four-o-four-button label="Home" type="ghost"></four-o-four-button>
					<four-o-four-button label="About Us" type="ghost"></four-o-four-button>
					<four-o-four-button label="Our Teams" type="ghost"></four-o-four-button>
					<four-o-four-button label="Blog" type="ghost"></four-o-four-button>
					<four-o-four-button label="Support" type="ghost"></four-o-four-button>
			</div>
			<div class="flex">
					<four-o-four-button label="Sign In" type="ghost"></four-o-four-button>
					<four-o-four-button class="text-white bg-[#4baa66]" label="Sign Up" type="outline"></four-o-four-button>
			</div>
		</nav>
		<div class="flex h-full justify-between items-center p-8 gap-8">
			<nuxt-img class="w-80 basis-[50%]"
				src="/404.jpg"/>
			<div class="flex flex-col basis-[50%] gap-8 px-8">
				<span class="text-5xl font-bold">Hmm, looks like you've wandered off the digital path</span>
				<span class="text-lg">In the labyrinth of cyberspace, even the most experienced travelers can stumble upon dead ends. Take a moment to reorient yourself or return to the homepage to chart a new course.</span>
				<div class="flex gap-8">
					<four-o-four-button class="text-white bg-[#4baa66]" label="Back to Home" type="outline"></four-o-four-button>
					<four-o-four-button class="text-black bg-[#d5f8e4]" label="Visit Help Center" type="outline"></four-o-four-button>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>