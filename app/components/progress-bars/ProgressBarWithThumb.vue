<script setup
	lang="ts">
import {
	SliderRange,
	SliderRoot,
	SliderThumb,
	SliderTrack
} from 'radix-vue'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger
} from '@/components/ui/tooltip'

const progressValue = defineModel( {
	default: 0
} )
</script>

<template>
	<div class="w-full flex items-center justify-center">
		<SliderRoot
			:min="0"
			:max="100"
			:model-value="[progressValue]"
			class="relative flex items-center select-none touch-none w-full h-5"
		>
			<SliderTrack
				class="relative bg-gray-200 grow rounded-full h-2">
				<SliderRange
					class="absolute bg-[#3734ff] rounded-full h-full"/>
			</SliderTrack>
			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger as-child>
						<SliderThumb
							class="block w-5 h-5 bg-white rounded-full focus:outline-none border-[#3734ff] border-2"
							aria-label="Volume"
						/>
					</TooltipTrigger>
					<TooltipContent class="border-0 bg-black rounded-2xl text-white font-semibold text-sm">
						<span>{{ progressValue }}%</span>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>

		</SliderRoot>
	</div>
</template>

<style scoped>

</style>