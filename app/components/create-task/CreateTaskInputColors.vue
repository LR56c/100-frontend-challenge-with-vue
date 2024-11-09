<script setup
	lang="ts">
import {
	RadioGroupIndicator,
	RadioGroupItem,
	RadioGroupRoot
} from 'radix-vue'

interface CreateTaskInputColorsProps {
	colors: string[]
	label?: string
}

defineProps<CreateTaskInputColorsProps>()

const parseColors = ( colors: string ) => {
	switch ( colors ) {
		case 'green':
			return 'bg-green-500 data-[state=checked]:outline-green-500'
		case 'purple':
			return 'bg-purple-500 data-[state=checked]:outline-purple-500'
		case 'pink':
			return 'bg-pink-500 data-[state=checked]:outline-pink-500'
		case 'orange':
			return 'bg-orange-500 data-[state=checked]:outline-orange-500'
		default:
			return ''
	}
}

const color = defineModel<string>()
</script>

<template>
	<div class="flex text-[#727272] flex-col w-full gap-1">
		<label v-if="label">{{ label }}</label>
		<RadioGroupRoot
			v-model="color"
			class="flex gap-2.5"
			:default-value="color"
			orientation="horizontal"
			aria-label="View density"
		>
			<RadioGroupItem
				v-for="color in colors"
				:key="color"
				:id="color"
				:name="color"
				:value="color"
				:class="[parseColors(color)]"
				class="w-5 h-5 rounded-full text-white border-0 data-[state=checked]:outline data-[state=checked]:outline-1 focus:outline-none outline-none"
			>
				<RadioGroupIndicator
					class="flex items-center justify-center"
				>
					<Icon size="20" class="h-4 w-4 fill-current text-current" name="material-symbols-check-rounded"/>
				</RadioGroupIndicator>
			</RadioGroupItem>
		</RadioGroupRoot>
	</div>
</template>

<style scoped>

</style>