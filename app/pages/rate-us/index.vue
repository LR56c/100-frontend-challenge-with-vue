<script setup lang="ts">

const rateSelected = ref<number | undefined>(undefined)

const rateChanged = (rate: number) => {
	rateSelected.value = rate
}
</script>

<template>
	<div class="bg-orange-500 w-screen h-screen flex items-center justify-center">
		<div class="bg-white rounded-2xl flex flex-col px-4 py-6 justify-center items-center gap-4 shadow-lg">
	<div class="text-2xl font-bold">Rate Us!</div>
	<div class="text-gray-500">Tell us about your experience</div>
			<div class="flex gap-2">
				<rate-us-emoticon-feedback
					v-for="i in [0,1,2,3,4]"
					@rate-selected="rateChanged($event)"
					:key="i"
					:rate="i"
					:selected="rateSelected === i"
				></rate-us-emoticon-feedback>
			</div>
			<button class="text-orange-600 font-medium">Skip</button>
		</div>
	</div>
</template>

<style scoped>

</style>
