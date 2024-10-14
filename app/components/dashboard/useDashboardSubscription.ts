import { useDashboardUser } from '~/components/dashboard/useDashboardUser'

export const useDashboardSubscription = defineStore( 'dashboard-subscription',
	() => {
		const userStore   = useDashboardUser()
		const subcription = ref( 0 )

		onMounted( () => {

			if ( userStore.user ) {
				subcription.value = 2
			}
		} )

		return {
			subcription
		}
	} )
