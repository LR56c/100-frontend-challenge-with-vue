<script setup
	lang="ts">
import tinycolor from 'tinycolor2'

export interface SocialProps {
	socialName: string,
	socialNick: string,
}

interface Props {
	name: string,
	socialName: string,
	description: string,
	socials: SocialProps[]
}

defineProps<Props>()

const hexWave1 = '#973350'
const hexWave2 = '#b8536f'
const hexWave3 = '#e0408d'
const rgba1    = tinycolor( hexWave1 )
	.toRgbString()
const rgba2    = tinycolor( hexWave2 )
	.toRgbString()
const rgba3    = tinycolor( hexWave3 )
	.toRgbString()
</script>

<template>
	<div class="relative w-80 h-full bg-white rounded-3xl overflow-hidden shadow-lg">
		<div class="h-16 bg-[#973350]"></div>
		<div class="relative w-full">
			<svg class="absolute"
				preserveAspectRatio="none"
				id="wave-2"
				style="transform:rotate(180deg); transition: 0.3s"
				viewBox="0 0 1440 490"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg">
				<defs>
					<linearGradient id="sw-gradient-2"
						x1="0"
						x2="0"
						y1="1"
						y2="0">
						<stop :stop-color="rgba3"
							offset="0%"></stop>
						<stop :stop-color="rgba3"
							offset="100%"></stop>
					</linearGradient>
				</defs>
				<path style="transform:translate(0, 0px); opacity:1"
					fill="url(#sw-gradient-2)"
					d="M0,392L40,375.7C80,359,160,327,240,269.5C320,212,400,131,480,114.3C560,98,640,147,720,187.8C800,229,880,261,960,261.3C1040,261,1120,229,1200,220.5C1280,212,1360,229,1440,212.3C1520,196,1600,147,1680,179.7C1760,212,1840,327,1920,351.2C2000,376,2080,310,2160,261.3C2240,212,2320,180,2400,179.7C2480,180,2560,212,2640,212.3C2720,212,2800,180,2880,196C2960,212,3040,278,3120,261.3C3200,245,3280,147,3360,106.2C3440,65,3520,82,3600,89.8C3680,98,3760,98,3840,138.8C3920,180,4000,261,4080,269.5C4160,278,4240,212,4320,220.5C4400,229,4480,310,4560,285.8C4640,261,4720,131,4800,98C4880,65,4960,131,5040,196C5120,261,5200,327,5280,318.5C5360,310,5440,229,5520,236.8C5600,245,5680,343,5720,392L5760,441L5760,490L5720,490C5680,490,5600,490,5520,490C5440,490,5360,490,5280,490C5200,490,5120,490,5040,490C4960,490,4880,490,4800,490C4720,490,4640,490,4560,490C4480,490,4400,490,4320,490C4240,490,4160,490,4080,490C4000,490,3920,490,3840,490C3760,490,3680,490,3600,490C3520,490,3440,490,3360,490C3280,490,3200,490,3120,490C3040,490,2960,490,2880,490C2800,490,2720,490,2640,490C2560,490,2480,490,2400,490C2320,490,2240,490,2160,490C2080,490,2000,490,1920,490C1840,490,1760,490,1680,490C1600,490,1520,490,1440,490C1360,490,1280,490,1200,490C1120,490,1040,490,960,490C880,490,800,490,720,490C640,490,560,490,480,490C400,490,320,490,240,490C160,490,80,490,40,490L0,490Z"></path>
			</svg>
			<svg class="absolute"
				preserveAspectRatio="none"
				id="wave-1"
				style="transform:rotate(180deg); transition: 0.3s"
				viewBox="0 0 1440 490"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg">
				<defs>
					<linearGradient id="sw-gradient-1"
						x1="0"
						x2="0"
						y1="1"
						y2="0">
						<stop :stop-color="rgba2"
							offset="0%"></stop>
						<stop :stop-color="rgba2"
							offset="100%"></stop>
					</linearGradient>
				</defs>
				<path style="transform:translate(0, 0px); opacity:1"
					fill="url(#sw-gradient-1)"
					d="M0,98L30,155.2C60,212,120,327,180,367.5C240,408,300,376,360,367.5C420,359,480,376,540,326.7C600,278,660,163,720,98C780,33,840,16,900,24.5C960,33,1020,65,1080,122.5C1140,180,1200,261,1260,269.5C1320,278,1380,212,1440,163.3C1500,114,1560,82,1620,98C1680,114,1740,180,1800,196C1860,212,1920,180,1980,171.5C2040,163,2100,180,2160,163.3C2220,147,2280,98,2340,138.8C2400,180,2460,310,2520,302.2C2580,294,2640,147,2700,98C2760,49,2820,98,2880,138.8C2940,180,3000,212,3060,245C3120,278,3180,310,3240,294C3300,278,3360,212,3420,163.3C3480,114,3540,82,3600,73.5C3660,65,3720,82,3780,106.2C3840,131,3900,163,3960,220.5C4020,278,4080,359,4140,400.2C4200,441,4260,441,4290,441L4320,441L4320,490L4290,490C4260,490,4200,490,4140,490C4080,490,4020,490,3960,490C3900,490,3840,490,3780,490C3720,490,3660,490,3600,490C3540,490,3480,490,3420,490C3360,490,3300,490,3240,490C3180,490,3120,490,3060,490C3000,490,2940,490,2880,490C2820,490,2760,490,2700,490C2640,490,2580,490,2520,490C2460,490,2400,490,2340,490C2280,490,2220,490,2160,490C2100,490,2040,490,1980,490C1920,490,1860,490,1800,490C1740,490,1680,490,1620,490C1560,490,1500,490,1440,490C1380,490,1320,490,1260,490C1200,490,1140,490,1080,490C1020,490,960,490,900,490C840,490,780,490,720,490C660,490,600,490,540,490C480,490,420,490,360,490C300,490,240,490,180,490C120,490,60,490,30,490L0,490Z"></path>
			</svg>
			<svg class="absolute"
				preserveAspectRatio="none"
				id="wave-0"
				style="transform:rotate(180deg); transition: 0.3s"
				viewBox="0 0 1440 490"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg">
				<defs>
					<linearGradient id="sw-gradient-0"
						x1="0"
						x2="0"
						y1="1"
						y2="0">
						<stop :stop-color="rgba1"
							offset="0%"></stop>
						<stop :stop-color="rgba1"
							offset="100%"></stop>
					</linearGradient>
				</defs>
				<path style="transform:translate(0, 0px); opacity:1"
					fill="url(#sw-gradient-0)"
					d="M0,441L48,432.8C96,425,192,408,288,351.2C384,294,480,196,576,163.3C672,131,768,163,864,196C960,229,1056,261,1152,253.2C1248,245,1344,196,1440,212.3C1536,229,1632,310,1728,343C1824,376,1920,359,2016,351.2C2112,343,2208,343,2304,310.3C2400,278,2496,212,2592,196C2688,180,2784,212,2880,236.8C2976,261,3072,278,3168,269.5C3264,261,3360,229,3456,220.5C3552,212,3648,229,3744,220.5C3840,212,3936,180,4032,187.8C4128,196,4224,245,4320,294C4416,343,4512,392,4608,400.2C4704,408,4800,376,4896,310.3C4992,245,5088,147,5184,106.2C5280,65,5376,82,5472,89.8C5568,98,5664,98,5760,122.5C5856,147,5952,196,6048,253.2C6144,310,6240,376,6336,359.3C6432,343,6528,245,6624,212.3C6720,180,6816,212,6864,228.7L6912,245L6912,490L6864,490C6816,490,6720,490,6624,490C6528,490,6432,490,6336,490C6240,490,6144,490,6048,490C5952,490,5856,490,5760,490C5664,490,5568,490,5472,490C5376,490,5280,490,5184,490C5088,490,4992,490,4896,490C4800,490,4704,490,4608,490C4512,490,4416,490,4320,490C4224,490,4128,490,4032,490C3936,490,3840,490,3744,490C3648,490,3552,490,3456,490C3360,490,3264,490,3168,490C3072,490,2976,490,2880,490C2784,490,2688,490,2592,490C2496,490,2400,490,2304,490C2208,490,2112,490,2016,490C1920,490,1824,490,1728,490C1632,490,1536,490,1440,490C1344,490,1248,490,1152,490C1056,490,960,490,864,490C768,490,672,490,576,490C480,490,384,490,288,490C192,490,96,490,48,490L0,490Z"></path>
			</svg>
		</div>
		<div class="absolute top-6 left-1/2 transform -translate-x-1/2 z-10 rounded-full bg-white w-20 h-20">
			<img src="https://avatar.iran.liara.run/public/39"/>
		</div>
		<div class="h-28 w-full"></div>
		<div class="h-full w-full flex flex-col items-center justify-center p-4">
			<div class="text-2xl font-b">{{ name }}</div>
			<div class="text-sm text-gray-400">{{ socialName }}</div>
			<div class="w-full flex my-4 items-center justify-center gap-4">
				<div v-for="social in socials"
					:key="social.socialName">
					<a :href="social.socialNick">
						<Icon size="20"
							:name="social.socialName"/>
					</a>
				</div>
			</div>
			<div class="text-center text-sm">{{ description }}</div>
		</div>
		<div class="w-full h-full flex items-center justify-center gap-4 py-6">
			<button class="w-2/5 text-sm bg-[#e0408d] text-white rounded-full h-8"
				type="button">Follow
			</button>
			<button class="w-2/5 text-sm border border-gray-400 text-gray-400 rounded-full h-8"
				type="button">Message
			</button>
		</div>
	</div>
</template>

<style scoped>

</style>
