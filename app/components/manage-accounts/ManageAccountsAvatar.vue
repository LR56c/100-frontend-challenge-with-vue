<script setup
	lang="ts">
import { cn } from '~/lib/utils'

interface ManageAccountsAvatarProps {
	name: string
	avatar?: string
	editable: boolean
}

const { editable = false, ...props } = defineProps<ManageAccountsAvatarProps>()

const emit = defineEmits<{
	edit: [ void ]
}>()

const edit = () => {
	emit( 'edit' )
}

const firstNameLetter = computed( () => props.name.charAt( 0 )
                                             .toUpperCase() )

const colors      = [
	'bg-red-500',
	'bg-green-500',
	'bg-blue-500',
	'bg-yellow-500',
	'bg-indigo-500',
	'bg-purple-500',
	'bg-pink-500',
	'bg-gray-500',
	'bg-teal-500',
	'bg-orange-500'
]
const randomColor = computed( () => {
	return colors[Math.floor( Math.random() * colors.length )]
} )
</script>

<template>
		<div v-if="avatar" class="relative w-full h-full flex items-center justify-center rounded-full border-2 border-blue-500 p-0.5">
			<button @click="edit" class="absolute bottom-0 right-0 flex items-center justify-center bg-gray-300 rounded-full w-8 h-8">
				<Icon size="20" name="material-symbols-light-photo-camera-rounded"/>
			</button>
			<img class="object-center object-cover w-full h-full rounded-full" :src="avatar"/>
		</div>
		<div v-else :class="cn('text-lg rounded-full w-8 h-8 flex items-center justify-center font-bold text-white',randomColor)">
			{{ firstNameLetter }}
		</div>
</template>

<style scoped>

</style>