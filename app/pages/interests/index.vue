<script setup
	lang="ts">
import { useInterests } from '~/components/interests/useInterests'

const store             = useInterests()
const MIN_SELECT        = 4
const selectedInterests = ref( new Map<string, string>() )
const interestSelected  = ( name: string ) => {
	if ( selectedInterests.value.has( name ) ) {
		selectedInterests.value.delete( name )
	}
	else {
		selectedInterests.value.set( name, name )
	}
}
const completedStep     = computed( () => {
	return Math.floor(
		( selectedInterests.value.size / MIN_SELECT ) * MIN_SELECT )
} )
const progressString    = computed( () => {
	const progressValue = completedStep.value * 360 / MIN_SELECT
	return {
		background: `conic-gradient(#3734ff ${ progressValue }deg, #e0e0e0 0deg)`
	}
} )
const buttonDisabled = computed(() => {
	return selectedInterests.value.size < MIN_SELECT
})
</script>

<template>
	<div class="w-screen h-screen flex items-center justify-center bg-[#436bff]">
		<div class="relative p-2 w-full h-[500px] max-w-xs flex flex-col shadow-lg rounded-2xl bg-gray-100 justify-between">
			<div class="flex w-full items-center gap-2">
				<div>
					<div class="flex items-center justify-center relative rounded-full w-20 h-20 progress-circle"
						:style="progressString">
						<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-100 w-16 h-16 rounded-full text-sm flex items-center justify-center">
						<span class="font-semibold">{{ completedStep }} of {{
								MIN_SELECT
							}}</span>
						</div>
					</div>
				</div>
				<div class="w-full flex flex-col justify-center">
					<span class="font-bold text-lg">What is your interests?</span>
					<span class="text-xs font-semibold text-gray-400">Choose at least 4 interests</span>
				</div>
			</div>
			<div class="w-full h-fit flex flex-wrap gap-1">
				<interests-badge v-for="(i) in store.list"
					class="my-1"
					@click="interestSelected(i.name)"
					:key="i.name"
					:data="i"
				></interests-badge>
			</div>
			<button
				@click="console.log('saved click')"
				:disabled="buttonDisabled"
				class="bg-[#3734ff] disabled:opacity-50 cursor-default disabled:cursor-not-allowed h-fit flex justify-center font-semibold items-center py-2 w-full text-white rounded-2xl">
				Save
			</button>
		</div>
	</div>
</template>

<style scoped>

</style>