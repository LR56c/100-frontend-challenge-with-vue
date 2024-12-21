<script setup
	lang="ts">
import type { ColumnsCardProps } from '~/components/columns-card/ColumnsCard.vue'

const list: ColumnsCardProps[] = [
	{
		title          : 'Inspiring Design Assets',
		textColor      : 'text-[#db9501]',
		backgroundColor: 'bg-[#fed885]',
		icon           : 'lets-icons-lamp-fill',
		content        : 'Explore our meticulously curated design assets—a treasure trove of Styles, themes, and formats. From stunning illustrations to captivating icons, find everything you need to elevate your designs. Embarking on a new project or seeking the perfect finishing touch? Our diverse range of assets Will ignite your imagination and take your designs to new heights'
	},
	{
		title          : 'Efficiency-Boosting Tools',
		textColor      : 'text-[#43634c]',
		backgroundColor: 'bg-[#7fc394]',
		icon           : 'material-symbols-settings',
		content        : 'Revolutionize your productivity with our suite of meticulously crafted tools. From intuitive design software to automated processes, streamline your workflow effortlessly. Work smarter, not harder, with our eficiency-boosting arsenal. Say goodbye to tedious tasks and hello to a seamless design process, allowing you to focus on bringing your ideas to life'
	},
	{
		title          : 'Community Collaboration',
		textColor      : 'text-[#2c5c68]',
		backgroundColor: 'bg-[#50bbcf]',
		icon           : 'fluent-handshake-32-filled',
		content        : 'Join our vibrant global community of passionate designers and creators. Collaboration knows no bounds here, where creativity flourishes. Engage in lively discussions, share insights, and forge meaningful connections. Seeking feedback, inspiration, or camaraderie? Look no further. Let\'s inspire, support, and empower each Other to reach new heights of creative excellence'
	}
]
</script>

<template>
	<div class="bg-[#ffffff] w-screen h-screen flex items-center justify-center p-20">
		<columns-card
			v-for="(item, i) in list"
			:class="[
				{
					'rounded-l-2xl' : i === 0,
					'rounded-r-2xl' : i === list.length - 1
				}
			]"
			:key="item.title"
			:title="item.title"
			:textColor="item.textColor"
			:backgroundColor="item.backgroundColor"
			:icon="item.icon"
			:content="item.content"
		></columns-card>
	</div>
</template>

<style scoped>

</style>