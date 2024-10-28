<script setup
	lang="ts">
import { Label } from '@/components/ui/label'
import {
	RadioGroup,
	RadioGroupItem
} from '@/components/ui/radio-group'

export type MyRadio = {
	name: string,
	enabled: boolean
}

interface MyRadioButtonsProps {
	values : MyRadio[]
}

const props = defineProps<MyRadioButtonsProps>()
const value = defineModel()
</script>

<template>
	<RadioGroup class="w-full flex" v-model="value">
		<div v-for="(option, i) in props.values"
			:key="option.name"
			class="flex items-center space-x-2">
			<RadioGroupItem :disabled="!option.enabled" class="data-[state=checked]:text-indigo-700" :id="option.name" :value="option.name" />
			<Label :class="[value === option.name ? 'text-indigo-700' : 'text-black', option.enabled ? '' : 'text-gray-400']"
				class="text-xs font-normal" :for="option.name">{{ option.name }}</Label>
		</div>
	</RadioGroup>
</template>

<style scoped>

</style>
