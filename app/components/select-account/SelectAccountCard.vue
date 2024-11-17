<script setup
	lang="ts">
import SelectAccoundIcon
	from '~/components/select-account/SelectAccoundIcon.vue'
import type { SelectAccountUser } from '~/components/select-account/useSelectAccount'

interface SelectAccountCardProps {
	user : SelectAccountUser
}

const props = defineProps<SelectAccountCardProps>()
const emit = defineEmits<{
	editCard   : [SelectAccountUser]
	deleteCard : [SelectAccountUser]
}>()

const editCard = () => {
	emit('editCard', props.user)
}

const deleteCard = () => {
	emit('deleteCard', props.user)
}
</script>

<template>
<div class="cursor-pointer relative p-2 hover:bg-zinc-500 items-center rounded flex flex-col gap-2 w-52 h-60 rounded">
	<span class="absolute top-[10%] right-[10%] flex gap-2">
		<select-accound-icon @click.stop="editCard" icon="material-symbols-edit"></select-accound-icon>
		<select-accound-icon @click.stop="deleteCard" icon="material-symbols:delete"></select-accound-icon>
	</span>
	<img class="w-full rounded h-48 object-center object-cover" :src="user.avatar"/>
	<span>{{ user.name }}</span>
</div>
</template>

<style scoped>

</style>