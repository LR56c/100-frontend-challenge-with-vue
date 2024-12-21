<script setup
	lang="ts">

import MyProgress from '~/components/shared/MyProgress.vue'
const progressValues = [30, 50, 60, 80, 40, 70, 90]
</script>

<template>
	<div class="flex flex-col gap-2">
		<div class="flex w-full justify-between items-center">
			<div class="flex gap-1 items-center">
				<span class="text-2xl font-bold">854</span>
				<Icon class="text-[#609709]"
					size="25"
					name="material-symbols-fitbit-arrow-upward"/>
				<span class="text-[#609709]">25 upward</span>
			</div>
			<charts-icon-button icon="mi-options-vertical"></charts-icon-button>
		</div>
		<div class="flex space-x-2">
			<div
				v-for="(value, index) in progressValues"
				:key="index"
				class="relative w-6 h-24"
			>
				<my-progress class-indicator="bg-[#609709]" class="absolute -rotate-90 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-24 bg-gray-100" :model-value="value"></my-progress>
			</div>
		</div>
		<span class="text-xl font-bold">Vertical bar</span>
		<span class="line-clamp-2 w-60">Credere sensim ducunt ad bassus pars.Hercle, indictio mirabilis!.Pol.Nutrixs tolerare in piscinam!Adiurators cantare!</span>
	</div>
</template>

<style scoped>

</style>