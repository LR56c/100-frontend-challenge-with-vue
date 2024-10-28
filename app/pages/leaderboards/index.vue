<script setup
	lang="ts">
import LeaderboardPodium from '~/components/leaderboards/LeaderboardPodium.vue'
import LeaderboardPodiumEmpty
	from '~/components/leaderboards/LeaderboardPodiumEmpty.vue'
import LeaderboardRateRow
	from '~/components/leaderboards/LeaderboardRateRow.vue'
import {
	rates,
	type RateType,
	useLeaderboards
} from '~/components/leaderboards/useLeaderboards'

const rateSelected = ref<RateType>( 'month' )

const changeRate = ( rate: RateType ) => {
	rateSelected.value = rate
}
const store      = useLeaderboards()

const usersScoresByType = computed( () => {
	return store.usersScoresByType( rateSelected.value )
} )

const top3 = computed( () => {
	return usersScoresByType.value.slice( 0, 3 )
} )

const rest = computed( () => {
	return usersScoresByType.value.slice( 3 )
} )
</script>

<template>
	<div class="w-screen h-screen bg-[#a7ff92] flex items-center justify-center ">
		<svg class="absolute rotate-45 transform -translate-x-1/2 -bottom-0 left-1/4 scale-[2.2]" id="wave" viewBox="0 0 1440 490" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(50, 255, 0, 1)" offset="0%"></stop><stop stop-color="rgba(50, 255, 0, 1)" offset="100%"></stop></linearGradient></defs><path style="transform:translate(0, 0px); opacity:1" fill="url(#sw-gradient-0)" d="M0,98L26.7,122.5C53.3,147,107,196,160,220.5C213.3,245,267,245,320,204.2C373.3,163,427,82,480,81.7C533.3,82,587,163,640,204.2C693.3,245,747,245,800,220.5C853.3,196,907,147,960,155.2C1013.3,163,1067,229,1120,285.8C1173.3,343,1227,392,1280,343C1333.3,294,1387,147,1440,147C1493.3,147,1547,294,1600,334.8C1653.3,376,1707,310,1760,253.2C1813.3,196,1867,147,1920,122.5C1973.3,98,2027,98,2080,138.8C2133.3,180,2187,261,2240,318.5C2293.3,376,2347,408,2400,416.5C2453.3,425,2507,408,2560,351.2C2613.3,294,2667,196,2720,196C2773.3,196,2827,294,2880,294C2933.3,294,2987,196,3040,187.8C3093.3,180,3147,261,3200,269.5C3253.3,278,3307,212,3360,187.8C3413.3,163,3467,180,3520,204.2C3573.3,229,3627,261,3680,277.7C3733.3,294,3787,294,3813,294L3840,294L3840,490L3813.3,490C3786.7,490,3733,490,3680,490C3626.7,490,3573,490,3520,490C3466.7,490,3413,490,3360,490C3306.7,490,3253,490,3200,490C3146.7,490,3093,490,3040,490C2986.7,490,2933,490,2880,490C2826.7,490,2773,490,2720,490C2666.7,490,2613,490,2560,490C2506.7,490,2453,490,2400,490C2346.7,490,2293,490,2240,490C2186.7,490,2133,490,2080,490C2026.7,490,1973,490,1920,490C1866.7,490,1813,490,1760,490C1706.7,490,1653,490,1600,490C1546.7,490,1493,490,1440,490C1386.7,490,1333,490,1280,490C1226.7,490,1173,490,1120,490C1066.7,490,1013,490,960,490C906.7,490,853,490,800,490C746.7,490,693,490,640,490C586.7,490,533,490,480,490C426.7,490,373,490,320,490C266.7,490,213,490,160,490C106.7,490,53,490,27,490L0,490Z"></path></svg>
		<svg class="absolute -rotate-[135deg] transform translate-x-1/2 -top-0 right-1/4 scale-[2.2]" id="wave" viewBox="0 0 1440 490" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(50, 255, 0, 1)" offset="0%"></stop><stop stop-color="rgba(50, 255, 0, 1)" offset="100%"></stop></linearGradient></defs><path style="transform:translate(0, 0px); opacity:1" fill="url(#sw-gradient-0)" d="M0,294L26.7,253.2C53.3,212,107,131,160,106.2C213.3,82,267,114,320,114.3C373.3,114,427,82,480,65.3C533.3,49,587,49,640,98C693.3,147,747,245,800,236.8C853.3,229,907,114,960,65.3C1013.3,16,1067,33,1120,57.2C1173.3,82,1227,114,1280,114.3C1333.3,114,1387,82,1440,65.3C1493.3,49,1547,49,1600,98C1653.3,147,1707,245,1760,302.2C1813.3,359,1867,376,1920,318.5C1973.3,261,2027,131,2080,65.3C2133.3,0,2187,0,2240,49C2293.3,98,2347,196,2400,220.5C2453.3,245,2507,196,2560,171.5C2613.3,147,2667,147,2720,163.3C2773.3,180,2827,212,2880,245C2933.3,278,2987,310,3040,285.8C3093.3,261,3147,180,3200,138.8C3253.3,98,3307,98,3360,147C3413.3,196,3467,294,3520,310.3C3573.3,327,3627,261,3680,204.2C3733.3,147,3787,98,3813,73.5L3840,49L3840,490L3813.3,490C3786.7,490,3733,490,3680,490C3626.7,490,3573,490,3520,490C3466.7,490,3413,490,3360,490C3306.7,490,3253,490,3200,490C3146.7,490,3093,490,3040,490C2986.7,490,2933,490,2880,490C2826.7,490,2773,490,2720,490C2666.7,490,2613,490,2560,490C2506.7,490,2453,490,2400,490C2346.7,490,2293,490,2240,490C2186.7,490,2133,490,2080,490C2026.7,490,1973,490,1920,490C1866.7,490,1813,490,1760,490C1706.7,490,1653,490,1600,490C1546.7,490,1493,490,1440,490C1386.7,490,1333,490,1280,490C1226.7,490,1173,490,1120,490C1066.7,490,1013,490,960,490C906.7,490,853,490,800,490C746.7,490,693,490,640,490C586.7,490,533,490,480,490C426.7,490,373,490,320,490C266.7,490,213,490,160,490C106.7,490,53,490,27,490L0,490Z"></path></svg>
		<div class="relative bg-black min-h-[532px] max-h-[532px] max-w-xs w-full rounded-2xl flex flex-col text-white gap-4 z-10">
			<div class="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b via-black opacity-90 from-transparent to-black rounded-b-2xl"></div>
			<div class="pt-4 self-center text-lg font-medium">Leaderboards</div>
			<div class="flex justify-around w-full">
				<button v-for="rate in rates"
					@click="changeRate(rate)"
					:class="[rateSelected === rate ? 'bg-gray-900' : '']"
					class="capitalize py-0.5 px-1.5 rounded-full">{{ rate }}
				</button>
			</div>
			<div class="relative flex justify-center gap-4 bg-transparent items-end"
				style="clip-path: url(#smoothPodiumClip);">
				<svg class="absolute bottom-0-0 left-0" width="320" height="244">
					<path d="m 0 244 a 10 14 0 0 1 320 0" fill="none" stroke="transparent" id="arc-path1" />
					<text font-size="16">
						<textPath class="filter grayscale opacity-25" href="#arc-path1" startOffset="20%">
							⭐&emsp;&emsp;⭐&emsp;&emsp;⭐&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;⭐&emsp;&emsp;⭐&emsp;&emsp;⭐
						</textPath>
					</text>
				</svg>
				<svg class="absolute bottom-0-0 left-0" width="320" height="244">
					<path d="m 0 244 a 10 9 0 0 1 320 0" fill="none" stroke="transparent" id="arc-path2" />
					<text font-size="16">
						<textPath class="filter grayscale opacity-25" href="#arc-path2" startOffset="4%">
							&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;⭐&emsp;&emsp;&emsp;&emsp;&emsp;⭐
						</textPath>
					</text>
				</svg>
				<leaderboard-podium
					v-if="top3[1]"
					:top="2"
					:name="top3[1].name"
					:score="top3[1].score"
					img-class="w-12 h-12"
					:avatar="top3[1].avatar"
					:status="top3[1].status"></leaderboard-podium>
				<leaderboard-podium-empty
					v-else
					:top="2"
					box-class="h-24 w-16"></leaderboard-podium-empty>
				<leaderboard-podium
					v-if="top3[0]"
					:top="1"
					box-class="h-32 w-20"
					img-class="w-16 h-16"
					:name="top3[0].name"
					:score="top3[0].score"
					:avatar="top3[0].avatar"
					:status="top3[0].status"></leaderboard-podium>
				<leaderboard-podium-empty
					v-else
					:top="1"
					box-class="h-32 w-20"></leaderboard-podium-empty>
				<leaderboard-podium
					v-if="top3[2]"
					:top="3"
					img-class="w-12 h-12"
					box-class="h-20"
					:name="top3[2].name"
					:score="top3[2].score"
					:avatar="top3[2].avatar"
					:status="top3[2].status"></leaderboard-podium>
				<leaderboard-podium-empty
					v-else
					:top="3"
					box-class="h-20"></leaderboard-podium-empty>
				<div v-else
					class="h-8 w-8 gr-gray-800"></div>
			</div>
			<div class="flex flex-col no-scrollbar overflow-y-scroll rounded-b-2xl pb-12">
				<leaderboard-rate-row
					v-for="(rate, index) in rest"
					:class="[index % 2 === 0 ? 'bg-gray-700/30' : '']"
					:key="rate.name"
					:index="index + 4"
					:rate="rate"
				></leaderboard-rate-row>
			</div>
		</div>
		<svg width="0"
			height="0">
			<defs>
				<clipPath id="smoothPodiumClip"
					clipPathUnits="userSpaceOnUse">
					<path d="m 0 0 l 310 0 l 0 185 a 61 22 0 0 1 -310 0"></path>
				</clipPath>
			</defs>
		</svg>
	</div>
</template>

<style scoped>
</style>
