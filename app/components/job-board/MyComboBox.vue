<script setup
	lang="ts">
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList
} from '@/components/ui/command'

import {
	Popover,
	PopoverContent,
	PopoverTrigger
} from '@/components/ui/popover'
import {
	Check,
	ChevronsUpDown
} from 'lucide-vue-next'
import {
	type HTMLAttributes,
	ref
} from 'vue'
import { cn } from '~/lib/utils'

export type MyComboBoxType = {
	value: string
}

interface MyComboBoxProps {
	icon?: string
	values: MyComboBoxType[]
	placeholder: string
	class?: HTMLAttributes['class']
}

const props           = defineProps<MyComboBoxProps>()
const emit            = defineEmits<{
	select: [ string ]
}>()
const value           = ref( '' )
const placeholerLower = props.placeholder.toLowerCase()
const open            = ref( false )

const onSelect = ( event ?: any ) => {
	emit( 'select', value.value )
}
</script>

<template>
	<Popover v-model:open="open">
		<PopoverTrigger as-child>
			<button
				role="combobox"
				:aria-expanded="open"
				:class="cn('min-w-32 items-center flex gap-1 capitalize', props.class)"
			>
				<Icon v-if="icon"
					:name="icon"
					class="basis-[15%] text-gray-400"/>
				<span
					:class="[value.length > 10 ? 'text-xs' : 'text-sm']"
					class="flex flex-1 items-center h-5 text-gray-400 line-clamp-1">
					{{
						value
							? values.find( ( v ) => v.value === value )?.value
							: placeholder
					}}
				</span>
				<ChevronsUpDown class="basis-[10%] ml-2 h-4 w-4 shrink-0 opacity-50"/>
			</button>
		</PopoverTrigger>
		<PopoverContent class="w-[200px] p-0 rounded-2xl bg-white">
			<Command>
				<CommandInput class="h-9"
					:placeholder="`Search ${placeholerLower}...`"/>
				<CommandEmpty>No {{ placeholerLower }} found.</CommandEmpty>
				<CommandList>
					<CommandGroup>
						<CommandItem
							v-for="v in values"
							:key="v.value"
							:value="v.value"
							@select="(ev) => {
                if (typeof ev.detail.value === 'string') {
                  value = ev.detail.value
                  onSelect()
                }
                open = false
              }"
							class="capitalize"
						>
							{{ v.value }}
							<Check
								:class="cn(
                  'ml-auto h-4 w-4',
                  value === v.value ? 'opacity-100' : 'opacity-0',
                )"
							/>
						</CommandItem>
					</CommandGroup>
				</CommandList>
			</Command>
		</PopoverContent>
	</Popover>
</template>
