<script setup
	lang="ts">
import CustomerReviewStarsBadge
	from '~/components/customer-reviews/CustomerReviewStarsBadge.vue'
import CustomerReviewStarsBars
	from '~/components/customer-reviews/CustomerReviewStarsBars.vue'
import CustomerReviewStarsLabel
	from '~/components/customer-reviews/CustomerReviewStarsLabel.vue'
import { useCustomerReviews } from '~/components/customer-reviews/useCustomerReviews'

const store = useCustomerReviews()
const { customerReviews } = storeToRefs( store )

</script>

<template>
	<div class="bg-zinc-400 w-screen h-screen flex flex-col items-center justify-center">
		<div v-if="customerReviews" class="bg-white flex flex-col h-fit w-full max-w-lg rounded-2xl shadow-lg p-4 gap-4">
			<span class="text-xl font-semibold">{{ customerReviews.place }}</span>
			<customer-review-stars-label :total="customerReviews.reviewsCount" :average="customerReviews.averageStar"></customer-review-stars-label>
			<div class="flex w-full h-64 gap-4">
				<nuxt-img class="w-full h-full basis-[70%] object-center object-cover rounded-2xl" src="https://images.pexels.com/photos/11495850/pexels-photo-11495850.jpeg?auto=compress&cs=tinysrgb&w=600"/>
				<div class="flex flex-col gap-4 basis-[30%]">
				<nuxt-img class="w-full h-full object-center object-cover rounded-2xl" src="https://images.pexels.com/photos/2433868/pexels-photo-2433868.jpeg?auto=compress&cs=tinysrgb&w=600"/>
				<nuxt-img class="w-full h-full object-center object-cover rounded-2xl" src="https://images.pexels.com/photos/2888679/pexels-photo-2888679.jpeg?auto=compress&cs=tinysrgb&w=600"/>
				</div>
			</div>
			<hr class="w-full border border-black/20"/>
			<span class="text-lg font-semibold text-center">Customers review</span>
			<customer-review-stars-badge :average="customerReviews.averageStar"></customer-review-stars-badge>
			<customer-review-stars-bars :stars="customerReviews.stars" :total="customerReviews.reviewsCount"></customer-review-stars-bars>
			<div class="flex justify-center w-full">
			<customer-reviews-button icon="material-symbols-edit" label="Write Opinion"></customer-reviews-button>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>