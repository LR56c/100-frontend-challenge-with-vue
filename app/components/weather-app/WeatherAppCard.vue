<script setup
	lang="ts">
interface WeatherAppCardProps {
	icon: string
	temperature: number
	day: string
}

const props = defineProps<WeatherAppCardProps>()
const dayFormat = computed(() => {
	return useDateFormat(props.day, 'dddd').value
})
</script>

<template>
	<div class="mt-4 relative flex flex-col gap-2">
		<div class="absolute -top-[15%] left-1/2 -translate-x-1/2">
			<Icon size="40" :name="icon"/>
		</div>
		<div class="w-[75px] h-20 text-center pb-4 flex items-end justify-center rounded-2xl p-2 font-bold text-2xl bg-indigo-100">
			{{ temperature }}°
		</div>
		<span class="text-sm text-center font-semibold">{{ dayFormat }}</span>
	</div>
</template>

<style scoped>

</style>