<script setup
	lang="ts">

const modal = ref( false )

const handlePin = () => {
	modal.value = true
}
</script>

<template>
	<div class="w-screen h-screen flex items-center justify-center bg-[#040c1f]">
		<div class="relative max-w-sm pb-4 min-h-[500px] w-full bg-[#373d49] rounded-2xl shadow-lg flex flex-col gap-4 items-center text-white justify-between">
			<div v-if="modal" class="z-10 absolute rounded-t-2xl inset-0 bg-black/30 backdrop-blur-sm"></div>
			<div v-if="modal"
				class="z-20 absolute rounded-2xl -bottom-10 left-1/2 w-full bg-white -translate-x-1/2">
				<fingerprint-modal></fingerprint-modal>
			</div>
			<div class="flex flex-col w-full items-center p-4 bg-[#4d9e28] justify-center rounded-2xl">
				<span class="font-bold text-xl">Welcome Back</span>
				<span>Scan your fingerprint to login</span>
			</div>
			<div class="flex flex-col gap-2 items-center">
				<div class="flex bg-white items-center justify-center rounded-2xl p-2">
					<Icon size="80" class="text-[#57933c]"
						name="material-symbols-fingerprint"/>
				</div>
				<span>Touch the fingerprint reader</span>
			</div>
			<button @click="handlePin"
				class="flex items-center justify-center rounded-2xl border py-1 px-8">
				Use Pin this time
			</button>
		</div>
	</div>
</template>

<style scoped>

</style>