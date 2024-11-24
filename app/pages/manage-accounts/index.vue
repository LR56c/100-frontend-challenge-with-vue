<script setup
	lang="ts">
import { useManageAccounts } from '~/components/manage-accounts/useManageAccounts'
import MyIconButtonColored from '~/components/shared/MyIconButtonColored.vue'

const store                       = useManageAccounts()
const { accounts, activeAccount } = storeToRefs( store )

const selectedAccount = ( email: string ) => {
	console.log( 'selected acccount: ', email )
	store.addAccount()
}

const addAccount = () => {
	console.log( 'add account' )
	store.addAccount()
}

const removeAllAccount = () => {
	console.log( 'remove all account' )
	store.removeAll()
}
</script>

<template>
	<div class="w-screen h-screen flex items-center justify-center bg-[#96a6fe]">
		<div class="bg-gray-200 w-full min-h-[600px] max-w-sm rounded-2xl flex flex-col shadow-lg px-4 py-6 items-center gap-4">
			<template v-if="activeAccount">
				<manage-accounts-avatar
					class="max-w-28 max-h-28"
					editable
					:name="activeAccount.name"
					:avatar="activeAccount.avatar"
				></manage-accounts-avatar>
				<div class="flex flex-col gap-1 items-center">
					<span class="text-xl font-semibold">{{ activeAccount.name }}</span>
					<span class="text-gray-500 font-semibold text-sm">{{
							activeAccount.email
						}}</span>
				</div>
				<manage-accounts-button
					type="outline"
					class="w-[60%]"
					text-class="text-center"
					label="Manage Account"
				></manage-accounts-button>
				<manage-accounts-card
					v-for="acc in accounts"
					:key="acc.id"
					:name="acc.name"
					@select-account="selectedAccount"
					:email="acc.email"
				></manage-accounts-card>
				<manage-accounts-button
					class="w-full"
					type="normal"
					icon="iconamoon-exit"
					@click="addAccount"
					label="Add new account">
					<my-icon-button-colored></my-icon-button-colored>
				</manage-accounts-button>
				<manage-accounts-button
					class="w-full text-gray-500 px-7"
					type="normal"
					@click="removeAllAccount"
					icon="iconamoon-exit"
					label="Log out from all accounts"
				></manage-accounts-button>
			</template>
			<template v-else>
				<manage-accounts-button
					class="w-full"
					type="normal"
					icon="iconamoon-exit"
					@click="addAccount"
					label="Add new account">
					<my-icon-button-colored></my-icon-button-colored>
				</manage-accounts-button>
			</template>
			<div class="text-gray-400 text-sm font-semibold">
				<span class="cursor-pointer">Privacy Policy</span> •
				<span class="cursor-pointer">Terms of Service</span>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>