<script setup
	lang="ts">
import EmailClientButton from '~/components/email-client/EmailClientButton.vue'
import { useEmailClient } from '~/components/email-client/useEmailClient'
const store = useEmailClient()
const emit = defineEmits<{
	selectCategory : [string]
}>()
</script>

<template>
	<div class="flex flex-col w-[400px] gap-4 px-4">
		<email-client-button
			class="cursor-not-allowed"
			disabled
			icon="material-symbols-add-2-rounded"
			label="Compose Mail"></email-client-button>
		<email-client-sidebar-item
			v-for="[key,item] in store.categories"
			:key="key"
			:item="item"
			@click="emit('selectCategory',key)"
		>
			<template v-if="key ==='spam'" #default>
				<div class="w-4 h-4 text-sm rounded bg-red-600 flex items-center justify-center">{{ store.spamNotification }}</div>
			</template>
		</email-client-sidebar-item>
	</div>
</template>

<style scoped>

</style>