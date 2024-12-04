<script setup
	lang="ts">
import {
	PopoverArrow,
	PopoverClose,
	PopoverContent,
	PopoverPortal,
	PopoverRoot,
	PopoverTrigger
} from 'radix-vue'
import SocialShareCopyInput
	from '~/components/socials-share/SocialShareCopyInput.vue'

interface SocialSharePopupProps {
	side: 'top' | 'right' | 'bottom' | 'left',
	compact?: boolean
	icon: string
}

const icons = [
	{
		label: 'Google+',
		icon : 'logos-google-plus'
	},
	{
		label: 'Facebook',
		icon : 'logos-facebook'
	},
	{
		label: 'Instagram',
		icon : 'skill-icons-instagram'
	},
	{
		label: 'Pinterest',
		icon : 'logos-pinterest'
	},
	{
		label: 'Linkedin',
		icon : 'devicon-linkedin'
	}
]

defineProps<SocialSharePopupProps>()
</script>

<template>
	<PopoverRoot>
		<PopoverTrigger
			class="rounded-full w-8 h-8 inline-flex items-center justify-center text-grass11 bg-gray-100 cursor-default outline-none"
			aria-label="Update dimensions"
		>
			<Icon class="text-gray-400"
				:name="icon"/>
		</PopoverTrigger>
		<PopoverPortal>
			<PopoverContent
				:side
				:side-offset="5"
				class="rounded-2xl p-4 w-fit bg-white shadow-lg will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade"
			>
				<div class="flex flex-col gap-2">
					<div :class="[compact ? 'flex-col gap-4':'gap-3']"
						class="flex">
						<button class="flex gap-2" v-for="(i,index) in icons" :key="i.label">
							<Icon :name="i.icon" size="20"/>
							<hr v-if="!compact" v-show="index !== icons.length -1" class="border border-black/20 h-6"/>
							<span v-else class="uppercase text-gray-400 text-sm">{{ i.label }}</span>
						</button>
						<social-share-copy-input v-if="compact" icon="system-uicons-chain" link="https//:www.share-link.com/4753se34rfswa6"></social-share-copy-input>
					</div>
					<template v-if="!compact">
						<span class="text-sm">or copy this link</span>
						<social-share-copy-input link="https//:www.share-link.com/4753se34rfswa6"></social-share-copy-input>
					</template>
				</div>
				<PopoverArrow class="fill-white"/>
			</PopoverContent>
		</PopoverPortal>
	</PopoverRoot>
</template>

<style scoped>

</style>