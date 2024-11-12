import { ulid } from 'ulidx'

export type TestimonialInfo ={
	id: string
	avatar: string
	name: string
	title: string
	description: string
}

export const useTestimonials = defineStore( 'testimonials', () => {
	const testimonials = ref<TestimonialInfo[]>([
		{
			id: ulid(),
			avatar: 'https://i.pravatar.cc/60?img=3',
			name: 'Carmen Walmsley',
			title: 'Head of Community @ByteBlast Solutions',
			description: 'This project management app is a game-changer! It\'s like having a virtual project manager by your side, keeping everything organized and on track. I\'ve never felt more in control of my projects'
		},
		{
			id: ulid(),
			avatar: 'https://i.pravatar.cc/60?img=5',
			name: 'Kevin Dandrea',
			title: 'Project Manager @DataDynamo Solutions',
			description: 'I\'ve tried countless project management tools, but this app takes the cake. It\'s intuitive, efficient, an packed with features that make managing comple projects a breeze. I can\'t imagine working without it!'
		},
		{
			id: ulid(),
			avatar: 'https://i.pravatar.cc/60?img=4',
			name: 'Sarah Price',
			title: 'Business Analyst @Sorah C. Price Wilson',
			description: 'With this app, l\'ve finally found the perfect solution fo keeping my team aligned and productive. From tas assignment to progress tracking. It\'s a must-have for any seriou project manager.'
		},
		{
			id         : ulid(),
			avatar     : 'https://i.pravatar.cc/60?img=2',
			name       : 'John Doe',
			title      : 'CEO @Doe Enterprises',
			description: 'This app has revolutionized the way we manage projects. It\'s user-friendly, feature-rich, and has helped us streamline our workflow. Our team is more productive than ever, and we owe it all to this amazing tool.'
		},
		{
			id         : ulid(),
			avatar     : 'https://i.pravatar.cc/60?img=1',
			name       : 'Jane Smith',
			title      : 'Product Manager @Smith & Co.',
			description: 'I can\'t say enough good things about this app. It has completely transformed the way we work, making project management a breeze. I highly recommend it to anyone looking to take their projects to the next level.'
		},
		{
			id         : ulid(),
			avatar     : 'https://i.pravatar.cc/60?img=6',
			name       : 'David Johnson',
			title      : 'CTO @Johnson Technologies',
			description: 'This app is a game-changer! It has everything you need to manage projects effectively, from task assignment to progress tracking. I can\'t imagine working without it!'
		},
		{
			id         : ulid(),
			avatar     : 'https://i.pravatar.cc/60?img=7',
			name       : 'Emily Brown',
			title      : 'Product Manager @Brown & Co.',
			description: 'I\'ve tried countless project management tools. It\'s intuitive, efficient, and packed with features that make managing complex projects a breeze. Our team is more organized and productive than ever, thanks to this amazing tool.'
		},
		{
			id         : ulid(),
			avatar     : 'https://i.pravatar.cc/60?img=8',
			name       : 'Michael Wilson',
			title      : 'CEO @Wilson Enterprises',
			description: 'This app has revolutionized the way we manage projects. It\'s user-friendly, feature-rich, and has helped us streamline our workflow. Our team is more organized and productive than ever, thanks to this amazing tool.'
		},
		{
			id         : ulid(),
			avatar     : 'https://i.pravatar.cc/60?img=9',
			name       : 'Laura Johnson',
			title      : 'CTO @Johnson Technologies',
			description: 'I can\'t say enough good things about this app. It has completely transformed the way we work, making project management a breeze. I highly recommend it to anyone looking to take their projects to the next level.'
		},
		{
			id         : ulid(),
			avatar     : 'https://i.pravatar.cc/60?img=10',
			name       : 'Chris Brown',
			title      : 'Product Manager @Brown & Co.',
			description: 'This app is a game-changer! It has everything you need to manage projects effectively, from task assignment to progress tracking. Our team is more organized and productive than ever, thanks to this amazing tool. I can\'t imagine working without it!'
		},
		{
			id         : ulid(),
			avatar     : 'https://i.pravatar.cc/60?img=11',
			name       : 'Samantha Wilson',
			title      : 'CEO @Wilson Enterprises',
			description: 'I\'ve tried countless project management tools. It\'s intuitive, efficient, and packed with features that make managing complex projects a breeze. Our team is more organized and productive than ever, thanks to this amazing tool.'
		},
		{
			id         : ulid(),
			avatar     : 'https://i.pravatar.cc/60?img=12',
			name       : 'Tom Johnson',
			title      : 'CTO @Johnson Technologies',
			description: 'This app has revolutionized the way we manage projects. It\'s user-friendly, feature-rich, and has helped us streamline our workflow. Our team is more organized and productive than ever, thanks to this amazing tool.'
		},
	])

	return {
		testimonials
	}
})