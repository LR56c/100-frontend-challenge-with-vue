<script setup
	lang="ts">

</script>

<template>
	<div class="custom-shadow flex w-full h-full p-4 rounded-2xl gap-4 bg-gray-100">
		<div class="flex flex-col justify-between gap-4 basis-[40%]">
			<span class="text-lg font-semibold">Streamlined process focused on your priorities</span>
			<span class="text-sm text-black/60 font-semibold">Talk to us for a comprehensive solution that meets all your enterprise needs.</span>
			<button class="text-white flex items-center justify-center w-full py-1 bg-[#226b1c] rounded-2xl">
				Talk to Sales
			</button>
		</div>
		<hr class="border w-fit h-60 border-black/50"/>
		<div class="flex flex-col gap-4 basis-[60%]">
			<span class="text-black/80 font-semibold">Engage with us for a holistic solution that addresses allyour enterprise requirements.</span>
			<ul class="flex flex-col justify-center gap-4 h-full list-disc ml-4 text-sm text-black/60 font-semibold">
				<li>Enhance support and refine change management with our most resilient
					sandbox
				</li>
				<li>Expand your business with our maximum API rate limits</li>
				<li>Secure your operations with advanced disaster recovery measures</li>
			</ul>
		</div>
	</div>
</template>

<style scoped>
.custom-shadow {
	box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}
</style>