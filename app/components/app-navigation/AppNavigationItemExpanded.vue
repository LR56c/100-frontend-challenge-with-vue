<script setup lang="ts">
interface AppNavigationItemExpandedProps {
	label: string
}
defineProps<AppNavigationItemExpandedProps>()

const expanded = ref( true )
const el = useTemplateRef( 'item' )
useMutationObserver( el, ( mutations ) => {
	if ( mutations[0]) {
		const element = mutations[0].target as HTMLElement
		expanded.value = element.dataset.expanded === 'true'
	}
}, {
	attributes     : true,
	attributeFilter: [ 'data-expanded' ]
} )
</script>

<template>
	<div ref="item" class="flex py-1 pl-2 px-2 items-center justify-start rounded outline-none hover:bg-gray-200/20 data-[selected=true]:bg-[#5200ff]">
		<slot name="primary"/>
		<slot v-if="expanded" name="secondary">
			<div class="pl-2 flex font-semibold gap-1">
				<span>{{ label }}</span>
			</div>
		</slot>
	</div>
</template>

<style scoped>

</style>
