<script setup
	lang="ts">

type ColorType = 'cyan' | 'orange' | 'blue' | 'green'

interface NotificationAvatarProps {
	img: string
	color: ColorType
}

const props = defineProps<NotificationAvatarProps>()

const colorTypeMap = new Map<ColorType, string>( [
	[ 'cyan', 'bg-cyan-400' ],
	[ 'orange', 'bg-orange-400' ],
	[ 'blue', 'bg-blue-500' ],
	[ 'green', 'bg-green-500' ]
] )

const selectedColor = colorTypeMap.get( props.color )
</script>

<template>
	<div class="relative">
		<img class="rounded-full object-cover object-center"
			:src="img"
			alt=""/>
		<div
			:class="selectedColor"
			class="absolute top-0 -right-1 rounded-full w-5 h-5 flex justify-center items-center text-white pb-0.5">
			<slot/>
		</div>
	</div>
</template>

<style scoped>

</style>
