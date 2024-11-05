<script setup
	lang="ts">
import {
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectItemIndicator,
	SelectItemText,
	SelectPortal,
	SelectRoot,
	SelectTrigger,
	SelectValue,
	SelectViewport
} from 'radix-vue'
import type { SelectorType } from '~/pages/billing-page/index.vue'

interface BillingPageSelectorDropdownStyleProps {
	items: Map<string, SelectorType>
	initial: string
}

defineProps<BillingPageSelectorDropdownStyleProps>()

const itemSelected = defineModel<string | undefined>( undefined )
</script>

<template>
	<SelectRoot :default-value="initial"
		v-model="itemSelected">
		<SelectTrigger class="w-40 flex items-center rounded-2xl leading-none h-[35px] gap-[5px] bg-gray-100 outline-none">
			<Icon name="radix-icons:chevron-down"
				class="h-3.5 w-3.5"/>
			<SelectValue :placeholder="initial"/>
		</SelectTrigger>
		<SelectPortal>
			<SelectContent
				side="bottom"
				class="mt-8 bg-gray-100 rounded-2xl shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade z-[100]"
				:side-offset="5">
				<SelectViewport class="p-0">
					<SelectGroup class="flex flex-col">
						<SelectItem v-for="([key,item],i) in items" :key="item.label"
							:class="[
								{ 'bg-indigo-700 text-white': itemSelected === key },
								{ 'hover:bg-gray-300': itemSelected !== key },
								{ 'rounded-t-2xl': i === 0 },
								{ 'rounded-b-2xl': i === items.size - 1 },
							]"
							class=" px-2 py-5 leading-none flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none"
							:value="item.label">
							<SelectItemIndicator class="absolute left-0 w-[25px] inline-flex items-center justify-center">
								<Icon name="radix-icons-check"/>
							</SelectItemIndicator>
							<SelectItemText>
								{{ item.label }}
							</SelectItemText>
						</SelectItem>
					</SelectGroup>
				</SelectViewport>
			</SelectContent>
		</SelectPortal>
	</SelectRoot>
</template>

<style scoped>

</style>