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
	<template v-if="heartStatus">
		<Icon size="20"
			class="text-red-500 cursor-pointer"
			@click="toggleLike(false)"
			name="ic-baseline-favorite"/>
	</template>
	<template v-else>
		<Icon size="20"
			class="cursor-pointer"
			@click="toggleLike(true)"
			name="ic-baseline-favorite-border"/>
	</template>
</template>

<style scoped>

</style>
