<script setup
	lang="ts">
import type { TimeRemainder } from '~/components/task-manager/useTaskManager'

interface TaskManagerBadgeProps {
	time: TimeRemainder
}

defineProps<TaskManagerBadgeProps>()
</script>

<template>
<button class="text-white bg-[#2c2c2c] data-[selected=true]:bg-[#3fc143] rounded-2xl px-2 py-1 text-sm">
	{{ time.label }}
</button>
</template>

<style scoped>

</style>