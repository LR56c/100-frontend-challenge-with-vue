<script setup
	lang="ts">

const optionStateIndex = ref( 0 )

const selectedMethod = ( method: string ) => {
	if ( method === 'email' ) {
		optionStateIndex.value = 1
	}
}
</script>

<template>
	<div class="bg-gray-100 w-screen h-screen flex flex-col items-center justify-center">
		<SignUpOptions v-if="optionStateIndex === 0"
			@method-selected="selectedMethod"></SignUpOptions>
		<SignUpEmail v-else></SignUpEmail>
	</div>
</template>

<style scoped>

</style>
