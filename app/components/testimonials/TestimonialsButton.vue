<script setup
	lang="ts">
interface TestimonialsButtonProps {
	icon : string
}

defineProps<TestimonialsButtonProps>()
</script>

<template>
<button class="text-white rounded w-10 h-10 flex items-center justify-center hover:bg-gray-500 bg-[#54545e]">
	<Icon class="w-4 h-4" :name="icon"/>
</button>
</template>

<style scoped>

</style>