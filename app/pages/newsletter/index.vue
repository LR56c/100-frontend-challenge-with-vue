<script setup
	lang="ts">

const button       = useTemplateRef<HTMLButtonElement | null>( 'button' )
const isHover      = useElementHover( button )
const isHoverScale = computed( () => {
	return isHover.value ? '200%' : '100%'
} )
const text         = ref( '' )
</script>

<template>
	<div class="bg-gray-200 w-screen h-screen flex items-center justify-center ">
		<div class="w-[90%] h-[60%] flex items-center justify-evenly bg-white rounded-2xl shadow-lg p-4">
			<div class="flex justify-center items-center">
				<img class="w-64 h-64"
					src="/newsletter-icon.avif"/>
			</div>
			<div class="flex flex-col gap-4 basis-[40%] max-w-sm">
				<div class="font-bold text-2xl">Sign up to our</div>
				<div class="font-bold text-5xl">Newsletter</div>
				<div>Subscribe to out newsletter and stay updated.</div>
				<div class="w-full relative">
					<div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
						<Icon class="text-gray-400"
							name="ic-twotone-email"/>
					</div>
					<input
						id="default-search"
						v-model="text"
						type="text"
						placeholder="Your email"
						class="block w-full p-2 ps-8 text-sm border border-gray-400 rounded-2xl"
					/>
				</div>
				<button
					ref="button"
					class="transition-all gradient text-white w-full py-2 rounded-2xl font-medium">
					Sign Up
				</button>
			</div>
		</div>
	</div>
</template>

<style scoped>
.gradient {
	background-size: v-bind(isHoverScale) v-bind(isHoverScale);
	background-position: 0px 0px;
	background-image: linear-gradient(-30deg, #e6324f 0%, #039cfa 100%);
}
</style>
