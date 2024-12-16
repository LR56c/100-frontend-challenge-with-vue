<script setup
	lang="ts">
interface MyOutlineIconProps {
	icon: string
	iconClass?: string
}

const props = defineProps<MyOutlineIconProps>()

const myHoverableElement = templateRef( 'b' )
const isHovered          = useElementHover( myHoverableElement )

const hoverClass = computed( () => {
	if(props.iconClass){
		return props.iconClass
	}
	return isHovered.value ? 'text-white' : 'text-white/40'
} )
</script>

<template>
	<button ref="b"
		:class="[isHovered? 'border-white' : 'border-white/40']"
		class="flex items-center justify-center bg-transparent border rounded-full p-1">
		<Icon size="20"
			:class="[hoverClass]"
			:name="icon"/>
	</button>
</template>

<style scoped>

</style>