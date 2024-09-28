<script setup
	lang="ts">

export interface ButtonIcon {
	icon: string
	text: string
	link: string
}

interface Props {
	name: string
	image: string
	specialist: string
	sideNav: ButtonIcon[][]
	bottomNav: ButtonIcon[]
}

const { image = 'https://placehold.co/50x50' } = defineProps<Props>()

const selected = ref( 3 )
</script>

<template>
	<div class="p-4 flex flex-col w-96 h-screen bg-white rounded-3xl overflow-hidden shadow-lg">
		<div class="flex my-4 gap-4">
			<img :src="image"/>
			<div class="flex flex-col">
				<div class="font-bold">{{ name }}</div>
				<div class="text-sm">{{ specialist }}</div>
			</div>
		</div>
		<div v-for="sectionNav in sideNav">
			<hr/>
			<div v-for="nav in sectionNav">
				<NuxtLink :to="nav.link"
					class="flex items-center gap-4 py-2">
					<div class="flex justify-center items-center bg-[#e7e8fc] rounded-lg px-1.5 py-1">
						<Icon size="20"
							:name="nav.icon"/>
					</div>
					<div class="w-full font-bold">{{ nav.text }}</div>
					<div class="w-full"></div>
					<Icon :size="4*10"
						name="i-dashicons-arrow-right-alt2"/>

				</NuxtLink>
			</div>
		</div>
		<div class="h-full"></div>
		<div class="flex justify-around items-center">
			<div v-for="(bottom, i) in bottomNav">
				<NuxtLink :to="bottom.link">
					<div :class="{'flex justify-center p-1 items-center bg-indigo-50 rounded-full': i === selected,}">
						<Icon size="20"
							:class="[i === selected ? 'text-indigo-400' : 'text-gray-200']"
							:name="bottom.icon"/>
					</div>
				</NuxtLink>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>
