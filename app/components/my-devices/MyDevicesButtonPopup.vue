<script setup
	lang="ts">
import {
	PopoverContent,
	PopoverPortal,
	PopoverRoot,
	PopoverTrigger
} from 'radix-vue'

interface MyDevicesButtonPopupProps {
	icon: string
}

defineProps<MyDevicesButtonPopupProps>()
</script>

<template>
	<PopoverRoot>
		<PopoverTrigger class="rounded-full w-[35px] h-[35px] inline-flex items-center justify-center bg-white cursor-default outline-none">
			<button>
			<Icon :name="icon"/>
			</button>
		</PopoverTrigger>
		<PopoverPortal>
			<PopoverContent
				side="bottom"
				:side-offset="5"
				class="rounded-2xl p-2 w-fit flex flex-col bg-white shadow-lg will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade"
			>
				<slot/>
			</PopoverContent>
		</PopoverPortal>
	</PopoverRoot>
</template>

<style scoped>

</style>