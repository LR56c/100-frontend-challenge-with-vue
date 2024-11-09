<script setup
	lang="ts">
import {
	SelectContent,
	SelectItem,
	SelectItemText,
	SelectPortal,
	SelectRoot,
	SelectScrollDownButton,
	SelectScrollUpButton,
	SelectTrigger,
	SelectValue,
	SelectViewport
} from 'radix-vue'
import type { CreateTaskPriority } from '~/components/create-task/useCreateTask'

interface CreateTaskInputSelectProps {
	label?: string
}

defineProps<CreateTaskInputSelectProps>()

const piorities = defineModel<CreateTaskPriority[]>( 'values', {
	default: []
} )

const prioritySelected = defineModel<string | undefined>({
	default: undefined
})

const priorityValueSelected = computed(()=> piorities.value.find( item => item.value === prioritySelected.value ) )
</script>

<template>
	<div class="w-40 h-fit relative text-[#727272] flex flex-col gap-1">
		<label v-if="label">{{ label }}</label>
		<SelectRoot
			v-model="prioritySelected">
			<SelectTrigger
				class="inline-flex w-full text-white items-center justify-between rounded-2xl px-[15px] text-[13px] leading-none h-[35px] gap-[5px] bg-[#2c2c2c] data-[placeholder]:text-[#727272] outline-none"
				aria-label="Customise options">
				<div class="flex items-center gap-2">
				<Icon v-if="priorityValueSelected" size="16" :name="priorityValueSelected.icon"/>
				<SelectValue placeholder="Select a priority"/>
				</div>
				<Icon name="radix-icons-chevron-down" class="h-3.5 w-3.5 text-white"/>
			</SelectTrigger>
			<SelectPortal>
				<SelectContent
					class="w-fit rounded-2xl text-white bg-[#212121] shadow-lg will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade z-[100]"
					:side-offset="5">
					<SelectScrollUpButton class="flex items-center justify-center h-[25px] text-white cursor-default">
						<Icon name="radix-icons-chevron-up"/>
					</SelectScrollUpButton>
					<SelectViewport class="flex flex-col justify-between p-2 gap-2">
						<SelectItem v-for="(option, index) in piorities" :key="index"
							class="text-sm w-32 p-2 leading-none outline-none rounded-2xl gap-2 flex items-center h-8 relative select-none data-[disabled]:pointer-events-none"
							:class="[option.value === prioritySelected ? 'bg-gray-500' : 'hover:bg-[#3e3e3e]']"
							:value="option.value">
							<Icon size="16" :name="option.icon"/>
							<SelectItemText>{{ option.value }}</SelectItemText>
						</SelectItem>
					</SelectViewport>
					<SelectScrollDownButton class="flex items-center justify-center h-[25px] text-white cursor-default">
						<Icon name="radix-icons-chevron-down"/>
					</SelectScrollDownButton>
				</SelectContent>
			</SelectPortal>
		</SelectRoot>
	</div>
</template>

<style scoped>

</style>