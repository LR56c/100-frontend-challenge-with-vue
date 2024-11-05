<script setup
	lang="ts">
interface BillingPagePaymentCardProps {
	value : string
}

defineProps<BillingPagePaymentCardProps>()
const el = useTemplateRef( 'item' )
const selected = ref(false)
useMutationObserver( el, ( mutations ) => {
	if ( mutations[0]) {
		const element = mutations[0].target as HTMLElement
		selected.value = element.dataset.selected === 'true'
	}
}, {
	attributes     : true,
	attributeFilter: [ 'data-selected' ]
} )
</script>

<template>
	<div ref="item" class="cursor-pointer bg-zinc-200 border border-zinc-300 data-[selected=true]:bg-blue-100 data-[selected=true]:border-blue-300 relative flex  rounded-2xl p-3 text-black justify-center items-center w-52 h-[100px] gap-2 shrink-0">
		<div v-if="selected" class="absolute w-5 h-5 bg-blue-400 rounded-full -top-2 -right-2 flex items-center justify-center">
			<Icon class="text-white"
				name="material-symbols-check-rounded"/>
		</div>
		<div class="bg-black flex items-center justify-center p-1 rounded">
		<Icon name="logos-mastercard"/>
		</div>
		<div>{{ value }}</div>
	</div>
</template>

<style scoped>

</style>