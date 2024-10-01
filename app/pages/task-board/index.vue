<script setup
	lang="ts">

import { type TaskCardProps } from '~/components/task-board/TaskCard.vue'
import TaskColumn from '~/components/task-board/TaskColumn.vue'

const data = ref( new Map<string, TaskCardProps[]>(
	[
		[ 'to do', [
			{
				title        : 'Update Website Homepage',
				priority     : 'high',
				img          : 'https://placehold.co/200x100',
				description  : 'Revise the content and layout of the homepage to highlight new features and improve user engagement.',
				date         : new Date( 2024, 1, 15 ),
				personsImages: [
					'https://i.pravatar.cc/50?img=1',
					'https://i.pravatar.cc/50?img=2'
				]
			}
		] ],
		[ 'in progress', [
			{
				title        : 'Social Media Campaign',
				priority     : 'low',
				description  : 'Plan and execute a social media campaign for the upcoming product launch in February, including creating posts and scheduling updates.',
				date         : new Date( 2024, 1, 13 ),
				personsImages: [
					'https://i.pravatar.cc/50?img=3'
				]
			},
			{
				title        : 'Social Media Campaign',
				priority     : 'medium',
				img          : 'https://placehold.co/200x100',
				description  : 'Plan and execute a social media campaign for the upcoming product launch in February, including creating posts and scheduling updates.',
				date         : new Date( 2024, 1, 8 ),
				personsImages: [
					'https://i.pravatar.cc/50?img=4',
					'https://i.pravatar.cc/50?img=5'
				]
			}
		] ],
		[ 'under review', [
			{
				title        : 'Mobile App Feature - Push',
				priority     : 'medium',
				description  : 'Notifications Implement push notification feature for the mobile app to enhance user engagement. Ensure compatibility with both iOS and Android platforms.',
				date         : new Date( 2024, 1, 11 ),
				personsImages: [
					'https://i.pravatar.cc/50?img=3'
				]
			}
		] ],
		[ 'done', [
			{
				title        : 'Content Creation - Blog',
				priority     : 'low',
				description  : 'Post Write and publish a blog post about industry trends and their impact on our products/services. Include relevant visuals and SEO optimization.',
				date         : new Date( 2024, 1, 9 ),
				personsImages: [
					'https://i.pravatar.cc/50?img=4'
				]
			},
			{
				title        : 'IT Security Audit',
				priority     : 'medium',
				img          : 'https://placehold.co/200x100',
				description  : 'Write and publish a blog post about industry trends and their impact on our products/services. Include relevant visuals and SEO optimization.',
				date         : new Date( 2024, 1, 7 ),
				personsImages: [
					'https://i.pravatar.cc/50?img=2'
				]
			}
		] ]
	]
) )

</script>

<template>
	<div class="bg-gray-100 h-screen flex flex-col p-8 gap-4">
		<div class="font-bold text-2xl">Boards</div>
		<div class="w-full h-full flex gap-4 overflow-x-scroll">
			<task-column v-for="[key,entries] in data"
				data-allow-mismatch
				:name="key"
				:tasks="entries"
				:key="key">
			</task-column>
		</div>
	</div>
</template>

<style scoped>

</style>
