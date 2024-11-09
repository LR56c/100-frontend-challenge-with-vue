<script setup
	lang="ts">
import {
	computed,
	ref
} from 'vue'
import type { CreateTaskUser } from '~/components/create-task/useCreateTask'
import {
	CommandEmpty,
	CommandGroup,
	CommandItem,
	CommandList
} from '@/components/ui/command'
import {
	TagsInput,
	TagsInputInput,
	TagsInputItem,
	TagsInputItemDelete,
	TagsInputItemText
} from '@/components/ui/tags-input'
import {
	ComboboxAnchor,
	ComboboxContent,
	ComboboxInput,
	ComboboxPortal,
	ComboboxRoot
} from 'radix-vue'

interface CreateTaskMultiInputProps {
	label?: string
}

defineProps<CreateTaskMultiInputProps>()

const data = defineModel<CreateTaskUser[]>( 'data', {
	default: []
} )

const model = defineModel<string[]>( {
	default: []
} )

const modelValue = ref<CreateTaskUser[]>( [] )

const open       = ref( false )

const searchTerm = ref( '' )

const filteredItems = computed<CreateTaskUser[]>( () => data.value.filter( item => !modelValue.value.includes( item ) ))

const removeTag = ( item: CreateTaskUser ) => {
	const index = modelValue.value.indexOf( item )
	if ( index !== -1 ) {
		modelValue.value.splice( index, 1 )
	}
}

watch( modelValue.value, ( value ) => {
	model.value = value.map( item => item.id )
} )
</script>

<template>
	<div class="w-full h-full relative text-[#727272] flex flex-col gap-1">
		<label v-if="label">{{ label }}</label>
		<TagsInput class="px-0 gap-0 w-full border-0 bg-[#2c2c2c] rounded-2xl"
			:model-value="modelValue">
			<div class="flex gap-2 flex-wrap items-center px-3">
				<TagsInputItem v-for="item in modelValue"
					class="border rounded-2xl h-full py-0.5 px-1 bg-[#3e3e3e] text-white"
					:key="item.id"
					:value="item.name">
					<nuxt-img class="w-6 h-6 rounded-full"
						:src="item.avatar"
						:alt="item.name"/>
					<TagsInputItemText/>
					<TagsInputItemDelete @click="removeTag(item)"/>
				</TagsInputItem>
			</div>
			<ComboboxRoot v-model="modelValue"
				v-model:open="open"
				v-model:search-term="searchTerm"
				class="w-full ">
				<ComboboxAnchor as-child>
					<ComboboxInput placeholder="Type person to add"
						as-child>
						<TagsInputInput class="w-full px-3 text-white placeholder:text-[#727272]"
							:class="modelValue.length ? 'mt-2' : ''"
							@keydown.enter.prevent/>
					</ComboboxInput>
				</ComboboxAnchor>
				<ComboboxPortal>
					<ComboboxContent>
						<CommandList
							position="popper"
							class="rounded-2xl text-white w-full bg-[#3e3e3e] mt-2 shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
						>
							<CommandEmpty/>
							<CommandGroup>
								<CommandItem
									v-for="item in filteredItems"
									:key="item.id"
									:value="item.name"
									class="data-[highlighted]:bg-gray-500 rounded-2xl font-bold flex gap-2"
									@select.prevent="(ev) => {
                  if (typeof ev.detail.value === 'string') {
                    searchTerm = ''
                    modelValue.push(item)
                  }
                  if (filteredItems.length === 0) {
                    open = false
                  }
                }"
								>
									<nuxt-img class="w-6 h-6 rounded-full"
										:src="item.avatar"
										:alt="item.name"/>
									<span>{{ item.name }}</span>
								</CommandItem>
							</CommandGroup>
						</CommandList>
					</ComboboxContent>
				</ComboboxPortal>
			</ComboboxRoot>
		</TagsInput>
	</div>
</template>
