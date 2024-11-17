<script setup
	lang="ts">
interface SelectAccoundIconProps {
	icon : string
}

defineProps<SelectAccoundIconProps>()
</script>

<template>
<button class="bg-zinc-800/60 hover:bg-zinc-400/60 p-0.5 rounded flex items-center justify-center">
	<Icon class="text-zinc-400" :name="icon"/>
</button>
</template>

<style scoped>

</style>