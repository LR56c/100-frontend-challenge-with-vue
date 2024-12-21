<script setup
	lang="ts">
const chartData = [
	{ blue: 70, pink: 30 },
	{ blue: 60, pink: 40 },
	{ blue: 50, pink: 50 },
	{ blue: 40, pink: 60 },
	{ blue: 50, pink: 50 },
	{ blue: 60, pink: 40 },
	{ blue: 80, pink: 20 }
]
</script>

<template>
	<div class="flex flex-col items-center gap-4">
		<div class="flex w-full justify-between items-center">
			<div class="flex flex-col">
				<span class="font-bold text-xl">Vertical bar</span>
				<span class="text-sm text-gray-500">Statics of the month</span>
			</div>
			<charts-icon-button icon="mi-options-vertical"></charts-icon-button>
		</div>
		<div class="flex w-full gap-4">
			<charts-label-badge color="h-3 w-6 rounded-full bg-[#274afe]"
				label="Data one"></charts-label-badge>
			<charts-label-badge color="h-3 w-6 rounded-full bg-[#ff3799]"
				label="Data two"></charts-label-badge>
		</div>
		<div class="relative flex items-end space-x-4">
			<div
				class="absolute top-[61%] -translate-y-1/2 w-full h-0.5 bg-gray-200"
			></div>
			<div
				v-for="(values, index) in chartData"
				:key="index"
				class="w-6 h-52 flex flex-col items-center">
				<div class="relative min-h-32 w-full flex flex-col items-end justify-end">
					<div
						class="absolute left-1/2 top-0 h-full w-0.5 bg-gray-200"
					></div>
					<div
						:style="{ height: values.blue + '%', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }"
						class="absolute bottom-0 left-1/2 -translate-x-1/2 w-full bg-[#274afe]"
					></div>
				</div>
				<div class="relative min-h-32 w-full flex flex-col items-start justify-start">
					<div
						:style="{ height: values.pink + '%', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px' }"
						class="w-full bg-[#ff3799]"
					></div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>