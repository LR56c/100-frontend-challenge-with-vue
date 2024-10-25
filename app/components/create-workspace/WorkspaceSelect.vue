<script setup
	lang="ts">
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/components/ui/select'
import { Label } from '~/components/ui/label'

interface WorkspaceSelectProps {
	label: string
	values: string[]
}

defineProps<WorkspaceSelectProps>()

const value = defineModel<string>( {
	default: ''
} )
</script>

<template v-model="value">
	<div class="w-full flex flex-col gap-2">
		<label class="font-semibold" :for="label">{{ label }}</label>
		<Select :name="label">
			<SelectTrigger class="custom-shadow rounded-2xl border border-gray-200">
				<SelectValue :placeholder="label"/>
			</SelectTrigger>
			<SelectContent class="bg-white rounded-2xl my-2 border-0 custom-shadow">
				<SelectItem
					v-for="item in values"
					:key="item"
					class="data-[state=checked]:bg-gray-200"
					:value="item">
					{{ item }}
				</SelectItem>
			</SelectContent>
		</Select>
	</div>
</template>

<style scoped>
.custom-shadow {
	box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}
</style>
