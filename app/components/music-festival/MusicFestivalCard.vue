<script setup
	lang="ts">

</script>

<template>
	<div class="gradient-border-mask flex flex-col gap-4 w-96 p-4">
		<div class="font-bold text-white">What is ELECTRO MUSIC FESTIVAL?
		</div>
		<div class="text-gray-500 text-xs">Fatalis amicitias ducunt ad
			cursus.Est camerarius vortex, cesaris.Sunt abnobaes magicae fortis,
			germanus visuses.Ubi est teres mens?
		</div>
		<div class="w-full h-36 rounded-2xl relative">
			<img class="h-36 rounded-2xl w-full object-center object-cover" src="/music-festival-mini.jpg"/>
			<div class="cursor-pointer absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white flex items-center justify-center">
				<Icon size="50" class="text-black" name="material-symbols-play-arrow-rounded"/>
			</div>
		</div>
		<div class="text-gray-500 text-xs">2023 Official Trailer</div>
	</div>
</template>

<style scoped>
.gradient-border-mask {
	position: relative;
	backdrop-filter: blur(16px);
}

.gradient-border-mask::before {
	content: "";
	position: absolute;
	inset: 0;
	border-radius: 16px;
	border: 2px solid transparent;
	background: radial-gradient(circle at top right, rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.9)) border-box;
	mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
	mask-composite: exclude;
}
</style>
