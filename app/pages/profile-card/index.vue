<script setup
	lang="ts">
import SocialCard from '~/components/SocialCard.vue'

const socials : SocialCard[] = [
	{
		socialName: 'i-mdi-facebook',
		socialNick: 'johnnyrogers'
	},
	{
		socialName: 'i-mdi-linkedin',
		socialNick: 'johnnyrogers'
	},
	{
		socialName: 'i-mdi-twitter',
		socialNick: 'johnnyrogers'
	},
	{
		socialName: 'i-mdi-linkedin',
		socialNick: 'johnnyrogers'
	},
	{
		socialName: 'i-mdi-instagram',
		socialNick: 'johnnyrogers'
	},
	{
		socialName: 'i-mdi-dribbble',
		socialNick: 'johnnyrogers'
	}
]
</script>

<template>
	<div class="w-full h-full">
		<social-card name="Johnny Rogers"
			social-name="@johnnyrogers"
			description="Crafting brand and communication strategies, creating visual designs. leading art direction, and capturing portraits through photography."
			:socials
		></social-card>
	</div>
</template>

<style scoped>

</style>
