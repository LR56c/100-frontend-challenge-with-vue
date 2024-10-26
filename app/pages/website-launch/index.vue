<script setup
	lang="ts">
const currentDate = new Date()

const days      = 24 * 60 * 60 * 1000
const futureDay = 9 * days

const hours       = 60 * 60 * 1000
const futureHours = 17 * hours
const newDate     = new Date(currentDate.getTime() + futureDay + futureHours)

const transformSlotProps = (props: Record<string, number>) => {
	const formattedProps: Record<string, string> = {}
	Object.entries(props).forEach(([key, value]) => {
		formattedProps[key] = (value as number) < 10 ? `0${value}` : String(value)
	})
	return formattedProps
}
</script>

<template>
	<div class="bg-[url('/sunset-beach2.jpg')] saturate-200 bg-cover bg-center w-screen h-screen flex flex-col pt-[10%] items-center gap-12">
		<div class="uppercase text-4xl tracking-widest">we're launching soon</div>
		<div class="gradient-border-mask min-w-[500px] flex flex-col py-8 px-12">
			<Countdown
				:transform="transformSlotProps"
				:date="newDate"
				class="flex w-full h-full justify-around gap-16"
				v-slot="{ days, hours, minutes, seconds }"
			>
				<WebsiteLaunchDateSegment
					:value="days"
					label="days"
				></WebsiteLaunchDateSegment>
				<WebsiteLaunchDateSegment
					:value="hours"
					label="hours"
				></WebsiteLaunchDateSegment>
				<WebsiteLaunchDateSegment
					:value="minutes"
					label="minutes"
				></WebsiteLaunchDateSegment>
				<WebsiteLaunchDateSegment
					:value="seconds"
					label="second"
				></WebsiteLaunchDateSegment>
			</Countdown>
		</div>
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
	background: radial-gradient(circle at bottom right, rgb(228, 120, 100), rgb(132, 202, 251)) border-box;
	mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
	mask-composite: exclude;
}
</style>
