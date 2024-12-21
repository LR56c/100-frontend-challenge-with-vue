import { ulid } from 'ulidx'

export type ManageAccounts = {
	id : string
	avatar ?: string
	email : string
	name : string
	username : string
}

export const useManageAccounts = defineStore( 'manage-accounts', () => {

	const accountsDatabase = ref<ManageAccounts[]>([
		{
			id   : ulid(),
			email: 'steven.rogers@gmail.com',
			name: 'Steven Rogers',
			username: 'steven.rogers',
			avatar: 'https://i.pravatar.cc/60?img=2'
		},
		{
			id   : ulid(),
			email: 'mark.ruffalo@gmail.com',
			name: 'Mark Ruffalo',
			username: 'mark.ruffalo',
			avatar: 'https://i.pravatar.cc/60?img=5'
		},
		{
			id   : ulid(),
			email: 'daniel.radcliffe@gmail.com',
			name: 'Daniel Radcliffe',
			username: 'daniel.radcliffe',
			avatar: 'https://i.pravatar.cc/60?img=7'
		}
	])

	const accounts = ref<ManageAccounts[]>()

	const activeAccount = ref<ManageAccounts | undefined>(undefined)

	onMounted( () => {
		activeAccount.value = accountsDatabase.value[0]
		filterAccounts()
	})

	const addAccount = ( ) => {
		activeAccount.value = accountsDatabase.value[0]
		filterAccounts()
	}

	const removeAll = () => {
		accounts.value = []
		activeAccount.value = undefined
	}

	const filterAccounts = () => {
		const tempAccounts: ManageAccounts[] = []
		accountsDatabase.value.forEach( account => {
			if( activeAccount.value && account.id !== activeAccount.value.id ) {
				tempAccounts.push(account)
			}
		})
		accounts.value = tempAccounts
	}

	return {
		activeAccount: readonly(activeAccount),
		accounts: readonly(accounts),
		addAccount,
		removeAll
	}
})