<script setup
	lang="ts">
import { useTestimonials } from '~/components/testimonials/useTestimonials'

const store = useTestimonials()
</script>

<template>
	<div class="w-screen h-screen bg-[#363642] flex flex-col gap-12 items-center justify-center text-white">
		<div class="flex flex-col items-center">
			<div class="text-2xl font-bold">Don't take our word fot it.</div>
			<div class="text-2xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 text-transparent bg-clip-text">
				Trust our customers
			</div>
		</div>
		<div class="w-full max-w-[880px]">
			<testimonials-carrousel :items="store.testimonials"></testimonials-carrousel>
		</div>
	</div>
</template>

<style scoped>

</style>