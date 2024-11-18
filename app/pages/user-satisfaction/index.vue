<script setup
	lang="ts">

import { toast } from 'vue-sonner'
import UserSatisfactionButton
	from '~/components/user-satisfaction/UserSatisfactionButton.vue'
import UserSatisfactionInputArea
	from '~/components/user-satisfaction/UserSatisfactionInputArea.vue'
import UserSatisfactionRateList
	from '~/components/user-satisfaction/UserSatisfactionRateList.vue'

const opinion = ref<string | undefined>(undefined)
const rate = ref<number | undefined>(undefined)

const disableSendButton = computed(() => !rate.value)

const rateSelect = () => {
	toast(`You selected ${rate.value}, with length opinion of ${opinion.value?.length ?? 0}`, {})
}

const cancelSelect = () => {
	opinion.value = undefined
	rate.value = undefined
}
</script>

<template>
	<div class="w-screen h-screen flex items-center justify-center bg-[#d8d8d8]">
	<div class="w-[480px] h-[452px] bg-[#161616] rounded-2xl px-6 py-4 flex flex-col justify-between shadow-lg">
		<span class="text-white font-bold text-2xl">How satisfied are you with our customer service?</span>
		<user-satisfaction-rate-list
			v-model="rate"
		></user-satisfaction-rate-list>
		<user-satisfaction-input-area
			v-model="opinion"
			placeholder="Your opinion..."
			label="Do you have any thought to you'd like to share?"
		></user-satisfaction-input-area>
		<div class="flex w-full gap-4">
			<user-satisfaction-button @click="cancelSelect" class="bg-gray-600" label="CANCEL"></user-satisfaction-button>
			<user-satisfaction-button :disabled="disableSendButton" @click="rateSelect" class="bg-blue-600" label="SEND"></user-satisfaction-button>
		</div>
	</div>
</div>
</template>

<style scoped>

</style>