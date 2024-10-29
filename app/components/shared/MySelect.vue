<script setup
	lang="ts">

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '~/components/ui/select'
import { cn } from '~/lib/utils'

interface MySelectProps {
	label: string
	placeholder: string
	values: string[]
	buttonClass ?: string
}
const props = defineProps<MySelectProps>()
const valueSelected = defineModel<string | undefined>( {
	default: undefined
} )
</script>

<template>
	<Select v-model="valueSelected" :name="label">
		<SelectTrigger :class="cn(valueSelected?.length ? 'dark:border-gray-200 border-gray-800' : 'dark:border-gray-800 border-gray-200', 'border',props.buttonClass)"
			class="custom-shadow rounded-2xl dark:text-white">
			<SelectValue :placeholder/>
		</SelectTrigger>
		<SelectContent class="bg-white rounded-2xl my-2 border-0 custom-shadow">
			<SelectItem
				v-for="item in values"
				:key="item"
				class="data-[state=checked]:bg-gray-200"
				:value="item">
				{{ item }}
			</SelectItem>
		</SelectContent>
	</Select>
</template>

<style scoped>

</style>
