<script setup
	lang="ts">
interface UserSatisfactionRateCardProps {
	rate: number
}

defineProps<UserSatisfactionRateCardProps>()
</script>

<template>
<button class="transition-all data-[selected=true]:w-20 data-[selected=true]:h-20 data-[selected=true]:text-3xl duration-200 w-16 h-16 flex items-center justify-center rounded-2xl text-white font-bold text-xl p-4">
	{{ rate }}
</button>
</template>

<style scoped>

</style>