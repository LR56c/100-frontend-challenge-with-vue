<script setup
	lang="ts">

import EmailClientSidebar
	from '~/components/email-client/EmailClientSidebar.vue'

const categoryRef = ref('inbox')
const changeCategory = (category : string) => {
	categoryRef.value = category
}
</script>

<template>
	<div class="w-screen h-screen flex items-center justify-center bg-gray-100">
		<div class="bg-[#232323] w-[800px] h-full max-h-[700px] rounded-2xl flex flex-col shadow-lg text-white">
			<div class="w-full flex gap-1 items-center px-4 py-2">
				<Icon size="20" name="mingcute-mail-fill"/>
				<span class="text-xl font-bold">Mailbox</span>
			</div>
			<div class="flex w-full h-full overflow-y-hidden">
				<email-client-sidebar @select-category="changeCategory"
				></email-client-sidebar>
				<email-client-content v-model="categoryRef"
				></email-client-content>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>