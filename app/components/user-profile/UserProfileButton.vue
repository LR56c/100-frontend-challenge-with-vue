<script setup lang="ts">
interface UserProfileButtonProps {
	icon ?: string
	label :string
}
defineProps<UserProfileButtonProps>()
</script>

<template>
	<div class="w-full rounded-2xl flex items-center hover:font-medium hover:bg-gray-200 gap-2 p-2">
	  <Icon v-if="icon" :name="icon"/>
		<div>{{ label }}</div>
  </div>
</template>

<style scoped>

</style>
