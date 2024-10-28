<script setup
	lang="ts">
import {
	Popover,
	PopoverContent,
	PopoverTrigger
} from '@/components/ui/popover'
import { PopoverClose } from 'radix-vue'

export type CustomerTableActionTypes = 'edit' | 'delete'
export type CustomerTableAction = {
	type : CustomerTableActionTypes,
	icon : string,
	label : string
}
interface CustomerTableActionCellProps {
	customerName : string
	values : CustomerTableAction[]
}
defineProps<CustomerTableActionCellProps>()
const emit = defineEmits<{
	optionSelected: [CustomerTableActionTypes]
}>()
</script>

<template>
	<Popover>
		<PopoverTrigger as-child>
			<button class="flex items-center justify-center">
				<Icon name="cil-options-horizontal"/>
			</button>
		</PopoverTrigger>
		<PopoverContent class="bg-white border-0 shadow-lg p-0 rounded-2xl flex flex-col w-fit">
			<PopoverClose
				v-for="(item, i) in values"
				:key="item.label"
				@click="emit('optionSelected', item.type)"
				:class="[{
					 'rounded-t-2xl' : i === 0,
					 'rounded-b-2xl' : i === values.length - 1
				}]"
				class="p-2 flex gap-2 w-full items-center hover:bg-gray-200">
				<Icon :name="item.icon!"/>
				<span>{{ item.label }}</span>
			</PopoverClose>
		</PopoverContent>
	</Popover>
</template>

<style scoped>

</style>
