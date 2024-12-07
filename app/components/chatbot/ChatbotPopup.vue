<script setup
	lang="ts">
import {
	PopoverContent,
	PopoverPortal,
	PopoverRoot,
	PopoverTrigger
} from 'radix-vue'
import { useChatbot } from '~/components/chatbot/useChatbot'

const openModal = ref( false )
const myHoverableElement = templateRef( 'b' )
const isHovered = useElementHover( myHoverableElement )

const store = useChatbot()
const { chat } = storeToRefs( store )
</script>

<template>
	<PopoverRoot :open="openModal">
		<PopoverTrigger>
			<button ref="b"
				@click="openModal = !openModal"
				:class="[isHovered ? 'w-48 justify-between px-2' : 'w-16 justify-center']"
				class="relative transition-all h-16 rounded-2xl bg-white flex items-center p-1 shadow-lg ">
				<span
					:class="[isHovered ? '-right-[5%]' : '-right-[10%]']"
					class="absolute -top-[10%] w-5 h-5 bg-red-600 text-white rounded-full flex items-center justify-center text-sm">2</span>
				<Transition v-show="isHovered"
					enter-active-class="duration-500 ease-in"
					enter-from-class="opacity-0"
				>
					<span
						class="text-xs">Hey there I am on A.I chatbot, lets talk</span>
				</Transition>
				<Icon
					class="w-20 h-10 text-[#336afe]"
					name="teenyicons-chatbot-solid"/>
			</button>
		</PopoverTrigger>
		<PopoverPortal>
			<PopoverContent
				@interactOutside.prevent
				align="end"
				sticky="always"
				side="top"
				class="flex flex-col shadow-lg rounded overflow-clip h-fit w-96 bg-white will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade"
				:side-offset="20">
				<div class="flex w-full items-center justify-between bg-[#163689] py-2 px-4">
					<div class="flex gap-2 items-center">
						<div class="h-8 w-8 bg-white rounded-full p-1 flex items-center justify-center">
							<Icon
								size="20"
								class="text-[#336afe]"
								name="teenyicons-chatbot-solid"/>
						</div>
						<span class="text-white text-lg font-semibold">
							{{ chat.name }}
						</span>
					</div>
					<div class="flex items-center gap-2">
						<button class="flex items-center"
							@click="openModal = false">
							<Icon
								size="20"
								class="text-white"
								name="material-symbols-keyboard-arrow-down-rounded"/>
						</button>
						<button class="flex items-center">
							<Icon
								size="20"
								class="text-white"
								name="mi-options-vertical"/>
						</button>
					</div>
				</div>
					<chatbot-chat></chatbot-chat>
				<hr class="w-full border border-blue-400"/>
				<chatbot-input class="h-12"></chatbot-input>
			</PopoverContent>
		</PopoverPortal>
	</PopoverRoot>
</template>

<style scoped>
</style>