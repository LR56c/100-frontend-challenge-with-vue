<script setup
	lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import * as z from 'zod'
import { useCardWallet } from '~/components/card-wallet/useCardWallet'
import { Button } from '~/components/ui/button'
import {
	FormControl,
	FormField,
	FormItem,
	FormMessage
} from '~/components/ui/form'
import { Input } from '~/components/ui/input'
import { maskCardNumber } from '~/lib/maskCard'

const formSchema = toTypedSchema( z.object( {
	fullName  : z.string()
	             .min( 1 ),
	cardNumber: z.string()
	             .regex( /^\d{4} \d{4} \d{4} \d{4}$/ ),
	expireDate: z.string()
	             .regex( /^(0[1-9]|1[0-2])\/\d{2}$/ ),
	cvcCode   : z.string()
	             .min( 3 )
} ) )

const form = useForm( {
	validationSchema: formSchema
} )

const input = defineModel<string>( {
	default: ''
} )

const onInput = () => {
	let cardNumber = input.value.replace( /\D/g, '' )
	input.value    = cardNumber.match( /.{1,4}/g )
	                           ?.join( ' ' ) || cardNumber
}

const store    = useCardWallet()
const onSubmit = form.handleSubmit( ( values ) => {
	const rawCardNumber = values.cardNumber.split( ' ' )
	                            .join( '' )
	const number        = maskCardNumber( rawCardNumber, '•' )

	if ( number === null ) {
		console.log( 'Card number not exist' )
		return
	}

	const dateSplit = values.expireDate.split( '/' )

	const yearValue = parseInt( dateSplit[1]! )
	const year      = yearValue > 19 ? yearValue + 2000 : yearValue + 1900
	store.addCard( {
		number,
		expire : new Date( year, parseInt( dateSplit[0]! ) - 1 ),
		balance: 0
	} )
	form.resetForm()
	input.value = ''
} )

const router = useRouter()
const navigateBack = () => {
  router.back()
}

</script>

<template>
	<div class="w-screen h-screen justify-center items-center flex flex-col bg-gray-200">
		<div class="bg-white p-4 max-w-xs w-full rounded-2xl flex flex-col h-2/4 shadow-lg">
			<div class="flex items-center gap-4 mb-8">
					<Icon size="20"
						@click="navigateBack"
						class="text-gray-800 cursor-pointer"
						name="material-symbols-arrow-back"/>
				<span class="font-bold text-2xl">Add a card</span>
			</div>
			<form class="flex flex-1 flex-col gap-4 justify-between"
				@submit="onSubmit">
				<FormField v-slot="{ componentField }"
					name="fullName">
					<FormItem>
						<FormControl>
							<Input v-bind="componentField"
								class="rounded-2xl placeholder:text-gray-400 border-gray-400"
								id="name"
								type="text"
								placeholder="Full Name"/>
						</FormControl>
						<FormMessage class="text-red-800"/>
					</FormItem>
				</FormField>
				<FormField v-slot="{ componentField }"
					name="cardNumber">
					<FormItem>
						<FormControl>
							<Input v-bind="componentField"
								class="rounded-2xl placeholder:text-gray-400 border-gray-400"
								id="number"
								type="text"
								maxlength="19"
								v-model="input"
								@input="onInput"
								placeholder="Card Number"/>
						</FormControl>
						<FormMessage class="text-red-800"/>
					</FormItem>
				</FormField>
				<div class="flex flex-1 gap-2">
					<FormField v-slot="{ componentField }"
						name="expireDate">
						<FormItem>
							<FormControl>
								<Input v-bind="componentField"
									class="rounded-2xl placeholder:text-gray-400 border-gray-400"
									id="expire"
									type="text"
									maxlength="5"
									placeholder="Expire MM/YY"/>
							</FormControl>
							<FormMessage class="text-red-800"/>
						</FormItem>
					</FormField>
					<FormField v-slot="{ componentField }"
						name="cvcCode">
						<FormItem>
							<FormControl>
								<Input v-bind="componentField"
									class="rounded-2xl placeholder:text-gray-400 border-gray-400"
									id="code"
									maxlength="3"
									type="text"
									placeholder="CVC Code"/>
							</FormControl>
							<FormMessage class="text-red-800"/>
						</FormItem>
					</FormField>
				</div>
				<Button class="outline-none py-2 w-full bg-gradient-to-r to-purple-900 rounded-2xl from-purple-400 text-white"
					type="submit">
					Add New Card
				</Button>
			</form>

		</div>
	</div>
</template>

<style scoped>

</style>
