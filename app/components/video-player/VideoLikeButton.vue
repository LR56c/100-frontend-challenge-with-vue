<script setup
	lang="ts">
const heartStatus = defineModel( 'like', {
	default: false
} )

const toggleLike = (value : boolean) =>{
	heartStatus.value = value
	emit('changeLike', value)
}

const emit = defineEmits<{
	changeLike : [boolean]
}>()
</script>

<template>
	<button
		:class="[heartStatus ? 'bg-purple-500' : 'bg-gray-600']"
		class="flex p-2 gap-1 items-center justify-center rounded-2xl group">
	<template v-if="heartStatus">
		<Icon size="20"
			class="text-white"
			@click="toggleLike(false)"
			name="ic-baseline-favorite"/>
	</template>
	<template v-else>
		<Icon size="20"
			class="group-hover:text-purple-500"
			@click="toggleLike(true)"
			name="ic-baseline-favorite-border"/>
	</template>
		<span>Like</span>
	</button>
</template>

<style scoped>

</style>
