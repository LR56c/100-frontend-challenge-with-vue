<script setup
	lang="ts">
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { toTypedSchema } from '@vee-validate/zod'
import { toast } from 'vue-sonner'
import * as z from 'zod'
import { X } from 'lucide-vue-next'
import { DialogClose } from 'radix-vue'
import {
	type Customer,
	useCustomerList
} from '~/components/customer-list/useCustomerList'

const store      = useCustomerList()
const customer   = defineModel<Customer | undefined>( 'customer', {
	default: undefined
} )
const open       = defineModel( 'open', {
	default: false
} )
const formSchema = toTypedSchema( z.object( {
	name   : z.string(),
	company: z.string(),
	phone  : z.string()
} ) )

const form = useForm( {
	validationSchema: formSchema
} )

watch( () => customer.value, ( newValue ) => {
	if ( !newValue ) {
		return
	}
	form.setValues( {
		name   : customer.value?.name,
		company: customer.value?.company,
		phone  : customer.value?.phone
	} )
} )

const onSubmit = form.handleSubmit( ( values ) => {
	toast( `Customer '${values.name}' updated` )
	const modifiedCustomer: Customer = {
		...customer.value!,
		...values
	}
	store.mofidyCustomer( customer.value!.name, modifiedCustomer )
	open.value = false
	customer.value = undefined
} )
</script>

<template>
	<Dialog :open>
		<DialogContent
			class="bg-white border-0 rounded-2xl"
			@interact-outside="open = false"
		>
			<DialogClose
				class="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
				@click="open = false"
			>
				<X class="w-4 h-4"/>
				<span class="sr-only">Close</span>
			</DialogClose>
			<DialogHeader>
				<DialogTitle>Edit customer</DialogTitle>
			</DialogHeader>
			<form v-if="customer"
				class="flex flex-col gap-4"
				@submit.prevent="onSubmit">
				<FormField v-slot="{ componentField }"
					name="name">
					<FormItem>
						<FormLabel>Name</FormLabel>
						<FormControl>
							<Input class="rounded" type="text"
								:default-value="customer.name"
								v-bind="componentField"/>
						</FormControl>
						<FormMessage/>
					</FormItem>
				</FormField>
				<FormField v-slot="{ componentField }"
					name="company">
					<FormItem>
						<FormLabel>Company</FormLabel>
						<FormControl>
							<Input class="rounded" type="text"
								:default-value="customer.company"
								v-bind="componentField"/>
						</FormControl>
						<FormMessage/>
					</FormItem>
				</FormField>
				<FormField v-slot="{ componentField }"
					name="phone">
					<FormItem>
						<FormLabel>Phone</FormLabel>
						<FormControl>
							<Input class="rounded" type="text"
								:default-value="customer.phone"
								v-bind="componentField"/>
						</FormControl>
						<FormMessage/>
					</FormItem>
				</FormField>
				<DialogFooter>
					<Button class="rounded" variant="outline" type="submit">
						Save changes
					</Button>
				</DialogFooter>
			</form>
		</DialogContent>
	</Dialog>
</template>

<style scoped>

</style>
