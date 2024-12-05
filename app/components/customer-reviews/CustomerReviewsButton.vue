<script setup
	lang="ts">
interface CustomerReviewsButtonProps {
	icon: string
	label : string
}

defineProps<CustomerReviewsButtonProps>()
</script>

<template>
<button class="w-fit px-8 flex items-center justify-center py-1 border rounded-2xl gap-2 border-black/50">
	<Icon :name="icon"/>
	<span>{{ label }}</span>
</button>
</template>

<style scoped>

</style>