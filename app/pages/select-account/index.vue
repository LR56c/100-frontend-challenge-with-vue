<script setup
	lang="ts">

import SelectAccountAddCard
	from '~/components/select-account/SelectAccountAddCard.vue'
import {
	type SelectAccountUser,
	useSelectAccount
} from '~/components/select-account/useSelectAccount'

const store = useSelectAccount()

const addCard = () => {
	console.log( 'add card' )
}

const editCard = ( user: SelectAccountUser ) => {
	console.log( 'edit card', user )
}

const deleteCard = ( user: SelectAccountUser ) => {
	console.log( 'delete card', user )
}

const selectCard = ( user: SelectAccountUser ) => {
	console.log( 'select card', user )
}

const manageProfileClick = () => {
	console.log( 'manage profile click' )
}
</script>

<template>
	<div class="w-screen h-screen flex flex-col items-center justify-center bg-[#212121] text-white gap-8">
		<span class="text-4xl">Who's watching?</span>
		<div class="relative w-full h-fit flex gap-4 items-center justify-center">
			<select-account-card v-for="account in store.users"
				@edit-card="editCard"
				@delete-card="deleteCard"
				@click="selectCard(account)"
				:key="account.id"
				:user="account"
			></select-account-card>
			<select-account-add-card @click="addCard"></select-account-add-card>
		</div>
		<button @click="manageProfileClick"
			class="hover:bg-zinc-700 border border-zinc-400/75 text-zinc-400/75 flex items-center justify-center py-2 w-48 rounded-2xl">
			MANAGE PROFILES
		</button>
	</div>
</template>

<style scoped>

</style>