<script setup
	lang="ts">

</script>

<template>
	<div class="bg-[#e7ffcf] w-screen h-screen flex flex-col items-center justify-center">

		<div class="relative w-full max-w-lg flex flex-col">
			<div class="absolute w-full h-full bg-[#1FA900FF] rounded-2xl top-[10%] left-[3%]"></div>
			<div class="w-full max-w-lg bg-gray-100 p-4 rounded-2xl flex flex-col gap-4 shadow-lg custom-shadow z-10">
				<div class="flex w-full justify-between">
					<span class="font-semibold text-lg">Show notifications for</span>
					<button class="rounded-full w-8 h-8 flex items-center justify-center bg-gray-300">
						<Icon size="20"
							name="material-symbols-close-rounded"/>
					</button>
				</div>
				<div class="flex w-full items-center gap-4">
					<div class="bg-gradient-to-b from-[#61b61a] to-[#115d52] rounded-full w-8 h-8 flex items-center justify-center">
						<Icon class="text-white"
							size="24"
							name="material-symbols-notifications"/>
					</div>
					<span>www.website.com</span>
				</div>
				<div class="flex w-full justify-end gap-4">
					<push-notification-button label="block"
						class="border-red-700 text-red-700"></push-notification-button>
					<push-notification-button label="allow"
						class="border-[#1FA900FF] text-[#1FA900FF]"></push-notification-button>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.box-shadow {
	box-shadow: 10px 10px 0 rgb(31, 169, 0);
	box-sizing: border-box;
}

.custom-shadow {
	box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}
</style>