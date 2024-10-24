<script setup
	lang="ts">
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover'
import { PopoverClose } from 'radix-vue'
interface WorkspaceOptionsPopoverProps {
	values : string[]
}
defineProps<WorkspaceOptionsPopoverProps>()

const emit = defineEmits<{
	optionSelected: [string]
}>()
</script>

<template>
	<Popover>
		<PopoverTrigger>
			<button class="w-5 h-5 flex items-center justify-center">
				<Icon class="h-5" size="16" name="material-symbols-keyboard-arrow-down-rounded"/>
			</button>
		</PopoverTrigger>
		<PopoverContent class="flex flex-col w-fit bg-white rounded-2xl border-0 p-0">
			<PopoverClose
				v-for="(item, i) in values"
				:key="item"
				@click="emit('optionSelected', item)"
				:class="[{
					 'rounded-t-2xl' : i === 0,
					 'rounded-b-2xl' : i === values.length - 1
				}]"
				class="text-start w-full py-2 px-4 hover:bg-gray-200 font-semibold">{{ item }}</PopoverClose>
		</PopoverContent>
	</Popover>
</template>

<style scoped>

</style>
