<script setup
	lang="ts">
import {
	AccordionContent,
	AccordionHeader,
	AccordionItem,
	AccordionRoot,
	AccordionTrigger
} from 'radix-vue'

type CookiesItem = {
	id: string
	value: boolean
	title: string
	content: string
	blocked: boolean
}

const accordionItems = ref<CookiesItem[]>( [
	{
		id     : 'item-1',
		value  : true,
		blocked: true,
		title  : 'Necessary',
		content: 'These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms. You can set your browser to block or alert you about these cookies, but some parts of the site will not then work. These cookies do not store any personally identifiable information.'
	},
	{
		id     : 'item-2',
		value  : false,
		blocked: false,
		title  : 'Analytics & performance',
		content: 'These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site. All information these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies we will not know when you have visited our site, and will not be able to monitor its performance.'
	},
	{
		id     : 'item-3',
		value  : false,
		blocked: false,
		title  : 'Marketing',
		content: 'These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites. They do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising.'
	}
] )

const modelValue = ref<string>( '' )

const emit = defineEmits<{
	save: [ void ]
	back: [ void ]
}>()

const expandFirst = () => {
	modelValue.value = accordionItems.value[0]!.id
}

const addExpand = ( id: string ) => {
	modelValue.value = modelValue.value === id ? '' : id
}

const savePreferences = () => {
	emit( 'save' )
}

const backButton = () => {
	emit( 'back' )
}
</script>

<template>
	<div class="h-full flex gap-4 flex-col items-center justify-between">
		<div class="grid grid-cols-5 grid-rows-1 w-full">
			<button @click="backButton"
				class="col-span-1 flex items-center">
				<Icon size="20"
					name="material-symbols-keyboard-backspace-rounded"/>
			</button>
			<span class="font-bold text-lg col-span-3">Customise your preferences</span>
		</div>
		<AccordionRoot
			:modelValue
			class="w-full rounded-md"
			type="single"
			:collapsible="true"
		>
			<template
				v-for="item in accordionItems"
				:key="item.id"
			>
				<AccordionItem
					class="mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 focus-within:outline-none"
					:value="item.id"
				>
					<AccordionHeader class="flex">
						<AccordionTrigger @click="addExpand(item.id)"
							class="flex h-[45px] flex-1 gap-2 cursor-default items-center justify-between px-5 text-[15px] leading-none outline-none group">
							<Icon
								name="radix-icons:chevron-down"
								class="text-green10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
								aria-label="Expand/Collapse"
							/>
							<cookies-banner-check-input :label="item.title"
								:blocked="item.blocked"
								v-model="item.value"></cookies-banner-check-input>
						</AccordionTrigger>
					</AccordionHeader>
					<AccordionContent class="h-20 overflow-y-scroll data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp text-[15px]">
						<div class="px-5 text-sm">
							{{ item.content }}
						</div>
					</AccordionContent>
				</AccordionItem>
			</template>
		</AccordionRoot>
		<div class="w-full flex gap-4">
			<cookies-banner-button label="Expand Details"
				@click="expandFirst"
				type="outline"></cookies-banner-button>
			<cookies-banner-button label="Save preferences"
				@click="savePreferences"
				type="normal"></cookies-banner-button>
		</div>
	</div>
</template>

<style scoped>

</style>