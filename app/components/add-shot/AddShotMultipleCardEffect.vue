<script setup
	lang="ts">
interface AddShotMultipleCardEffectProps {
	avatar: string
}

defineProps<AddShotMultipleCardEffectProps>()

const COUNT = 2

const height =  96  + (8 * COUNT)
</script>

<template>
	<div class="w-32 relative"
	:style="{ height: `${height}px`}">
		<div class="absolute left-0 w-32 h-24 rounded-2xl bg-gray-100 custom-shadow"
			v-for="n in COUNT"
			:key="n"
			:class="[`top-${COUNT * n - 2}`]"></div>
		<img class="absolute left-0 w-32 h-24 rounded-2xl custom-shadow object-cover object-center" :src="avatar"
		:class="[`top-${2 * (COUNT + 1) -2}`]"/>
	</div>
</template>

<style scoped>
.custom-shadow {
	box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}
</style>