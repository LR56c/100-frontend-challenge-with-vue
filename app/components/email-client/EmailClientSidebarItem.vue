<script setup
	lang="ts">
import type { EmailCategory } from '~/components/email-client/useEmailClient'

interface EmailClientSidebarItemProps {
	item : EmailCategory
}

defineProps<EmailClientSidebarItemProps>()
</script>

<template>
	<button class="flex justify-between items-center w-full px-4 py-1 hover:bg-zinc-500 rounded-2xl">
		<div class="flex gap-2 items-center">
			<Icon size="20"
				:name="item.icon"/>
			<span class="font-semibold">{{ item.title }}</span>
			<slot/>
		</div>
		<span class="text-sm">{{ item.count }}</span>
	</button>
</template>

<style scoped>

</style>