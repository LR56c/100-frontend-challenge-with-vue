<script setup
	lang="ts">
interface BillingPageIconButtonProps {
	icon : string
}

defineProps<BillingPageIconButtonProps>()
</script>

<template>
<button class="flex items-center justify-center w-5 h-5 border border-zinc-400 rounded">
	<Icon :name="icon"/>
</button>
</template>

<style scoped>

</style>