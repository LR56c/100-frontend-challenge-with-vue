<script setup
	lang="ts">
import {
	type Email,
	useEmailClient
} from '~/components/email-client/useEmailClient'
import MyCheckbox from '~/components/shared/MyCheckbox.vue'

interface EmailClientCardProps {
	email: Email
}

const props = defineProps<EmailClientCardProps>()

const store      = useEmailClient()
const toggleStar = () => {
	store.toggleStar( props.email.id )
	console.log( 'starred' )
}
const selected   = ref( false )
</script>

<template>
	<div
		:class="[{
		'bg-zinc-600/40' : selected,
		 'border-l-4 border-[#506eec]' :!email.isRead
	}]"
		class="relative flex w-full h-fit p-2 gap-2 rounded">
		<email-client-checkbox class="mt-0.5" v-model="selected"></email-client-checkbox>
		<div class="flex flex-col w-full gap-2 h-fit">
			<div class="flex w-full justify-between">
				<span>{{ email.sender }}</span>
				<span class="text-sm text-zinc-400">{{
						useDateFormat( email.date, 'd MMM' )
					}} • {{
						useDateFormat( email.date, 'h:mm A' )
					}}</span>
			</div>
			<div class="flex w-full h-fit">
				<div class="flex flex-col gap-2 basis-[90%]">
					<span class="text-lg font-semibold">{{ email.subject }}</span>
					<span class="text-sm line-clamp-3">{{ email.body }}</span>
				</div>
				<div class="self-end flex justify-end basis-[10%]">
					<button @click="toggleStar">
						<Icon class="text-yellow-400"
							v-if="email.isStarred"
							size="30"
							name="ic-round-star-rate"/>
						<Icon v-else
							size="30"
							name="ic-round-star-outline"/>
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>