<script setup
	lang="ts">

const months = [ 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', ]
const chartData = [
	{ purple: 80, yellow: 60 },
	{ purple: 70, yellow: 50 },
	{ purple: 60, yellow: 40 },
	{ purple: 80, yellow: 50 },
	{ purple: 30, yellow: 20 },
]
</script>

<template>
	<div class="flex flex-col gap-4">
		<span class="text-xl font-bold">Stacked column chart</span>
		<div class="w-full flex flex-wrap">
			<charts-badge v-for="(month, index) in months" :key="index" :label="month"
			></charts-badge>
		</div>
		<div class="flex space-x-4">
			<div
				v-for="(group, index) in chartData"
				:key="index"
				class="flex h-32 items-end"
			>
				<div
					:style="{ height: group.purple + '%', width: '20px' }"
					class="bg-[#ae38fe]"
				></div>
				<div class="h-2"></div>
				<div
					:style="{ height: group.yellow + '%', width: '20px' }"
					class="bg-[#fdc42d]"
				></div>
			</div>
		</div>
		<div class="flex w-full gap-4">
			<charts-label-badge color="h-3 w-6 rounded-full bg-[#fdc42d]"
				label="Apple"></charts-label-badge>
			<charts-label-badge color="h-3 w-6 rounded-full bg-[#ae38fe]"
				label="Banana"></charts-label-badge>
		</div>
		<span class="w-60 text-gray-500">Ubi est superbus exemplar?Vigil, orgia, et byssus.</span>
	</div>
</template>

<style scoped>

</style>