<script setup
	lang="ts">
import type { CustomerType } from '~/components/customer-list/useCustomerList'
import { Badge } from '~/components/ui/badge'

interface CustomerTableStatusCellProps {
	status : CustomerType
}
defineProps<CustomerTableStatusCellProps>()
const parseStatusClass = ( status: CustomerType ) => {
	switch( status ) {
		case 'active':
			return 'bg-green-200 text-green-700'
		case 'inactive':
			return 'bg-red-200 text-red-700'
	}
}
</script>

<template>
<Badge class="capitalize" :class="[parseStatusClass(status)]">
	{{ status }}
</Badge>
</template>

<style scoped>

</style>
