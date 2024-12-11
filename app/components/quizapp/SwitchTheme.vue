<script setup
	lang="ts">
import MySwitch from '~/components/shared/MySwitch.vue'
import { useTheme } from '~/components/shared/theme/useTheme'

const theme = useTheme()
const value = ref(theme.isDark)

watch(value, (newValue) => {
	theme.toggleDark()
})

</script>

<template>
<div class="flex gap-1 items-center">
	<Icon :class="value ? 'text-white':'text-black'" name="material-symbols-wb-sunny-outline-rounded"/>
	<my-switch v-model="value" input-class="bg-[#a623f9]"></my-switch>
	<Icon :class="value ? 'text-white':'text-black'" name="material-symbols-light-dark-mode-outline-rounded"/>
</div>
</template>

<style scoped>

</style>