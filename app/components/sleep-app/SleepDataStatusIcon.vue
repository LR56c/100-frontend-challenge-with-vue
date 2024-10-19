<script setup
	lang="ts">
interface SleepDataStatusIconProps {
	status: string
}

const props = defineProps<SleepDataStatusIconProps>()

const icon = computed( () => {
	switch ( props.status ) {
		case 'normal':
			return 'ic-round-check-circle'
		case 'exelent':
			return 'ri-sparkling-fill'
		default:
			return ''
	}
} )

const colorIcon = computed( () => {
	switch ( props.status ) {
		case 'normal':
			return 'text-green-500'
		case 'exelent':
			return 'text-yellow-500'
		default:
			return ''
	}
} )
</script>

<template>
	<div
		:class="[colorIcon]"
		class="flex items-center gap-2">
		<template v-if="icon.length">
			<Icon :name="icon"/>
			<span class="capitalize text-sm">{{ status }}</span>
		</template>
	</div>
</template>

<style scoped>

</style>
