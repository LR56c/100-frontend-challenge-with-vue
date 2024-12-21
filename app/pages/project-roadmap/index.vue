<script setup
	lang="ts">

const days = ref( [
	{ name: 'Mon', date: '8' },
	{ name: 'Tue', date: '9' },
	{ name: 'Wed', date: '10' },
	{ name: 'Thu', date: '11' },
	{ name: 'Fri', date: '12' },
	{ name: 'Sat', date: '13' },
	{ name: 'Sun', date: '14' }
] )

const people = ref( [
		{
			id    : 1,
			name  : 'John Doe',
			avatar: 'https://i.pravatar.cc/60?img=1'
		},
		{
			id    : 2,
			name  : 'Jane Doe',
			avatar: 'https://i.pravatar.cc/60?img=2'
		},
		{
			id    : 3,
			name  : 'John Smith',
			avatar: 'https://i.pravatar.cc/60?img=3'
		},
		{
			id    : 4,
			name  : 'Jane Smith',
			avatar: 'https://i.pravatar.cc/60?img=4'
		},
		{
			id    : 5,
			name  : 'John Doe',
			avatar: 'https://i.pravatar.cc/60?img=5'
		},
		{
			id    : 6,
			name  : 'Jane Doe',
			avatar: 'https://i.pravatar.cc/60?img=6'
		}
	]
)

const avatars = people.value.map( ( person ) => person.avatar )
const tasks  = ref( [
	{
		id       : 1,
		assign   : people.value[0],
		name     : 'Research and Planning',
		start    : 0,
		duration : 29,
		row      : 0,
		className: 'bg-blue-500 text-white',
	},
	{
		id       : 2,
		assign   : people.value[1],
		name     : 'Create wireframes/mockups',
		start    : 14,
		duration : 29,
		row      : 1,
		className: 'bg-green-500 text-white',
	},
	{
		id       : 3,
		assign   : people.value[2],
		name     : 'Design user interface',
		start    : 42,
		duration : 30,
		row      : 2,
		className: 'bg-green-500 text-white',
	},
	{
		id       : 4,
		assign   : people.value[3],
		name     : 'Develop test cases',
		start    : 56,
		duration : 30,
		row      : 3,
		className: 'bg-orange-500 text-white',
	},
	{
		id       : 5,
		assign   : people.value[4],
		name     : 'Define project scope',
		start    : 0,
		duration : 43,
		row      : 4,
		className: 'bg-blue-500 text-white',
	},
	{
		id       : 6,
		assign   : people.value[5],
		name     : 'Conduct integration testing',
		start    : 56,
		duration : 30,
		row      : 5,
		className: 'bg-orange-500 text-white',
	}
] )

const today              = new Date( '2024-12-10' )
const currentDateIndex   = today.getDate() + 1
const currentDayIndex    = today.getDay() + 1
const currentDayPosition = ( currentDayIndex / 7 ) * 100
</script>

<template>
	<div class="bg-gray-50 w-screen h-screen flex flex-col gap-4 p-4">
		<span class="text-xl font-bold">Project Task</span>
		<div class="min-h-[610px] flex flex-col bg-gray-100 rounded-2xl">
			<div class="flex p-4 gap-8">
				<div class="flex gap-2 items-center">
					<span class="font-semibold">Team</span>
					<project-roadmap-avatars :avatars
					></project-roadmap-avatars>
				</div>
				<project-roadmap-date-selector v-model="today"></project-roadmap-date-selector>
			</div>
			<div class="py-4 border-t border-b border-black/30 grid grid-cols-7">
				<div v-for="day in days"
					:key="day.date"
					class="flex place-self-center items-center gap-1 justify-center text-sm"
					:class="currentDateIndex.toString() === day.date ? 'bg-blue-500 text-white w-fit text-center rounded-2xl py-0.5 px-2' : ''"
				>
					<span class="font-semibold">{{ day.name }}</span>
					<span>{{ day.date }}</span>
				</div>
			</div>
			<div class="relative">
				<div class="min-h-[500px] grid grid-cols-7 absolute inset-0">
					<div v-for="i in 7"
						:key="i"
						:class="i > 5 ? 'bg-gray-200' : ''"
						class="border-r border-black/30 h-full"></div>
				</div>
				<div class="relative min-h-[500px]">
					<div
						class="absolute w-1 top-0 h-full bg-blue-400"
						:style="{ left: `${currentDayPosition + 7}%` }"
					></div>
					<div
						v-for="task in tasks"
						:key="task.id"
						class="absolute mt-8 rounded-full h-12 flex items-center gap-2 px-4 transition-all duration-300 hover:opacity-90"
						:class="task.className"
						:style="{
            left: `${task.start}%`,
            width: `${task.duration}%`,
            top: `${task.row * 5}rem`
          }"
					>
						<nuxt-img class="object-center object-cover rounded-full w-6 h-6" :src="task.assign.avatar"/>
						<span class="text-sm font-semibold whitespace-nowrap">{{
								task.name
							}}</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.grid-cols-7 {
	grid-template-columns: repeat(7, 1fr);
}
</style>