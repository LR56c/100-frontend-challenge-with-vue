<script setup
	lang="ts">

</script>

<template>
	<div class="w-screen h-screen flex flex-col">
		<nav class="w-full flex items-center justify-between px-8 py-4">
			<div class="cursor-pointer font-bold text-3xl text-green-950">GrowGreen</div>
			<div class="flex gap-8">
				<NuxtLink class="cursor-pointer font-medium text-lime-900 underline-offset-4 underline">Home</NuxtLink>
				<NuxtLink class="cursor-pointer font-medium text-gray-400">Catalog</NuxtLink>
				<NuxtLink class="cursor-pointer font-medium text-gray-400">Blog</NuxtLink>
				<NuxtLink class="cursor-pointer font-medium text-gray-400">Contact</NuxtLink>
			</div>
			<div class="flex gap-3 items-center text-gray-400">
				<Icon class="cursor-pointer" size="22" name="mdi-magnify"/>
				<Icon class="cursor-pointer" size="20" name="material-symbols-account-circle-full"/>
				<Icon class="cursor-pointer" size="20" name="ph-bag"/>
			</div>
		</nav>
		<div class="h-full flex items-center">
			<div class="relative h-full flex basis-[50%] items-end justify-center">
				<div class="absolute top-[45%] left-[5%]">
					<svg class="size-16 text-lime-900 rotate-180"
						width="20"
						height="20"
						viewBox="0 0 16 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true">
						<path d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
							fill="currentColor"></path>
					</svg>
				</div>
				<div class="absolute top-[50%] left-[10%] rounded-2xl bg-white shadow-lg w-64 h-36 flex flex-col p-4 gap-2">
					<div class="flex gap-2">
						<img class="w-10 h-10 object-center object-cover rounded-2xl"
							src="https://i.pravatar.cc/60?img=5"/>
						<div class="flex flex-col">
							<div class="font-bold text-sm">Debra D. Gilliam</div>
							<div class="flex items-center gap-1">
								<div class="text-sm">4.8</div>
								<Icon size="12" v-for="i in [0,1,2,3,4]"
									name="i-fontisto-star"
									class="text-yellow-500"/>
							</div>
						</div>
					</div>
					<div class="text-xs line-clamp-4>">"Absoluty love this plant app! its like having a g reen thumb in your pocket. So easy to use, with tons of helpful tips and reminders for plant care."</div>
				</div>
				<img class="max-w-md object-center object-cover rounded-2xl"
					src="/houseplant.jpg"/>
			</div>
			<div class="flex flex-col gap-8 p-12 basis-[50%]">
				<div class="font-medium text-5xl text-green-950">Make your home
					beautiful with plants
				</div>
				<div class="text-green-950">Unlock the secrets Of greenery and infuse
					every Corner with life
					and serenity. From vibrant blooms to Iush foliage, let your home
					reflect the timeless elegance of nature's bounty,
				</div>
				<div class="flex gap-4">
					<div class="flex flex-col items-center gap-4">
						<img class="w-40 h-40 object-center object-cover rounded-2xl"
							src="/tiesto.jpg"/>
						<div class="cursor-pointer bg-gray-100 border-2 border-gray-200 rounded-2xl flex items-center justify-center w-6 h-6">
							<Icon size="20"
								name="material-symbols-light-arrow-forward"/>
						</div>
					</div>
					<div class="flex flex-col items-center gap-4">
						<img class="w-40 h-40 object-center object-cover rounded-2xl"
							src="/flower.jpg"/>
						<div class="cursor-pointer bg-gray-100 border-2 border-gray-200 rounded-2xl flex items-center justify-center w-6 h-6">
							<Icon size="20"
								name="material-symbols-light-arrow-forward"/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>
